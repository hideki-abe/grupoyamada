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
        name: 'Cantoneiras',
        description: "As cantoneiras são peças metálicas em formato de \"L\" ou \"U\".",
        imgSrc: "src do produto"
      },
      {
        id: 2,
        name: 'Trefilados',
        description: "O aço trefilado é um dos materiais mais utilizados na indústria, em diferentes segmentos.",
        imgSrc: "src do produto"
      },
      {
        id: 3,
        name: 'Ferros Fundidos',
        description: "O ferro fundido é uma liga de ferro em mistura eutética com elementos à base de carbono e silício.",
        imgSrc: "src do produto"
      },
      {
        id: 4,
        name: 'Tubos',
        description: "Os Tubos Industriais são usados em processos industriais.",
        imgSrc: "src do produto"
      },
      {
        id: 5,
        name: 'Tarugos',
        description: "descrição do produto",
        imgSrc: "src do produto"
      }
    ]

}
