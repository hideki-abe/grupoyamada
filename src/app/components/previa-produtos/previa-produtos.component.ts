import { Component, OnInit, HostListener } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { Router } from '@angular/router';

interface PreviaProduto {
  img: string;
  nome: string;
}

@Component({
  selector: 'app-previa-produtos',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './previa-produtos.component.html',
  styleUrl: './previa-produtos.component.css'
})
export class PreviaProdutosComponent implements OnInit {
  produtos: PreviaProduto[] = [
    { img: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/mecanicos.webp?alt=media&token=cd094b40-47c2-4cfa-bf2c-20ee76b9cdc7', nome: 'Ferros Mecânicos 1045' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/trefilados.webp?alt=media&token=d6626f09-0cef-4077-a919-51128e997829', nome: 'Trefilados 1020/1045' },
    { img: 'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/vigaU.webp?alt=media&token=84acccf8-878d-4755-bce7-57ab97ea3428', nome: 'Vigas U 1020' }
  ];
  currentIndex = 0;
  isMobile = false;

  intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkMobile();
    this.startAutoSlide();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkMobile();
  }

  startAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      if (this.isMobile) {
        this.nextProduto();
      }
    }, 3500); // 3.5 seconds
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  checkMobile() {
    this.isMobile = window.innerWidth <= 1000;
    this.startAutoSlide();
  }

  prevProduto() {
    this.currentIndex = (this.currentIndex - 1 + this.produtos.length) % this.produtos.length;
  }

  nextProduto() {
    this.currentIndex = (this.currentIndex + 1) % this.produtos.length;
  }

  onContatoClick() {
    this.router.navigate(['/sobre']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
