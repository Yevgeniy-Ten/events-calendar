import {Router} from "express"
import UserController from "./controller/controller"

const usersRoute = Router()
usersRoute.post("/", UserController.create)
usersRoute.post("/sessions", UserController.sessions)
usersRoute.post("/facebook/sessions", UserController.facebookSessions)
usersRoute.delete("/sessions", UserController.deleteSessions)


export default usersRoute