import { Component } from '@angular/core';
import {ProdutoComponent} from "../../components/produto/produto.component";
import {CardComponent} from "../../components/card/card.component";
import {Produto} from "../../interfaces/produto";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    ProdutoComponent,
    CardComponent,
    NgForOf
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

     produtos: Produto[] = [
      {
        id: 1,
        name: 'produto 1',
        description: "descrição do produto",
        imgSrc: "src do produto"
      },
      {
        id: 2,
        name: 'produto 2',
        description: "descrição do produto",
        imgSrc: "src do produto"
      },
      {
        id: 3,
        name: 'produto 3',
        description: "descrição do produto",
        imgSrc: "src do produto"
      },
      {
        id: 4,
        name: 'produto 4',
        description: "descrição do produto",
        imgSrc: "src do produto"
      },
      {
        id: 5,
        name: 'produto 5',
        description: "descrição do produto",
        imgSrc: "src do produto"
      }
    ]

}
