const prisma = require("../src/connection");

module.exports.createFarm = async function (req, reply) {
  const { farmName, userId } = req.body;
  const newFarm = await prisma.Farm.create({
    data: {
      farmName,
      userId: Number(userId),
    },
  });
  reply.code(201).send(newFarm);
};

module.exports.getFarms = async function (req, reply) {
  const Farms = await prisma.Farm.findMany({ include: { cows: true } });
  reply.send(Farms);
};

module.exports.getFarm = async function (req, reply) {
  const { id } = req.params;
  const Farm = await prisma.Farm.findUnique({
    where: {
      id: Number(id),
    },
  });
  reply.send(Farm);
};

module.exports.updateFarm = async function (req, reply) {
  const { id } = req.params;
  const { farmName, createdAt } = req.body;
  const updatedFarm = await prisma.Farm.update({
    where: {
      id: Number(id),
    },
    data: {
      farmName,
      createdAt,
    },
  });
  reply.send(updatedFarm);
};

module.exports.deleteFarm = async function (req, reply) {
  const { id } = req.params;
  const deletedFarm = await prisma.Farm.delete({
    where: {
      id: Number(id),
    },
  });
  reply.send(deletedFarm);
};
