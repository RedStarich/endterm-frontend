import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss']
})
export class ProfileAvatarComponent {
  @Input() profileImg = '/assets/images/profile.jpg';
  @Input() showDropdown = false;
  @Input() size = 'medium'; // small, medium, large
}