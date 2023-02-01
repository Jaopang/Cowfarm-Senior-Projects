const {
  createCowEvent,
  getCowEvents,
  getCowEvent,
  updateCowEvent,
  deleteCowEvent,
} = require("../controller/cowEvent_controller");
module.exports = function (fastify, opts, done) {
  fastify.get("/cowEvent", getCowEvents);
  fastify.get("/cowEvent/:id", getCowEvent);
  fastify.post("/cowEvent", createCowEvent);
  fastify.put("/cowEvent/:id", updateCowEvent);
  fastify.delete("/cowEvent/:id", deleteCowEvent);
  done();
};
