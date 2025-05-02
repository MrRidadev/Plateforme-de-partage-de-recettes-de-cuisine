import { Routes } from '@angular/router';
import { HeaderComponent } from '../pages/header/header.component';
import { RecipeDetailComponent } from '../pages/recipe-detail/recipe-detail.component';
import { CategorieComponent } from '../pages/categorie/categorie.component';
import { RecettesComponent } from '../pages/recettes/recettes.component';
import { ConnexionComponent } from '../pages/connexion/connexion.component';

export const routes: Routes = [

    {
        path:'',
        component : HeaderComponent
    },
    { path: 'recipe/:id',
         component: RecipeDetailComponent 
    },
    {
        path:'recipe',
        component:RecipeDetailComponent
    },
    {
        path:'categorie',
        component:CategorieComponent
    },
    {
        path:'recette',
        component:RecettesComponent
    },
    {
        path:'Connexion',
        component:ConnexionComponent
    }
];

