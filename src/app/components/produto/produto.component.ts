import {Component, Input} from '@angular/core';
import {Produto} from "../../interfaces/produto";

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  @Input() produto?: Produto;

}
