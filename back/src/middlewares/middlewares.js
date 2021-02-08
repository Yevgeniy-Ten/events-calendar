import express from "express";
import cors from "cors"
import config from "../config"

const corsSetup = cors({
    origin: config.frontendURL,
    optionsSuccessStatus: 200
})
const jsonParser = express.json()
const allMiddlewares = [jsonParser, corsSetup]
export default allMiddlewares