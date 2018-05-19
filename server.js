const express = require('express'),
  bodyParser = require('body-parser'),
  exphbs = require('express-handlebars'),
  routes = require('./controllers/itemsController.js'),
  PORT = process.env.PORT || 3000,
  app = express(),
  db = require("./models")

// Serve static content for the app from the 'public' directory in the application directory.
app.use(express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// use handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use controller for routing
app.use(routes)

db.sequelize.sync().then(() => app.listen(PORT, () => console.log("App listening on PORT " + PORT)));
