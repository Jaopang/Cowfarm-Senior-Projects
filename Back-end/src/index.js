const fastify = require("fastify")();
const cors = require("@fastify/cors");

fastify.register(cors, {
  origin: "*",
});

fastify.register(require("../router/user_route"), { prefix: "/api" });
fastify.register(require("../router/farm_route"), { prefix: "/api" });
fastify.register(require("../router/cowEvent_route"), { prefix: "/api" });
fastify.register(require("../router/cow_route"), { prefix: "/api" });

fastify.listen({ port: 8000 }, () =>
  console.log(`
🚀 Server ready at: http://localhost:8000
⭐️ See sample requests: https://github.com/prisma/prisma-examples/tree/latest/javascript/rest-fastify#using-the-rest-api`)
);
