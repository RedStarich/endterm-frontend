import { Component } from '@angular/core';
import { Contact } from '../../models/interfaces';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent {
  contacts: Contact[] = [
    { name: 'Saami Al Samad', message: 'Hi', time: '10:30', online: true, img: '/assets/images/saami.jpg' },
    { name: 'Raaid El Syed', message: 'Good morning', time: '08:12', online: true, img: '/assets/images/raaid.jpg' },
    { name: 'Gunther Ackner', message: 'Hi, how are you?', time: '08:00', online: true, img: '/assets/images/gunther.jpg' },
    { name: 'Tamaki Ryushi', message: 'Send me photos bro...', time: '07:20', online: true, img: '/assets/images/tamaki.jpg' },
    { name: 'Su Hua', message: 'Where are you?', time: '07:10', online: true, img: '/assets/images/su.jpg' },
    { name: 'Rahul Malviya', message: 'Hello', time: 'Yesterday', online: false, img: '/assets/images/rahul.jpg' },
    { name: 'Ray Cooper', message: 'https://www.facebook...', time: 'Yesterday', online: false, img: '/assets/images/ray.jpg' },
    { name: 'Lizzie Rose', message: 'By', time: 'Jan 28', online: false, img: '/assets/images/lizzie.jpg' },
    { name: 'Pok Ae-Ra', message: 'Good night', time: 'Jan 4', online: false, img: '/assets/images/pok.jpg' }
  ];
}