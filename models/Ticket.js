const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const TicketSchema = new Schema ({
   
    subject: {
        type: String,
        required: true
    },
    description:{
        type:String, 
        required:true
    },
    request_type:{
        type:String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"New"
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});

module.exports = Ticket = mongoose.model('tickets', TicketSchema);