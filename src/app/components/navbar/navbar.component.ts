import {ChangeDetectionStrategy, Component, HostListener} from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    NgStyle
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  color = 'red';
  background = 'red';
  transform = '';
  innerWidth = window.innerWidth;

  constructor(private router: Router) {
  }

  @HostListener('window:resize', ['$event'])
  widthListener() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth >= 800 || this.transform == 'translate(-100%)') {
      this.transform = '';
    }
    console.log(this.transform);
  }

  onClickMenu() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    if( this.transform == 'translateX(-100%)' || this.transform == '') {
      this.transform = 'translate(0)';
    } else {
      this.transform = 'translateX(-100%)'
    }
  }

}
