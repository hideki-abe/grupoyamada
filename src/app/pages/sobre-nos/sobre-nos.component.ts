import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {CarrosselComponent} from "../../components/carrossel/carrossel.component";

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [
    NavbarComponent,
    CarrosselComponent
  ],
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css'
})
export class SobreNosComponent {

}
