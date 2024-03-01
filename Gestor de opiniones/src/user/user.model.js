import { Schema, model } from 'mongoose'

const userSchema = Schema({
    name: {
        type: String,
        require: [true, "Name is require"]
    },
    username: {
        type: String,
        unique: true,
        require: [true, "Username is require"]
    },
    email: {
        type: String,
        unique: true,
        require: [true, "Email is require"]
    },
    password: {
        type: String,
        require: [true, "Password is require"]
    }
},{
    versionKey: false
})

export default model('user', userSchema)