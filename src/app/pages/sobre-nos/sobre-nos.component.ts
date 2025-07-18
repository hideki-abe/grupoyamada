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
    { name: 'Saleth', phone: '(62) 99999-1111', email: 'saleth@yamada.com' },
    { name: 'Karla', phone: '(62) 98888-2222', email: 'karla@yamada.com' },
    { name: 'Rafael', phone: '(62) 97777-3333', email: 'rafael@yamada.com' },
    { name: 'Danilla', phone: '(62) 96666-4444', email: 'danilla@yamada.com' }
  ];

  form = {
    nome: '',
    email: '',
    mensagem: ''
  };

  emailSent = false;
  emailError = false;
  selectedFiles: File[] = [];

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }

  sendEmail() {
    // Always send to João Silva
    const destinatary = 'hideki-abe@hotmail.com';

    if (this.form.nome && this.form.email && this.form.mensagem) {
      // Example: Prepare FormData for real backend
      // const formData = new FormData();
      // formData.append('destinatary', destinatary);
      // formData.append('nome', this.form.nome);
      // formData.append('email', this.form.email);
      // formData.append('mensagem', this.form.mensagem);
      // this.selectedFiles.forEach(file => formData.append('files', file));
      // Send formData to backend...

      this.emailSent = true;
      this.emailError = false;
      this.form = { nome: '', email: '', mensagem: '' };
      this.selectedFiles = [];
      setTimeout(() => this.emailSent = false, 4000);
    } else {
      this.emailError = true;
      setTimeout(() => this.emailError = false, 4000);
    }
  }
}
