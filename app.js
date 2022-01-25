const express = require('express')
const { engine } = require('express-handlebars')
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
const PORT = process.env.PORT
require('./config/mongoose')

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

app.listen(PORT, () => {
  console.info(`Express server is listening at 127.0.0.1:${PORT}`)
})
