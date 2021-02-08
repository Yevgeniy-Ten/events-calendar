import mongoose from "mongoose"
import config from "../config";

const mongoConnect = async () => {
    await mongoose.connect(config.mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
}

export const db = mongoose.connection

export default mongoConnect