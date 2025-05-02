import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../../app/services/meal.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [ FormsModule,NgIf,CommonModule ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent  implements OnInit{
  recipe: any;
  ingredients: string[] = [];

  private route = inject(ActivatedRoute);
  private mealService = inject(MealService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mealService.getRecipe(+id).subscribe((data: any) => {
        this.recipe = data.meals[0];
        this.getIngredients();
      });
    }
  }
  comentaire: string = '';
  comentaireEnvoye: string = '';

  envoyerComentaire() {
    this.comentaireEnvoye = this.comentaire;
    this.comentaire = ''; 
  }

  getIngredients() {
    this.ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = this.recipe[`strIngredient${i}`];
      const measure = this.recipe[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== '') {
        this.ingredients.push(`${measure} ${ingredient}`);
      }
    }
  }

}
