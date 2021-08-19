const mongoose = require("mongoose")
const { Schema } = mongoose;
function schema(x) {
    const certificateSchema = new Schema(
        {
            name: String,
            keyId: String,
            email: String,
            contact: Number,
            certificateType: String
        },
        { collection: x }
    )
    return certificateSchema
}

const model1 = mongoose.model('Student', schema("student"))
const model2 = mongoose.model('Teacher', schema("teacher"))
const model3 = mongoose.model('Donor', schema("donor"))

module.exports = {
    student: model1,
    teacher: model2,
    donor: model3,
}