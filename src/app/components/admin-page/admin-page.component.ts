import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminComponent {
  authService = inject(AuthService);
  router = inject(Router);
  public logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}