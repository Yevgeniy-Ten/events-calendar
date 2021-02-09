import express from "express"
import expressWS from "express-ws"
import {nanoid} from "nanoid"
import mainRoute from "./routes/main.route";
import allMiddlewares from "./middlewares/middlewares";
import config from "./config";
import mongoConnect from "./database/mongodb";
import {toWSString} from "./helpers/helpers";
import eventController from "./routes/forEvents/controller/controller";

const app = express()
const WSServer = expressWS(app)
const aWss = WSServer.getWss()
allMiddlewares.forEach(middleware => app.use(middleware))

app.ws("/user/events", (ws, req) => {
    ws.id = nanoid()
    const isValidUser = req.get("Authorization")
    ws.on("message", async (actionString) => {
        try {
            const action = JSON.parse(actionString)
            const response = await eventController(action)
            ws.send(toWSString(response.type, response.data))
        } catch (e) {
            ws.send(toWSString("CLIENT_ERROR", "Correct you query"))
        }
    })
})
const start = async () => {
    try {
        await mongoConnect()
        app.use(mainRoute)
        app.listen(config.PORT, () => console.log(`${config.PORT} SERVER`))
    } catch (e) {
        console.log(e)
    }
}

start()

