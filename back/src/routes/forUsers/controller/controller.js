import User from "../../../models/User";
import config from "../../../config";

class UsersController {

    async create(req, res) {
        try {
            const {name, password, login} = req.body
            const newUser = new User({name, password, login})
            const errors = newUser.validateSync()
            if (errors) return res.status(400).json(errors)
            await newUser.save()
            res.status(201).json(newUser)
        } catch (e) {
            res.status(500).json({msg: e.message || "Internal server error"})
        }
    }

    async sessions(req, res) {
        try {
            const msg = "Not found, please try"
            const {password, login} = req.body
            const candidate = await User.findOne({login})
            if (!candidate) return res.status(404).json({msg})
            const passIsMatch = await candidate.checkPassword(password)
            if (!passIsMatch) return res.status(404).json({msg})
            candidate.updateToken()
            await candidate.save()
            res.json(candidate)
        } catch (e) {
            res.status(500).json({msg: e.message || "Internal server error"})
        }
    }


    async deleteSessions(req, res) {
        try {
            const msg = "logouted!"
            const token = req.get("Authorization")
            if (!token) return res.json(msg)
            const user = await User.findOne({token})
            if (!user) return res.json(msg)
            user.updateToken()
            await user.save()
            res.json(msg)
        } catch (e) {
            res.sendStatus(500)
        }
    }

    async facebookSessions(req, res) {
        const inputToken = req.body.accessToken;
        const accessToken = config.facebookApp.accessToken();
        const checkTokenURL =
            `https://graph.facebook.com/debug_token?input_token=${inputToken}&access_token=${accessToken}`;
        try {
            const response = await axios.get(checkTokenURL)
            const {data} = response.data
            if (data.error) {
                return res.status(401).send({msg: "Facebook token incorrect"});
            }
            if (req.body.id !== data.user_id) {
                return res.status(401).send({msg: "Wrong user ID"});
            }
            let user = await User.findOne({facebookId: req.body.id})
            if (!user) {
                user = new User({
                    login: req.body.email,
                    password: nanoid(),
                    facebookId: req.body.id,
                    name: req.body.name,
                })
                await user.save()
                return res.json(user)
            }
            user.updateToken()
            user = await user.save()
            res.json(user)
        } catch (error) {
            return res.status(401)
        }
    }
}

export default new UsersController()
