import { Component } from '@angular/core';
import { MenuItem } from '../../../models/interfaces';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
  imports: [CommonModule]
})
export class LeftSidebarComponent {
  user = {
    name: 'Raju ND',
    location: 'Bangalore',
    profileImage: '/assets/images/profile.jpg',
    stats: {
      posts: 82,
      friends: 782
    }
  };

  posts = [
    {
      id: 1,
      user: { name: 'Uppi uppindra', image: 'https://i.pravatar.cc/150?img=41' },
      time: '17 mins',
      content: 'In 2001, the university was accredited by NAAC and received Five Star Status. The university then once again reaccredited under the new grading system with a grade A. However,this expired in 2013 and Bangalore University have not renewed their accreditation...',
      image: 'https://i.pravatar.cc/800?img=60',
      reactions: 78,
      comments: 58,
      shares: 12
    },
    {
      id: 2,
      user: { name: 'Rustem Tolatobrov', image: 'https://i.pravatar.cc/150?img=42' },
      time: '2 Hours',
      content: '',
      image: 'https://i.pravatar.cc/800?img=61',
      reactions: 45,
      comments: 23,
      shares: 5
    }
  ];
suggestedPages: any;
}