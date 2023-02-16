const {
  createVaccine,
  getVaccines,
  getVaccine,
  updateVaccine,
  deleteVaccine,
} = require("../controller/vaccine_controller");
module.exports = function (fastify, opts, done) {
  fastify.get("/vaccine", getVaccines);
  fastify.get("/vaccine/:id", getVaccine);
  fastify.post("/vaccine", createVaccine);
  fastify.put("/vaccine/:id", updateVaccine);
  fastify.delete("/vaccine/:id", deleteVaccine);
  done();
};
