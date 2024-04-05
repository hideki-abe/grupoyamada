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
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/cantoneiras.png?alt=media&token=eb42bff1-f730-4fcd-975b-92091f60ba0b"
      },
      {
        id: 2,
        name: 'Trefilados',
        description: "O aço trefilado é um dos materiais mais utilizados na indústria, em diferentes segmentos.",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/aco-trefilado-beneficios.jpg?alt=media&token=8156b1fe-fa39-4c0d-be89-c4f18bb3b551"
      },
      {
        id: 3,
        name: 'Ferros Fundidos',
        description: "O ferro fundido é uma liga de ferro em mistura eutética com elementos à base de carbono e silício.",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/ferrofundido.webp?alt=media&token=b806a9aa-eabd-44b5-82ae-734a115aa30c"
      },
      {
        id: 4,
        name: 'Tubos',
        description: "Os Tubos Industriais são usados em processos industriais.",
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/tubos.jpg?alt=media&token=e804391b-bd94-4a0f-98de-ae969a6b4f32'
      },
      {
        id: 5,
        name: 'Tarugos',
        description: "Utilizados principalmente para a produção de fio-máquina, barras, perfis e produtos forjados.",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/cromado.jpg?alt=media&token=95e53b57-4f74-40bd-9811-4fc5154ea513"
      },
       {
         id: 6,
         name: 'Cromo Níquel',
         description: "Utilizados principalmente para a produção de fio-máquina, barras, perfis e produtos forjados.",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/aco-sae-4340-02.jpg?alt=media&token=07ba5d86-c4c6-4df2-a64c-57f34263c091"
       },
       {
         id: 7,
         name: 'Chapas Industriais',
         description: "Utilizados principalmente para a produção de fio-máquina, barras, perfis e produtos forjados.",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/chapas.jpg?alt=media&token=a8fd9d85-2695-4f1b-8d22-e4cddcc39617"
       },
       {
         id: 8,
         name: 'Sextavados',
         description: "Utilizados principalmente para a produção de fio-máquina, barras, perfis e produtos forjados.",
         imgSrc: "" +
           "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/sextavado.jpg?alt=media&token=c20af3ec-dcbb-416a-8a20-615887239c64"
       },
       {
         id: 9,
         name: 'Barras Quadradas',
         description: "Utilizados principalmente para a produção de fio-máquina, barras, perfis e produtos forjados.",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/barraquadrada.jpg?alt=media&token=742b1832-dcb6-4fa0-89f2-4a59eea2f633"
       },
       {
         id: 10,
         name: 'Ferros Mecânicos',
         description: "Utilizados principalmente para a produção de fio-máquina, barras, perfis e produtos forjados.",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/ferromecanico.jpg?alt=media&token=3e7f2ad2-d95c-429e-afc9-e7bcf6128880"
       },
       {
         id: 11,
         name: 'Ferros Chatos',
         description: "Utilizados principalmente para a produção de fio-máquina, barras, perfis e produtos forjados.",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/ferrochato.jpg?alt=media&token=be679465-d1a4-4a7b-8ca5-0e6e7bc38ef3"
       },
       {
         id: 12,
         name: 'Viga U',
         description: "Utilizados principalmente para a produção de fio-máquina, barras, perfis e produtos forjados.",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/vigau.jpg?alt=media&token=4e174839-c59e-4e74-b372-f0e7d8b3016f"
       },
       {
         id: 13,
         name: 'Viga I',
         description: "Utilizados principalmente para a produção de fio-máquina, barras, perfis e produtos forjados.",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/vigai.png?alt=media&token=0dfb6825-b266-4498-b41e-a6f40db2eb14"
       }


    ]

}
