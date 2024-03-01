import {Schema, model} from 'mongoose'

const publicationSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        require: [true, "User is require"]
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        require: [true, "Category is require"]
    },
    title: {
        type: String,
        require: [true, "Title is require"]
    },
    description: {
        type: String,
        require: [true, "Description is require"]
    }
},{
    versionKey: false
})

export default model('publication', publicationSchema)