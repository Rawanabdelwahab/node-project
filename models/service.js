import { Schema, model, ObjectId } from "mongoose";
const service = new Schema({
    name: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: 'login',
        required: true
    }
})
export default model('service', service)