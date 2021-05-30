import fastify from "fastify";
import { minusNumber } from "./helpers";

interface CreateUserBody {
  username?: string;
  name?: string;
  surname?: string;
  address?: string;
  age?: number;
}

interface CalculateMinus {
  number1: string;
  number2: string;
}

const buildFastifyApp = (option = {}) => {
  const app = fastify(option);

  app.get("/", async (request, reply) => {
    const { query } = request;

    reply.send({
      status: "OK",
      query,
    });
  });

  app.post<{ Body: CreateUserBody }>("/users", async (request, reply) => {
    const { username, name, age } = request.body;
    reply.send({
      username,
      name,
      age,
    });
  });

  app.post<{ Body: CalculateMinus }>(
    "/calculate/minus",
    async (request, reply) => {
      const { number1, number2 } = request.body;
      const { result } = minusNumber(parseInt(number1), parseInt(number2));
      reply.send(result);
    }
  );
  return app;
};

export default buildFastifyApp;

//build app เท่านั้น และ return app
