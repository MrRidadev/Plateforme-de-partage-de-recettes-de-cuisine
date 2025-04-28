import { Component } from '@angular/core';
import { CategorieComponent } from "../categorie/categorie.component";
import { RecettesComponent } from "../recettes/recettes.component";
import { ConnexionComponent } from "../connexion/connexion.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CategorieComponent, RecettesComponent, ConnexionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
