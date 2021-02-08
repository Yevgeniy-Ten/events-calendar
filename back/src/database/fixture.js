import {db} from "./mongodb";
import mongoConnect from "./mongodb";
import User from "../models/User";

mongoConnect()
db.once("open", async () => {
    try {
        db.dropCollection("users")
    } catch {
        console.log("collections not found")
    }
    await User.create({
        name: "admin",
        login: "admin",
        password: "admin"
    })

    await db.close()
})