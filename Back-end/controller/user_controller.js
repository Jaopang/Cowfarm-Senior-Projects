const prisma = require("../src/connection");
module.exports.createUser = async function (req, reply) {
  const { name, email, password, lineId, userImage } = req.body;
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
      lineId,
      userImage,
    },
  });
  reply.code(200).send({ id: newUser.id });
};

module.exports.getUsers = async function (req, reply) {
  const users = await prisma.user.findMany();
  reply.send(users);
};

module.exports.getUser = async function (req, reply) {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  reply.send(user);
};

module.exports.updateUser = async function (req, reply) {
  const { id } = req.params;
  const { name, email, password, lineId, userImage } = req.body;
  const updatedUser = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
      password,
      lineId,
      userImage,
    },
  });
  reply.send(updatedUser);
};

module.exports.deleteUser = async function (req, reply) {
  console.log(req);
  const { id } = req.params;
  console.log(`id=${id}`);
  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  reply.send(deletedUser);
};

module.exports.postLogin = function (req, reply) {
  const { email, password } = req.body;
  prisma.user
    .findFirst({
      where: {
        email,
      },
    })
    .then((user) => {
      if (user.password === password) {
        reply.send(user);
      } else {
        reply.send({
          message: "Incorrect password",
        });
      }
    });
};
