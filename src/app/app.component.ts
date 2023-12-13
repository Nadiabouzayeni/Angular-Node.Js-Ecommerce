import { Component } from '@angular/core';
import { AuthService } from './authentification/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';
  constructor(public authService: AuthService, private router: Router) { }

// eviter l'affichage du video dans tous les page
  isRegisterOrLoginOrProductsOrEcommerceRoute(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/register' || currentRoute === '/login' || currentRoute === '/products' || currentRoute === '/ecommerce'|| currentRoute ==='/scategories'|| currentRoute ==='/categories';
  }
// logout oui ou annuler 
  logout() {
    if (confirm("Voulez-vous vous déconnecter ?")) {
      this.authService.doLogout();
    }
  }
}
