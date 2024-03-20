import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import {SobreNosComponent} from "./pages/sobre-nos/sobre-nos.component";
import {ProdutosComponent} from "./pages/produtos/produtos.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'sobre', component: SobreNosComponent},
  { path: 'produtos', component: ProdutosComponent}
];
