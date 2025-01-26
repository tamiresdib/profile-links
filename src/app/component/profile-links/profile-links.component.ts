import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-links.component.html',
  styleUrl: './profile-links.component.scss'
})
export class ProfileLinksComponent {
  name: string = 'Tamires Dib'
  location: string = 'Brazil, São Paulo'
  bio: string = 'Front-end developer and digital influencer.'
   
    links = [
      { name: 'Github', url: 'https://github.com/tamiresdib' },
      { name: 'Youtube', url: 'https://www.youtube.com/@dib.codess' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/tamires-dib/?originalSubdomain=brr' },
      { name: 'Instagram', url: 'https://www.instagram.com/dib.codes/' }
    ];
}
