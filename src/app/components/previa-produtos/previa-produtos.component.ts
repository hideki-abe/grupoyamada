// previa-produtos.component.ts
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface PreviaProduto {
  img: string;
  nome: string;
}

@Component({
  selector: 'app-previa-produtos',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './previa-produtos.component.html',
  styleUrl: './previa-produtos.component.css'
})
export class PreviaProdutosComponent {
  readonly produtos: ReadonlyArray<PreviaProduto> = [
    { 
      img: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/mecanicos.webp?alt=media&token=cd094b40-47c2-4cfa-bf2c-20ee76b9cdc7', 
      nome: 'Ferros Mecânicos 1045' 
    },
    { 
      img: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/trefilados.webp?alt=media&token=d6626f09-0cef-4077-a919-51128e997829', 
      nome: 'Trefilados 1020/1045' 
    },
    { 
      img: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/vigaU.webp?alt=media&token=84acccf8-878d-4755-bce7-57ab97ea3428', 
      nome: 'Vigas U 1020' 
    }
  ];

  constructor(private readonly router: Router) {}

  onContatoClick(): void {
    this.router.navigate(['/sobre']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  onVerMaisClick(): void {
    this.router.navigate(['/produtos']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}