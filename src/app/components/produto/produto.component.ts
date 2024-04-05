import {Component, Input} from '@angular/core';
import {Produto} from "../../interfaces/produto";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  @Input() produto?: Produto;

}
