import User from "../models/User"

const authMiddleware = async (req, res, next) => {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const msg = "Forbidden"
        const token = req.get("Authorization")
        if (!token) {
            return res.status(403).json({msg})
        }
        const candidate = await User.findOne({token}).exec()
        if (!candidate) {
            return res.status(403).json({msg})
        }
        req.user = candidate
        next()
    } catch (e) {
        return res.status(500).json({msg: e.message || "Internal server error"})
    }
}
export default authMiddleware
