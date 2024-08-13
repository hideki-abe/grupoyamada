import { Component } from '@angular/core';
import {CardComponent} from "../../components/card/card.component";

@Component({
  selector: 'app-servicos',
  standalone: true,
    imports: [
        CardComponent
    ],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

}
