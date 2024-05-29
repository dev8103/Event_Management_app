const express = require("express");
const router = express.Router();

const {    
    getEvents,
    getEventbyId,
    createEvent,
    updateEvent,
    deleteEvent} = require("../controllers/eventControllers");

router.route("/").get(getEvents);

router.route("/").post(createEvent);

router.route("/:id").get(getEventbyId);

router.route("/:id").put(updateEvent);

router.route("/:id").delete(deleteEvent);

module.exports = router;
