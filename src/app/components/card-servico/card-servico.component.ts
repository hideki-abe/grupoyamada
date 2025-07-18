import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

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
  constructor(private router: Router) {}

  navigateToServices() {
    this.router.navigate(['/servicos']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
