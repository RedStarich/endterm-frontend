import { Component } from '@angular/core';
import { Page } from '../../models/interfaces';

@Component({
  selector: 'app-suggested-pages',
  templateUrl: './suggested-pages.component.html',
  styleUrls: ['./suggested-pages.component.scss']
})
export class SuggestedPagesComponent {
  suggestedPages: Page[] = [
    { name: 'Actress FB', followers: '1.5K', img: '/assets/images/actress.jpg' },
    { name: 'UI/UX design', followers: '1.2K', img: '/assets/images/ux-design.jpg' },
    { name: 'Super stars', followers: '1K', img: '/assets/images/super-stars.jpg' },
    { name: 'Kingdom', followers: '1.1K', img: '/assets/images/kingdom.jpg' }
  ];
}