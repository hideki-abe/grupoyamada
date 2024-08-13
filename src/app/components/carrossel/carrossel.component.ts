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

  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 8000;
  selectedIndex = 0;

  ngOnInit() {
    if(this.autoSlide) {
      this.autoSlideImages();
    }
  }

  constructor(private router:Router) {
  }
  //changes slides in every 3 second
  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval)
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick() {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick() {
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  images:carouselImage[] = [
    {
      imageSrc:
        '/assets/carrossel1.png',
      imageAlt: 'nature1',
      link: 'orcamentos'
    }
  ]

  onClick(link: string) {
    // @ts-ignore
    this.router.navigate([link]);
  }
}
