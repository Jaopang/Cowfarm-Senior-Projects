const prisma = require("../src/connection");

module.exports.createVaccine = async function (req, reply) {
  const { nameVaccineTH, nameVaccineEng, vaccineId } = req.body;
  const newVaccine = await prisma.CowEvent.create({
    data: {
      nameVaccineTH,
      nameVaccineEng,
      vaccineId,
    },
  });
  reply.code(201).send(newVaccine);
};

module.exports.getVaccine = async function (req, reply) {
  const Vaccine = await prisma.CowEvent.findMany();
  reply.send(Vaccine);
};

module.exports.getVaccine = async function (req, reply) {
  const { id } = req.params;
  const Vaccine = await prisma.Vaccine.findUnique({
    where: {
      id: Number(id),
    },
  });
  reply.send(Vaccine);
};

module.exports.updateVaccine = async function (req, reply) {
  const { id } = req.params;
  const { nameVaccineTH, nameVaccineEng, vaccineId, createdAt } = req.body;
  const updateVaccine = await prisma.Vaccine.update({
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
  reply.send(updateVaccine);
};

module.exports.deleteVaccine = async function (req, reply) {
  const { id } = req.params;
  const deletedVaccine = await prisma.Vaccine.delete({
    where: {
      id: Number(id),
    },
  });
  reply.send(deletedVaccine);
};
