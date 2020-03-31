import { Recipe } from '../recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
   // tslint:disable-next-line: max-line-length
    new Recipe('A tets recipe', 'This is a simple', 'https://www.foodnetwork.com/recipes/food-network-kitchen/tuscan-chicken-skillet-5421728')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
