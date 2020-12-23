const e = require("express")

module.exports = app => {
  const events = require("../controllers/event.controller")
  var router = require("express").Router()
  // Create a new Event
  router.post("/", events.create)

  //Retrieve all Events
  router.get("/", events.findAll)

  // Retrieve a single Event with id
  router.get("/:id", events.findOne)

  // Update a Event with id
  router.put('/:id', events.update)

  // Delete a Event with id
  router.delete('/:id', events.delete)

  // Delete all Events
  router.delete('/', events.deleteAll)

  app.use('/api/events', router)
}