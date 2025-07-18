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
    { name: 'João Silva', phone: '(62) 99999-1111', email: 'joao@yamada.com' },
    { name: 'Maria Oliveira', phone: '(62) 98888-2222', email: 'maria@yamada.com' },
    { name: 'Carlos Souza', phone: '(62) 97777-3333', email: 'carlos@yamada.com' },
    { name: 'Ana Paula', phone: '(62) 96666-4444', email: 'ana@yamada.com' }
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
