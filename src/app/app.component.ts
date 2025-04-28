import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../pages/navbar/navbar.component";
import { CategorieComponent } from "../pages/categorie/categorie.component";
import { RecettesComponent } from "../pages/recettes/recettes.component";
import { RecipeDetailComponent } from "../pages/recipe-detail/recipe-detail.component";
import { FooterComponent } from "../pages/footer/footer.component";
import { ConnexionComponent } from "../pages/connexion/connexion.component";
import { HeaderComponent } from "../pages/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CategorieComponent, RecettesComponent, RecipeDetailComponent, FooterComponent, ConnexionComponent,  HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FlavorShare';
}
