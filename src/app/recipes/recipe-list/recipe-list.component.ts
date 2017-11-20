import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
    for ( let i = 0; i < 4; i++) {
      this.recipes.push(new Recipe('Test recipe ' + i, 'My recipe ' + i + 'ever!!', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')); 
    }
  }

  addRecipe() {
    this.recipes.push(new Recipe('Test recipe ' + this.recipes.length, 'My recipe '+ this.recipes.length +' ever!!', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'));
  }

  choseRecipe(recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
