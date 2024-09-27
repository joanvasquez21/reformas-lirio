import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-root',
  standalone: true, // Aquí defines que es un componente standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ContactComponent, FooterComponent, HeaderComponent, AboutComponent, ServicesComponent] // Importa tus otros componentes aquí
})
export class AppComponent {}
