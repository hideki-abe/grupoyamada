import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import {SobreNosComponent} from "./pages/sobre-nos/sobre-nos.component";
import {ProdutosComponent} from "./pages/produtos/produtos.component";
import {ServicosComponent} from "./pages/servicos/servicos.component";
import {OrcamentosComponent} from "./pages/orcamentos/orcamentos.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'sobre', component: SobreNosComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'servicos', component: ServicosComponent},
  { path: 'inox', component: OrcamentosComponent}
];
