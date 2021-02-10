import Event from "../../../models/Event";
import {dateFormatter} from "../../../helpers/helpers";


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
            let events = []
            if (date) {
                const dateWorker = dateFormatter(date)
                events = await Event.find({
                    author: req.user._id,
                    date: {
                        $gte: dateWorker.toStart(date),
                        $lte: dateWorker.toEnd(date),
                    }
                })
            } else {
                events = await Event.find({
                    author: req.user._id
                })
            }
            if (!events.length) return res.sendStatus(404)
            res.json(events)
        } catch (e) {
            return res.sendStatus(500)
        }
    }
}

export default new EventController()