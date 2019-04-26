const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const UserSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email:{
        type:String, 
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"//www.gravatar.com/avatar/bd6502d87e6b4a1c7f7c9379d2ef2592?s=200&r=pg&..."
    },
    date:{
        type:Date,
        default:Date.now
    },
    user_type:{
        type:String,
        default:"employee"
    }
});

module.exports = User = mongoose.model('users', UserSchema);