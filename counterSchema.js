const mongoose = require("mongoose")
const { Schema } = mongoose;
function schema(x) {
    const counterSchema = new Schema(
        {
            count: Number
        },
        { collection: x }
    )
    return counterSchema
}
const model1 = mongoose.model('Counter1', schema("counter1"))
const model2 = mongoose.model('Counter2', schema("counter2"))
const model3 = mongoose.model('Counter3', schema("counter3"))

module.exports = {
    counter1: model1,
    counter2: model2,
    counter3: model3,
}