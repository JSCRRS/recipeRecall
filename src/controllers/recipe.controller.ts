import { Recipe } from "../models/recipe.model";

export class RecipeController {
    public static getAllRecipes(): Recipe[] {
        return Recipe.getAll();
    }
}
