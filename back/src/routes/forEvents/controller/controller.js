import Event from "../../../models/Event";


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

    }
}

export default new EventController()