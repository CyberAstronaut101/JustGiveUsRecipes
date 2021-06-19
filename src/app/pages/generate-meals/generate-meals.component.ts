import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-meals',
  templateUrl: './generate-meals.component.html',
  styleUrls: ['./generate-meals.component.css']
})
export class GenerateMealsComponent implements OnInit {

  collapsed= false;

  rows = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  categories = ['Beef','Poultry', 'Seafood', 'Vegetarian'];
  constructor() { }

  ngOnInit(): void {
  }

}
