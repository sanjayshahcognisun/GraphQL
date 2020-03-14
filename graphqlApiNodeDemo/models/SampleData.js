const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleDataSchema = new Schema({
    year : {type:String},
    months : [{
        name: {type:String},
        value: {type:String}
    }],
});

module.exports = mongoose.model('demodata', SampleDataSchema);