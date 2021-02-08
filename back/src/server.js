import express from "express"
import expressWS from "express-ws"
import {nanoid} from "nanoid"
import mainRoute from "./routes/main.route";
import allMiddlewares from "./middlewares/middlewares";
import config from "./config";
import mongoConnect from "./database/mongodb";
const app = express()
const WSServer = expressWS(app)
const aWss = WSServer.getWss()
allMiddlewares.forEach(middleware => app.use(middleware))

app.ws("/app", (ws) => {
    ws.id = nanoid()
    ws.on("message", (actionString) => {

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

