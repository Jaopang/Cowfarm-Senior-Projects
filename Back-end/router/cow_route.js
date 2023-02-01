const {
  createCow,
  getCows,
  getCow,
  updateCow,
  deleteCow,
} = require("../controller/cow_controller");
module.exports = function (fastify, opts, done) {
  fastify.get("/cow", getCows);
  fastify.get("/cow/:id", getCow);
  fastify.post("/cow", createCow);
  fastify.put("/cow/:id", updateCow);
  fastify.delete("/cow/:id", deleteCow);
  done();
};
