import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgForOf
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
    },
    {
      imageSrc:
        'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/WhatsApp%20Image%202024-02-29%20at%2016.36.27.jpeg?alt=media&token=f88a7e42-e207-46eb-b51e-987478ba9421',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://firebasestorage.googleapis.com/v0/b/yamada-fotos.appspot.com/o/CARROSSEL.png?alt=media&token=178f1c50-a7ed-4937-a434-23091d36b749',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      imageAlt: 'person2',
    },
  ]

}
