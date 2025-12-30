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
    { name: 'Saleth', 
      phone: '(62) 9 9847-5947', 
      email: 'vendas6.grupoyamada@gmail.com', 
      whatsapp: 'https://api.whatsapp.com/send?phone=556285380005&' 
    },
    { name: 'Karla', 
      phone: '(62) 9 9935-5551', 
      email: 'vendas4.grupoyamada@gmail.com', 
      whatsapp: 'https://api.whatsapp.com/send?phone=556299355551&' 
    },
    { name: 'Rafael', 
      phone: '(62) 9 9666-8194', 
      email: 'vendas12.grupoyamada@gmail.com', 
      whatsapp: 'https://api.whatsapp.com/send?phone=556285920028&' 
    },
    { name: 'Danilla', 
      phone: '(62) 9 9992-7474', 
      email: 'vendas1.grupoyamada@gmail.com', 
      whatsapp: 'https://api.whatsapp.com/send?phone=556299927474&' 
    },
    { name: 'Carol', 
      phone: '(62) 9 9635-7169', 
      email: 'vendas11.grupoyamada@gmail.com', 
      whatsapp: 'https://api.whatsapp.com/send?phone=556285920027&' 
    }
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
