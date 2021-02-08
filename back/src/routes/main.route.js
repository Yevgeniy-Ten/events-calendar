import {Router} from "express"
import usersRoute from "./forUsers/users.route";

const mainRoute = Router()


mainRoute.use("/users", usersRoute)

export default mainRoute