const express = require('express')
const { engine } = require('express-handlebars')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT
require('./config/mongoose')

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  return res.render('index')
})

app.listen(PORT, () => {
  console.info(`Express server is listening at 127.0.0.1:${PORT}`)
})
