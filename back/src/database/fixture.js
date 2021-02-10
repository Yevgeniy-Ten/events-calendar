import {db} from "./mongodb";
import mongoConnect from "./mongodb";
import User from "../models/User";
import Event from "../models/Event";

mongoConnect()
db.once("open", async () => {
    try {
        await db.dropCollection("users")
        await db.dropCollection("events")
    } catch (e) {
        console.log("collections not found")
    }
    const [admin, client] = await User.create({
            name: "admin",
            email: "admin@mail.ru",
            password: "admin"
        },
        {
            name: "client",
            email: "client@mail.ru",
            password: "client"
        })
    const [event1, event2, event3, event4, event5, event6] = await Event.create({
            name: "Прогулка",
            duration: "60 seconds",
            date: new Date().toJSON(),
            author: admin._id
        },
        {
            name: "Прогулка",
            duration: "60 seconds",
            date: new Date().toJSON(),
            author: admin._id
        }, {
            name: "Прогулка",
            duration: "60 seconds",
            date: new Date().toJSON(),
            author: admin._id
        }, {
            name: "Прогулка",
            duration: "60 seconds",
            date: new Date().toJSON(),
            author: client._id
        }, {
            name: "Прогулка",
            duration: "60 seconds",
            date: new Date().toJSON(),
            author: client._id
        }, {
            name: "Прогулка",
            duration: "60 seconds",
            date: new Date().toJSON(),
            author: client._id
        })
    await admin.updateOne({
        $push: {
            friends: client._id
        }
    })
    await client.updateOne({
        $push: {
            friends: admin._id,
            events: [event1._id, event2._id, event3._id]
        }
    })
    await client.updateOne({
        $push: {
            friends: admin._id,
            events: [event4._id, event5._id, event6._id]
        }
    })
    await db.close()
})