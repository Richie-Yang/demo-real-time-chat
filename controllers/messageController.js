const Message = require('../models/message')

module.exports = {
  getMessages: (req, res) => {
    return Message.find()
      .lean()
      .then(messages => {
        console.log(messages)
        res.send(messages)
      })
      .catch(err => console.log(err))
  },

  postMessage: (req, res) => {
    const { name, message } = req.body

    return Message.create({ name, message })
      .catch(err => console.log(err))
  }
}