require('dotenv').config()
const mysql = require('mysql'),
  // use the environment var JAWSDB_URL if it exists
  connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'bucketList_db'
  })

// Make the connection
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

// Export connection for our ORM to use.
module.exports = connection
