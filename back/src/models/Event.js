import {model, Schema, Types} from "mongoose"
import mongooseIdValidator from "mongoose-id-validator"


const EventSchema = new Schema({
    author: {
        type: Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
        maxlength: [128, "Name is long"]
    },
    duration: {
        type: String,
        required: true,
        maxlength: [255, "Correct duration"]
    },
    date: {
        type: Date,
        required: true,
    }
})
EventSchema.plugin(mongooseIdValidator)
const Event = model("Event", EventSchema)
export default Event