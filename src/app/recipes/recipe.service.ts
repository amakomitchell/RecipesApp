import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
            'A super tasty Schnitzel - simply awesome',
            'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 16)
            ]),

        new Recipe('Big Fat Burger', 
            'This is simply tasty',
            'http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BB_DOUBLEWHOPPERWCHEESE-v1_thumb.png',
            [
                new Ingredient('Buns', 3),
                new Ingredient('Chicken', 36)
            ])
    ];

    constructor(private slService: ShoppinglistService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);  
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}