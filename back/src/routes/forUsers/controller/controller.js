import User from "../../../models/User";
import config from "../../../config";
import axios from "axios"
import {nanoid} from "nanoid";

class UsersController {

    async create(req, res) {
        try {
            const {name, password, email} = req.body
            const newUser = new User({name, password, email})
            const errors = newUser.validateSync()
            if (errors) return res.status(400).json(errors)
            await newUser.save()
            res.status(201).json(newUser)
        } catch (e) {
            res.status(500).json({msg: e.message || "Internal server error"})
        }
    }

    async getFriends(req, res) {
        try {
            const result = await req.user.populate("friends", "name email _id").execPopulate()
            if (!result.friends.length) return res.sendStatus(404)
            res.json(result.friends)
        } catch (e) {
            res.status(500).json({msg: e.message || "Internal server error"})
        }
    }

    async addFriend(req, res) {
        try {
            const candidateEmail = req.body.email
            if (!candidateEmail) return res.status(400).json({msg: "Send email please"})
            const candidateOnFriend = await User.findOne({email: candidateEmail})
            if (!candidateOnFriend) return res.status(404).json({msg: "Not found"})
            const user = req.user
            const isExist = user.friends.find(friendID => friendID.equals(candidateOnFriend._id))
            if (isExist) return res.status(400).json({msg: "Friend is exist in your friends"})
            const result = await user.updateOne({
                $push: {
                    friends: candidateOnFriend._id
                }
            })
            if (result.nModified) {
                return res.status(201).json({msg: "Success add:)"})
            }
            res.status(400).json({msg: "Some error when adding, write admin"})
        } catch (e) {
            res.status(500).json({msg: e.message || "Internal server error"})
        }
    }

    async sessions(req, res) {
        try {
            const msg = "Not found, please try"
            const {password, email} = req.body
            const candidate = await User.findOne({email})
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

    async deleteFriend(req, res) {
        try {
            const {id: friendId} = req.params
            const user = req.user
            const result = await user.updateOne({
                $pull: {
                    friends: friendId
                }
            })
            if (result.nModified) {
                return res.json({id: friendId})
            }
            res.sendStatus(400)
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
                    email: req.body.email,
                    password: nanoid(),
                    facebookId: req.body.id,
                    name: req.body.name,
                })
                const errors = user.validateSync()
                if (errors) return res.status(400).json(errors)
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
