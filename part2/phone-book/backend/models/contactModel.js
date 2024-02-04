const mongoose = require('mongooses')

const contactModel = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add the name of contact']
    },
    number: {
        type: String,
        required: [true, 'please add the phone number of contact']
    }
},{
    timestamps: true,
})


module.exports = mongoose.model('ContactModel', contactModel)