import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

interface carouselImage {
  link: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf,
    RouterLink
  ],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent implements OnInit{

  images: string[] = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Função chamada no mouseenter para pausar a animação
  onMouseEnter(): void {
    const carrosselInner = document.querySelector('.carrossel-inner') as HTMLElement;
    if (carrosselInner) {
      carrosselInner.style.animationPlayState = 'paused';
    }
  }

  // Função chamada no mouseleave para retomar a animação
  onMouseLeave(): void {
    const carrosselInner = document.querySelector('.carrossel-inner') as HTMLElement;
    if (carrosselInner) {
      carrosselInner.style.animationPlayState = 'running';
    }
  }
}
