import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MealService } from '../../app/services/meal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recettes',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './recettes.component.html',
  styleUrl: './recettes.component.css'
})
export class RecettesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
this.mealService.getRecipes().subscribe((data: any) => {
      this.recipes = data.meals; 
    
    });}

   
}
