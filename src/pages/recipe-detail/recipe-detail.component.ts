import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [ FormsModule,NgIf ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  comentaire: string = '';
  comentaireEnvoye: string = '';

  envoyerComentaire() {
    this.comentaireEnvoye = this.comentaire;
    this.comentaire = ''; 
  }

}
