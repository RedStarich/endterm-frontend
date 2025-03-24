import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery: string = '';
  notificationCount: number = 5;
  user = {
    name: 'Raju ND',
    location: 'Bangalore',
    posts: 82,
    friends: 782,
    profileImage: 'https://i.pravatar.cc/150?img=12'
  };
  
  stories = [
    { id: 1, user: 'Add to story', image: 'https://i.pravatar.cc/150?img=33', isAdd: true },
    { id: 2, user: 'Siddu sid', image: 'https://i.pravatar.cc/150?img=68' },
    { id: 3, user: 'Kiran achar', image: 'https://i.pravatar.cc/150?img=42' },
    { id: 4, user: 'Harsha kakkeri', image: 'https://i.pravatar.cc/150?img=17' },
    { id: 5, user: 'Vinayak bagane', image: 'https://i.pravatar.cc/150?img=22' }
  ];
  
  messages = [
    { id: 1, name: 'Saami Al Samad', message: 'Hi', time: '10:30', image: 'https://i.pravatar.cc/150?img=47', unread: true },
    { id: 2, name: 'Raaid El Syed', message: 'Good morning', time: '08:12', image: 'https://i.pravatar.cc/150?img=27', unread: true },
    { id: 3, name: 'Gunther Ackner', message: 'Hi, how are you?', time: '08:00', image: 'https://i.pravatar.cc/150?img=59', unread: true },
    { id: 4, name: 'Tamaki Ryushi', message: 'Send me photos bro...', time: '07:20', image: 'https://i.pravatar.cc/150?img=13', unread: true },
    { id: 5, name: 'Su Hua', message: 'Where are you?', time: '07:10', image: 'https://i.pravatar.cc/150?img=32', unread: true },
    { id: 6, name: 'Rahul Malviya', message: 'Hello', time: 'Yesterday', image: 'https://i.pravatar.cc/150?img=53' },
    { id: 7, name: 'Ray Cooper', message: 'https://www.facebook...', time: 'Yesterday', image: 'https://i.pravatar.cc/150?img=65' },
    { id: 8, name: 'Lizzie Rose', message: 'By', time: 'Jan 28', image: 'https://i.pravatar.cc/150?img=34' },
    { id: 9, name: 'Pok Ae-Ra', message: 'Good night', time: 'Jan 4', image: 'https://i.pravatar.cc/150?img=44' }
  ];
  
  groups = [
    { id: 1, name: 'UI Designers', image: 'https://i.pravatar.cc/150?img=60' },
    { id: 2, name: 'Bangalore groups', image: 'https://i.pravatar.cc/150?img=61' },
    { id: 3, name: 'Web...world', image: 'https://i.pravatar.cc/150?img=62' },
    { id: 4, name: 'Boston', image: 'https://i.pravatar.cc/150?img=63' }
  ];
  
  suggestedPages = [
    { id: 1, name: 'Actress FB', followers: '1.5K following', image: 'https://i.pravatar.cc/150?img=29' },
    { id: 2, name: 'UI/UX design', followers: '1.2K following', image: 'https://i.pravatar.cc/150?img=30' },
    { id: 3, name: 'Super stars', followers: '1K following', image: 'https://i.pravatar.cc/150?img=31' },
    { id: 4, name: 'Kingdom', followers: '1.1K following', image: 'https://i.pravatar.cc/150?img=32' }
  ];
  
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
  
  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }
}