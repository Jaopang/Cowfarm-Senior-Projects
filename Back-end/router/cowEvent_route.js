const {
  createCowEvent,
  getCowEvents,
  getCowEvent,
  updatedCowEvent,
  deletedCowEvent,
} = require("../controller/cowEvent_controller");
module.exports = function (fastify, opts, done) {
  fastify.get("/cowEvent", getCowEvents);
  fastify.get("/cowEvent/:id", getCowEvent);
  fastify.post("/cowEvent", createCowEvent);
  fastify.post("/cowEvent/:id", createCowEvent);
  fastify.put("/cowEvent/:id", updatedCowEvent);
  fastify.delete("/cowEvent/:id", deletedCowEvent);
  done();
};
