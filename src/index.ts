import { Elysia } from "elysia";
import { recipesRoutes } from "./routes/recipes";

const app = new Elysia()
    .use(recipesRoutes)
    .listen(3000);

console.log(
  `Recipe Recall is running at ${app.server?.hostname}:${app.server?.port}`
);
