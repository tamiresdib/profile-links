import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileLinksComponent } from './component/profile-links/profile-links.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileLinksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'profile-links';
}
