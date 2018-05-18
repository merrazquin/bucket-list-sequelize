const orm = require('../config/orm.js')

module.exports = {
  all: function (callback) {
    orm.selectAll('items', callback)
  },
  create: function (cols, vals, callback) {
    orm.insertOne('items', cols, vals, callback)
  },
  update: function (objColVals, condition, callback) {
    orm.updateOne('items', objColVals, condition, callback)
  }
}
