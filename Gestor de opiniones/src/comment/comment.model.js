import {Schema, model} from 'mongoose'

const commentSchema = Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        require: [true, "User is require"]
    },
    publication: {
        type: Schema.Types.ObjectId,
        ref: "publication",
        require: [true, "Publication is require"]
    },
    comment: {
        type: String,
        require: [true, "Comment is require"]
    }
},{
    versionKey: false
})

export default model('comment', commentSchema)