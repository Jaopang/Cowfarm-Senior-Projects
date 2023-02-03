const prisma = require("../src/connection");

module.exports.createCow = async function (req, reply) {
  const { cowImage, cowName, dobCow, sex, detail, farmId } = req.body;
  const newCow = await prisma.Cow.create({
    data: {
      cowImage,
      cowName,
      dobCow,
      sex,
      detail,
      farmId: Number(farmId),
      include: { farm: true },
    },
  });
  reply.code(201).send(newCow);
};

module.exports.getCows = async function (req, reply) {
  const Cows = await prisma.Cow.findMany();
  reply.send(Cows);
};

module.exports.getCow = async function (req, reply) {
  const { id } = req.params;
  const Cow = await prisma.Cow.findUnique({
    where: {
      id: Number(id),
    },
  });
  reply.send(Cow);
};

module.exports.updateCow = async function (req, reply) {
  const { id } = req.params;
  const { cowImage, cowName, dobCow, sex, detail } = req.body;
  const updatedCow = await prisma.Cow.update({
    where: {
      id: Number(id),
    },
    data: {
      cowImage,
      cowName,
      dobCow,
      sex,
      detail,
    },
  });
  reply.send(updatedCow);
};

module.exports.deleteCow = async function (req, reply) {
  const { id } = req.params;
  const deletedCow = await prisma.Cow.delete({
    where: {
      id: Number(id),
    },
  });
  reply.send(deletedCow);
};
