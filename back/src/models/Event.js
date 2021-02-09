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
        maxlength: [255, "Name is long"]
    },
    duration: {
        type: String,
        required: true,
    },
    createdDate: {
        type: Date,
        required: true
    },
    showingFor: [{
        type: Types.ObjectId,
        ref: "User"
    }]
})
EventSchema.plugin(mongooseIdValidator)
const Event = model("Event", EventSchema)
export default Event