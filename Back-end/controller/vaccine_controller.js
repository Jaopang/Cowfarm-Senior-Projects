const prisma = require("../src/connection");

module.exports.createCowVaccine = async function (req, reply) {
  const { nameVaccineTH, nameVaccineEng, vaccineId } = req.body;
  const newCowVaccine = await prisma.CowVaccine.create({
    data: {
      nameVaccineTH,
      nameVaccineEng,
      vaccineId,
      cowId: Number(id),
    },
  });
  reply.code(201).send(newCowVaccine);
};

module.exports.getCowVaccines = async function (req, reply) {
  const CowVaccines = await prisma.CowVaccine.findMany();
  reply.send(CowVaccines);
};

module.exports.getCowVaccine = async function (req, reply) {
  const { id } = req.params;
  const CowVaccine = await prisma.CowVaccine.findUnique({
    where: {
      id: Number(id),
    },
  });
  reply.send(CowVaccine);
};

module.exports.updateCowVaccine = async function (req, reply) {
  const { id } = req.params;
  const { nameVaccineTH, nameVaccineEng, vaccineId, createdAt } = req.body;
  const updateCowVaccine = await prisma.CowVaccine.update({
    where: {
      id: Number(id),
    },
    data: {
      nameVaccineTH,
      nameVaccineEng,
      vaccineId,
      createdAt,
    },
  });
  reply.send(updateCowVaccine);
};

module.exports.deleteCowVaccine = async function (req, reply) {
  const { id } = req.params;
  const deletedCowVaccine = await prisma.CowVaccine.delete({
    where: {
      id: Number(id),
    },
  });
  reply.send(deletedCowVaccine);
};
