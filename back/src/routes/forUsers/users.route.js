import {Router} from "express"
import UserController from "./controller/controller"
import authMiddleware from "../../middlewares/auth.middleware";

const usersRoute = Router()
usersRoute.post("/", UserController.create)
usersRoute.get("/", authMiddleware, UserController.get)
usersRoute.post("/sessions", UserController.sessions)
usersRoute.post("/facebook/sessions", UserController.facebookSessions)
usersRoute.delete("/sessions", UserController.deleteSessions)


export default usersRoute