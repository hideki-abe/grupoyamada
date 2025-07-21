import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {CarrosselComponent} from "../../components/carrossel/carrossel.component";
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [
    NavbarComponent,
    CarrosselComponent,
    NgForOf,
    NgIf,
    FormsModule
  ],
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.css'
})
export class SobreNosComponent {
  sellers = [
    { name: 'Saleth', phone: '(62) 9 9847-5947', email: 'vendas6.grupoyamada@gmail.com' },
    { name: 'Karla', phone: '(62) 9 9935-5551', email: 'vendas4.grupoyamada@gmail.com' },
    { name: 'Rafael', phone: '(62) 9 9666-8194', email: 'vendas1.grupoyamada@gmail.com' },
    { name: 'Danilla', phone: '(62) 96666-8194', email: 'vendas1.grupoyamada@gmail.com' },
    { name: 'Carol', phone: '(62) 9 9635-7169', email: 'vendas11.grupoyamada@gmail.com' }
  ];

  form = {
    nome: '',
    email: '',
    mensagem: ''
  };

  emailSent = false;
  emailError = false;

  sendEmail() {
    // Simulate email sending (replace with real service integration)
    if (this.form.nome && this.form.email && this.form.mensagem) {
      this.emailSent = true;
      this.emailError = false;
      this.form = { nome: '', email: '', mensagem: '' };
      setTimeout(() => this.emailSent = false, 4000);
    } else {
      this.emailError = true;
      setTimeout(() => this.emailError = false, 4000);
    }
  }
}
