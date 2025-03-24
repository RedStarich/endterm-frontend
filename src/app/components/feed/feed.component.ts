import { Component } from '@angular/core';
import { Post } from '../../models/interfaces';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  posts: Post[] = [
    {
      id: 1,
      userName: 'Uppi uppindra',
      action: 'shared a post',
      timeAgo: '17 mins',
      profileImg: '/assets/images/uppi.jpg',
      image: '/assets/images/university.jpg',
      text: 'In 2001, the university was accredited by NAAC and received Five Star Status. The university then once again reaccredited under the new grading system with a grade A. However,this expired in 2013 and Bangalore University have not renewed their accreditation...',
      hasMore: true,
      reactions: {
        count: '+78',
        types: [
          { type: 'like', icon: 'fa-heart' },
          { type: 'wow', icon: 'fa-surprise' },
          { type: 'haha', icon: 'fa-laugh' }
        ]
      },
      comments: '58',
      shares: '12'
    },
    {
      id: 2,
      userName: 'Rustem Tolatobrov',
      timeAgo: '2 Hours',
      profileImg: '/assets/images/rustem.jpg',
      image: '/assets/images/sky.jpg',
      reactions: null,
      comments: null,
      shares: null
    }
  ];
}