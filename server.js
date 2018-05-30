var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var path = require('path')
var config = require('./webpack.config.dev')

var app = express()
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})



app.listen(8090, function (err) {
  if (err) {
    return console.error(err)
  }

  opn('http://localhost:8090')
})