import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CarrosselComponent} from "../../components/carrossel/carrossel.component";
import {CardQualidadeComponent} from "../../components/card-qualidade/card-qualidade.component";
import {PreviaProdutosComponent} from "../../components/previa-produtos/previa-produtos.component";
import {QuemSomosComponent} from "../../components/quem-somos/quem-somos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CarrosselComponent,
    CarrosselComponent,
    CardQualidadeComponent,
    PreviaProdutosComponent,
    QuemSomosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
