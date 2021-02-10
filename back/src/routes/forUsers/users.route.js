import {Router} from "express"
import UserController from "./controller/controller"
import authMiddleware from "../../middlewares/auth.middleware";

const usersRoute = Router()
usersRoute.post("/", UserController.create)
usersRoute.post("/sessions", UserController.sessions)
usersRoute.get("/friends", authMiddleware, UserController.getFriends)
usersRoute.post("/add", authMiddleware, UserController.addFriend)
usersRoute.post("/facebook/sessions", UserController.facebookSessions)
usersRoute.delete("/sessions", UserController.deleteSessions)
usersRoute.delete("/friends/:id", authMiddleware, UserController.deleteFriend)


export default usersRoute