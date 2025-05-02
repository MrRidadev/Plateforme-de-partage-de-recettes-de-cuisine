import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../../app/services/meal.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recettes',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './recettes.component.html',
  styleUrl: './recettes.component.css'
})
export class RecettesComponent implements OnInit {
  recipes: any[] = [];

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const search = params['search'];

      if (search) {
        // Rechercher par mot-clé
        this.mealService.searchRecipes(search).subscribe((data: any) => {
          this.recipes = data.meals || [];
        });
      } else {
        // Charger toutes les recettes par défaut
        this.mealService.getRecipes().subscribe((data: any) => {
          this.recipes = data.meals || [];
        });
      }
    });
  }
}
