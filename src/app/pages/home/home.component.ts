import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CardComponent} from "../../components/card/card.component";
import {CarrosselComponent} from "../../components/carrossel/carrossel.component";
import {CardQualidadeComponent} from "../../components/card-qualidade/card-qualidade.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CarrosselComponent,
    CardComponent,
    CardComponent,
    CarrosselComponent,
    CardQualidadeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
