import { Component } from '@angular/core';
import { Group } from '../../models/interfaces';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent {
  groups: Group[] = [
    { name: 'UI Designers', img: '/assets/images/ui-designers.jpg' },
    { name: 'Bangalore groups', img: '/assets/images/bangalore.jpg' },
    { name: 'Web...world', img: '/assets/images/web-world.jpg' },
    { name: 'Boston', img: '/assets/images/boston.jpg' }
  ];
}