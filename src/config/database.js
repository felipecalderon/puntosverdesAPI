import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config()
const {MONGO_PREFIX, MONGO_USR, MONGO_PWR, MONGO_SERVER, MONGO_POSTFIX} = process.env
mongoose.set('strictQuery', false);
const connectMongoDb = async () => {
    try {
        mongoose.connect(`${MONGO_PREFIX}${MONGO_USR}:${MONGO_PWR}@${MONGO_SERVER}/${MONGO_POSTFIX}`)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error);
    }
}
export { connectMongoDb }