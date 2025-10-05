import Elysia from "elysia";
import {RecipeController} from "../controllers/recipe.controller";

export const recipesRoutes = new Elysia()
    .group("/recipes", app => app
        .get("/", RecipeController.getAllRecipes)
    )
