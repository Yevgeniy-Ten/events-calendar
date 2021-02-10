import {Router} from "express"
import usersRoute from "./forUsers/users.route";
import eventsRoute from "./forEvents/event.route";

const mainRoute = Router()


mainRoute.use("/users", usersRoute)
mainRoute.use("/events", eventsRoute)

export default mainRoute