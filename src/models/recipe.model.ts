import db from "../../db/db";

export interface Recipe {
    id: number;
    name: string;
    category: string;
    ingredients: string;
    description: string;
}

export class Recipe {
    public static getAll(): Recipe[] {
        return db.query<Recipe, null>('SELECT * FROM recipes ORDER BY id').all(null);
    }
}
