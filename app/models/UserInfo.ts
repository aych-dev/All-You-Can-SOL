import mongoose, { Schema } from "mongoose";

const uri = process.env.MONGODB_URI

if (!uri) {
    console.error('uri is undefined')
    process.exit(1)
}

mongoose.connect(uri)
mongoose.Promise = global.Promise

const userInfoSchema = new Schema(
    {
        wallet: String,
        email: String
    }
)

const UserInfo = mongoose.models.Ticket || mongoose.model('UserInfo', userInfoSchema)

export default UserInfo