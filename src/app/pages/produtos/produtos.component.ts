import { Component } from '@angular/core';
import {ProdutoComponent} from "../../components/produto/produto.component";
import {Produto} from "../../interfaces/produto";
import {NgForOf, NgIf} from "@angular/common";
import {Papa} from "ngx-papaparse";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    ProdutoComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  csvData: any[] = [];
  headerRow: any[] = [];
  csvFilePath = '/assets/csv/tubos_mecanicos.csv'; // <-- Use leading slash for assets

  onInit() {
    console.log("Initializing component: ", this.csvData.at(0));
  }

  constructor(private papa: Papa) {
    let options = {
      delimiter: ',',
      header: true,
      skipEmptyLines: true,
      download: true,
      encoding: 'utf-8', // Ensure correct encoding
      transformHeader: (header: string) => {
        // Remove BOM and quotes from all headers
        return header.replace(/^\uFEFF/, '').replace(/^"|"$/g, '').trim();
      },
      complete: (results:any, file:any) => {
        console.log('Parsed: ', results);
        // Defensive: log meta.fields and first row
        console.log('Headers:', results.meta.fields);
        console.log('First row:', results.data[0]);
        this.headerRow = results.meta.fields;
        this.csvData = results.data;
      }
    };

    this.papa.parse(this.csvFilePath, options);
    console.log(this.csvFilePath);
  }

  produtos: Produto[] = [
      {
        id: 1,
        name: 'Cantoneiras',
        description: "",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/cantoneiras.png?alt=media&token=eb42bff1-f730-4fcd-975b-92091f60ba0b"
      },
      {
        id: 2,
        name: 'Trefilados',
        description: "",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/aco-trefilado-beneficios.jpg?alt=media&token=8156b1fe-fa39-4c0d-be89-c4f18bb3b551"
      },
      {
        id: 3,
        name: 'Ferros Fundidos',
        description: "",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/ferrofundido.webp?alt=media&token=b806a9aa-eabd-44b5-82ae-734a115aa30c"
      },
      {
        id: 4,
        name: 'Tubos',
        description: "",
        imgSrc: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/tubos.jpg?alt=media&token=e804391b-bd94-4a0f-98de-ae969a6b4f32'
      },
      {
        id: 5,
        name: 'Tarugos',
        description: "",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/cromado.jpg?alt=media&token=95e53b57-4f74-40bd-9811-4fc5154ea513"
      },
       {
         id: 6,
         name: 'Cromo Níquel',
         description: "",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/aco-sae-4340-02.jpg?alt=media&token=07ba5d86-c4c6-4df2-a64c-57f34263c091"
       },
       {
         id: 7,
         name: 'Chapas Industriais',
         description: "",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/chapas.jpg?alt=media&token=a8fd9d85-2695-4f1b-8d22-e4cddcc39617"
       },
       {
         id: 8,
         name: 'Sextavados',
         description: "",
         imgSrc: "" +
           "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/sextavado.jpg?alt=media&token=c20af3ec-dcbb-416a-8a20-615887239c64"
       },
       {
         id: 9,
         name: 'Barras Quadradas',
         description: "",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/barraquadrada.jpg?alt=media&token=742b1832-dcb6-4fa0-89f2-4a59eea2f633"
       },
       {
         id: 10,
         name: 'Ferros Mecânicos',
         description: "",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/ferromecanico.jpg?alt=media&token=3e7f2ad2-d95c-429e-afc9-e7bcf6128880"
       },
       {
         id: 11,
         name: 'Ferros Chatos',
         description: "",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/ferrochato.jpg?alt=media&token=be679465-d1a4-4a7b-8ca5-0e6e7bc38ef3"
       },
       {
         id: 12,
         name: 'Viga U',
         description: "",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/vigau.jpg?alt=media&token=4e174839-c59e-4e74-b372-f0e7d8b3016f"
       },
       {
         id: 13,
         name: 'Viga I',
         description: "",
         imgSrc: "https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/vigai.png?alt=media&token=0dfb6825-b266-4498-b41e-a6f40db2eb14"
       }


    ]
}
