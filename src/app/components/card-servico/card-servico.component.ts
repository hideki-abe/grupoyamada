import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-card-servico',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.css'
})
export class CardServicoComponent {


}
