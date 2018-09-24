import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Lasagna', 'Lorem Ipsum', 'https://cdn2.iconfinder.com/data/icons/european-cuisine-flat-colorful-1/614/7085_-_Lasagna-512.png'),
    new Recipe('Lasagna', 'Lorem Ipsum', 'https://cdn2.iconfinder.com/data/icons/european-cuisine-flat-colorful-1/614/7085_-_Lasagna-512.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
