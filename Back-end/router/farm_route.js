const {
  createFarm,
  getFarms,
  getFarm,
  updateFarm,
  deleteFarm,
} = require("../controller/farm_controller");
module.exports = function (fastify, opts, done) {
  fastify.get("/farm", getFarms);
  fastify.get("/farm/:id", getFarm);
  fastify.post("/farm", createFarm);
  fastify.put("/farm/:id", updateFarm);
  fastify.delete("/farm/:id", deleteFarm);
  done();
};
