import {Schema,model} from 'mongoose'

const articleSchema = new Schema ({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
},{timestamps:true})

export default model('Article',articleSchema)