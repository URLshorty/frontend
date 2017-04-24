const path = require('path')
const express = require('express')
const port = (process.env.PORT || 3001)
const app = express()

const favicon = require('serve-favicon')
app.enable('trust proxy')

app.use(favicon(path.join(__dirname, 'client', 'data', 'favicon.ico')))

app.use('/static', express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

console.log(`Listening at: ${port}`)

app.listen(port)
