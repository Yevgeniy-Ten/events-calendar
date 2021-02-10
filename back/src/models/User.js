import {model, Schema, Types} from "mongoose"
import mongooseIdValidator from "mongoose-id-validator"
import bcrypt from "bcrypt"
import config from "../config";
import {nanoid} from "nanoid"

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: async function (email) {
                if (this.isNew) {
                    const user = await User.findOne({email})
                    return !user
                }
                return true
            },
            message: "This email don't allowed"
        }
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        private: true,
        minlength: [3, "Password very easy"]
    },
    token: {
        type: String,
        default: nanoid
    },
    facebookId: Number,
    friends: [
        {
            type: Types.ObjectId,
            ref: "User"
        }
    ],
    events: [
        {
            type: Types.ObjectId,
            ref: "Event"
        }
    ]
})
UserSchema.set("toJSON", {
    transform(doc, ret) {
        delete ret.password
        delete ret.__v
        return ret
    }
})

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(config.saltLevel)
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

UserSchema.methods.checkPassword = function (password) {
    return bcrypt.compare(password, this.password)
}
UserSchema.methods.updateToken = function () {
    this.token = nanoid()
}
UserSchema.plugin(mongooseIdValidator)
const User = model("User", UserSchema)

export default User;
