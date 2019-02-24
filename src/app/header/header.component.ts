import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // When anything is injected it can be access in html code
  constructor(private authService: AuthService) { }
  logout() {
    this.authService.logout();
  }
}
