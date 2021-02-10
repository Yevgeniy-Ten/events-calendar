import EventController from "./controller/controller"
import {Router} from "express"
import authMiddleware from "../../middlewares/auth.middleware";

const eventsRoute = Router()


eventsRoute.post("/", authMiddleware, EventController.create)
eventsRoute.get("/", authMiddleware, EventController.get)
eventsRoute.delete("/:id", authMiddleware, EventController.delete)


export default eventsRoute