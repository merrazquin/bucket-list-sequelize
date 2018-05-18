const express = require('express'),
  router = express.Router(),
  item = require('../models/item.js')

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  item.all(data => res.render('index', { items: data }))
})

router.post('/api/items', (req, res) => {
  item.create(['item', 'accomplished'], [req.body.item, req.body.accomplished || 0],  result =>  res.json({ id: result.insertId }))
})

router.put('/api/items/:id', (req, res) => {
  let condition = 'id = ' + req.params.id

  item.update(
    {
      accomplished: req.body.accomplished
    },
    condition,
    result => res.status(result.changedRows === 0 ? 404 : 200).end()
  )
})


// Export routes for server.js to use.
module.exports = router
