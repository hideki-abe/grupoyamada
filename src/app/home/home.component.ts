import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {CarrosselComponent} from "../carrossel/carrossel.component";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CarrosselComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
