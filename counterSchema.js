    const mongoose = require('mongoose')
    const schema = mongoose.Schema;
    const counterSchema = new schema({
        todoCounterModel: { type: Number, required: false },
        count: { type: Number, required: false }
    })

    module.exports = mongoose.model('counter', counterSchema,'counter')