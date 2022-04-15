const {Schema, model} = require('mongoose')

const recordsSchema =  new Schema({
    artist: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        enum: ["rock", "country", "reggae"],
        required: true
    },

    releaseYear: {
        type: Number,
        required: true
    },

    // available: {
    //     type: Boolean,
    //     required: true
    // },
    
    price: {
        type: Number,
        required: true
    },
    //Stay inside these braces
},
    //Stay above this line
    {
    timeseries: true,
    timestamps: true
    }
);

const Records =  model("Records", recordsSchema)

module.exports = Records;