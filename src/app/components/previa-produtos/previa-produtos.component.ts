import { Component, OnInit, HostListener } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';

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
    { img: '/assets/fotos/chapa.png', nome: 'Barras de aço' },
    { img: '/assets/fotos/barra chata.png', nome: 'Barras Chatas' },
    { img: '/assets/fotos/trefilado.jpg', nome: 'Trefilados' }
  ];
  currentIndex = 0;
  isMobile = false;

  intervalId: any;

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
    this.isMobile = window.innerWidth <= 700;
    this.startAutoSlide();
  }

  prevProduto() {
    this.currentIndex = (this.currentIndex - 1 + this.produtos.length) % this.produtos.length;
  }

  nextProduto() {
    this.currentIndex = (this.currentIndex + 1) % this.produtos.length;
  }
}
