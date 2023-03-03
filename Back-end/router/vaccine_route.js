const {
  createCowVaccine,
  getCowVaccines,
  getCowVaccine,
  updateCowVaccine,
  deleteCowVaccine,
} = require("../controller/vaccine_controller");
module.exports = function (fastify, opts, done) {
  fastify.get("/CowVaccine", getCowVaccines);
  fastify.get("/CowVaccine/:id", getCowVaccine);
  fastify.post("/CowVaccine", createCowVaccine);
  fastify.post("/CowVaccine/:id", createCowVaccine);
  fastify.put("/CowVaccine/:id", updateCowVaccine);
  fastify.delete("/CowVaccine/:id", deleteCowVaccine);
  done();
};
