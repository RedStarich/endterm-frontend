import { Component } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component';
import { LeftSidebarComponent } from './components/layout/left-sidebar/left-sidebar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, LeftSidebarComponent]
})

export class AppComponent {
  title = 'angular-standalone-components';
}