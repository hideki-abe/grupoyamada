import {ChangeDetectionStrategy, Component, HostListener} from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {Router, RouterLink, RouterLinkActive, NavigationEnd} from "@angular/router"; // Add NavigationEnd

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

  transform = '';
  transition = '';
  innerWidth = window.innerWidth;

  constructor(private router: Router) {
    // Close sidebar on route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.innerWidth < 800) {
        this.transform = 'translateX(-100%)';
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  widthListener() {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth >= 800 || this.transform == 'translate(-100%)') {
      this.transform = '';
      this.transition = '';
    }
    if(this.innerWidth < 800){
      this.transition = 'transition: 0.5s ease';
      console.log("transition change");
    }
    console.log(this.innerWidth);
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

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
