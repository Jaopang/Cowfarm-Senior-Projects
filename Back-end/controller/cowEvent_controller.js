const prisma = require("../src/connection");

module.exports.createCowEvent = async function (req, reply) {
  const { semen, breed } = req.body;
  const newCowEvent = await prisma.CowEvent.create({
    data: {
      semen,
      breed,
    },
  });
  reply.code(201).send(newCowEvent);
};

module.exports.getCowEvents = async function (req, reply) {
  const CowEvents = await prisma.CowEvent.findMany();
  reply.send(CowEvents);
};

module.exports.getCowEvent = async function (req, reply) {
  const { id } = req.params;
  const CowEvent = await prisma.CowEvent.findUnique({
    where: {
      id: Number(id),
    },
  });
  reply.send(CowEvent);
};

module.exports.updateCowEvent = async function (req, reply) {
  const { id } = req.params;
  const { semen, breed } = req.body;
  const updatedCowEvent = await prisma.CowEvent.update({
    where: {
      id: Number(id),
    },
    data: {
      semen,
      breed,
    },
  });
  reply.send(updatedCowEvent);
};

module.exports.deleteCowEvent = async function (req, reply) {
  const { id } = req.params;
  const deletedCowEvent = await prisma.CowEvent.delete({
    where: {
      id: Number(id),
    },
  });
  reply.send(deletedCowEvent);
};
