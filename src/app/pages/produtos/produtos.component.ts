import { Component } from '@angular/core';
import {ProdutoComponent} from "../../components/produto/produto.component";
import {CardComponent} from "../../components/card/card.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    ProdutoComponent,
    CardComponent
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
