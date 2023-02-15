    const mongoose = require('mongoose')
    var autoIncrement = require('mongoose-auto-increment');
    const todoSchema = mongoose.Schema({
        id: { type: Number, required: false },
        title: { type: String, required: true },
        description: { type: String, required: true },
        startdate:{type:Date, required:true},
        enddate: { type: Date, required: true },
        status: { type: Number, required: true }
    })


    module.exports.todo = mongoose.model('todos', todoSchema);
