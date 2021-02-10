import Event from "../../../models/Event";
import {dateFormatter} from "../../../helpers/helpers";

const getEventsFromDay = async (author, startDay, endDay) => {
    try {
        return await Event.find({
            author,
            date: {
                $gte: startDay,
                $lte: endDay,
            }
        }).populate("author", "name").exec()
    } catch (e) {
        throw e
    }
}

class EventController {
    async create(req, res) {
        try {
            req.body.author = req.user._id
            const newEvent = new Event(req.body)
            const errors = newEvent.validateSync()
            if (errors) return res.status(400).json(errors)
            await newEvent.save()
            res.status(201).json(newEvent)
        } catch (e) {
            return res.sendStatus(500)
        }
    }

    async get(req, res) {
        try {
            const {date} = req.query
            const user = req.user
            let events = []
            const friendsEvents = []
            if (date) {
                const dateWorker = dateFormatter(date)
                events = await getEventsFromDay(user._id, dateWorker.toStart(date), dateWorker.toEnd(date))
                if (user.friends.length) {
                    for (const friendID of user.friends) {
                        const friendEvents = await getEventsFromDay(friendID,
                            dateWorker.toStart(date), dateWorker.toEnd(date))
                        if (friendEvents.length) {
                            friendsEvents.push(friendEvents)
                        }
                    }
                }
            } else {
                events = await Event.find({
                    author: user._id
                })
            }
            if (!events.length && !friendsEvents.length) return res.sendStatus(404)
            res.json({
                events,
                friendsEvents
            })
        } catch (e) {
            return res.sendStatus(500)
        }
    }
}

export default new EventController()