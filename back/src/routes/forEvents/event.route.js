import EventController from "./controller/controller"
import {Router} from "express"
import authMiddleware from "../../middlewares/auth.middleware";

const eventsRoute = Router()


eventsRoute.post("/", authMiddleware, EventController.create)
eventsRoute.get("/", authMiddleware, EventController.get)


export default eventsRoute