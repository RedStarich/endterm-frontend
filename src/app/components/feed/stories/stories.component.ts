import { Component } from '@angular/core';
import { Story } from '../../../models/interfaces';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent {
  stories: Story[] = [
    { name: 'Siddu sid', profileImg: '/assets/images/siddu.jpg', backgroundImg: '/assets/images/siddu-bg.jpg' },
    { name: 'Kiran achar', profileImg: '/assets/images/kiran.jpg', backgroundImg: '/assets/images/kiran-bg.jpg' },
    { name: 'Harsha kakkeri', profileImg: '/assets/images/harsha.jpg', backgroundImg: '/assets/images/harsha-bg.jpg' },
    { name: 'Vinayak bagane', profileImg: '/assets/images/vinayak.jpg', backgroundImg: '/assets/images/vinayak-bg.jpg' }
  ];
}