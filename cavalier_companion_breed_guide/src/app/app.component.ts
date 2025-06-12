import { Component } from '@angular/core';
import { CavalierMainContainerComponent } from './cavalier-main-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CavalierMainContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
