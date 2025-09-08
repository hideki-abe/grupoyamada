import {ChangeDetectionStrategy, Component, HostListener, OnInit, OnDestroy} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Router, RouterLink, RouterLinkActive, NavigationEnd} from "@angular/router";
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgStyle
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {

  transform = '';
  transition = '';
  innerWidth = window.innerWidth;
  private routerSubscription: Subscription = new Subscription();
  private lastScrollY = 0;
  isNavbarHidden = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    // Subscribe to router events to close mobile menu on navigation
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMobileMenu();
      });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.routerSubscription.unsubscribe();
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
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.innerWidth < 800) {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > this.lastScrollY && currentScrollY > 100) {
        // Scrolling down and passed 100px - hide navbar
        this.isNavbarHidden = true;
      } else if (currentScrollY < this.lastScrollY) {
        // Scrolling up - show navbar
        this.isNavbarHidden = false;
      }
      
      this.lastScrollY = currentScrollY;
    }
  }

  onClickMenu() {
    this.innerWidth = window.innerWidth;
    if( this.transform == 'translateX(-100%)' || this.transform == '') {
      this.transform = 'translate(0)';
    } else {
      this.transform = 'translateX(-100%)'
    }
  }

  // Method to close mobile menu
  closeMobileMenu() {
    if (this.innerWidth < 800 && this.transform === 'translate(0)') {
      this.transform = 'translateX(-100%)';
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
