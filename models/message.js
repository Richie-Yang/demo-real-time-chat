const mongoose = require('mongoose')
const { Schema } = mongoose

const messageSchema = new Schema({
  name: String,
  message: String
})

module.exports = mongoose.model('Message', messageSchema)
