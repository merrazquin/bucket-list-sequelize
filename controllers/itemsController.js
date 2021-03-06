const express = require('express'),
  router = express.Router(),
  db = require('../models')

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  db.item.findAll({ include: [db.milestone], order: ['item'] }).then(items => {
    db.milestone.findAll({ order: ['name'] }).then(milestones => res.render('index', { items: items, milestones: milestones }))
  })
})

router.post('/api/items', (req, res) => {
  db.item.create(
    // create an object using only `item` and `accomplished` and either `milestone` or `milestoneId` from `req.body`
    (({ item, accomplished, milestoneId, milestone }) => (milestoneId ? { item, accomplished, milestoneId } : { item, accomplished, milestone }))(req.body)
    , { include: [db.milestone] }
  ).then(item => res.json({ id: item.id }))
})

router.put('/api/items/:id', (req, res) => {
  let condition = 'id = ' + req.params.id

  db.item.update((({ item, accomplished }) => ({ item, accomplished }))(req.body), {
    where: {
      id: req.params.id
    }
  }).then(data => res.status(data[0] === 0 ? 404 : 200).end())
})


// Export routes for server.js to use.
module.exports = router
