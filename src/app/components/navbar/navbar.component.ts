import {ChangeDetectionStrategy, Component} from '@angular/core';
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

  visibility = 'visible';
  color = 'red';
  background = 'red';
  transform = 'translateX(0)';

  constructor(private router: Router) {
  }

  onClick() {
    this.router.navigate(['/sobre']);
  }

  onClickMenu() {
    if( this.transform == 'translateX(-100%)') {
      this.transform = 'translate(100%)';
    } else {
      this.transform == 'translateX(-100%)'
    }
  }

}
