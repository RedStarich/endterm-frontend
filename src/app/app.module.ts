
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/layout/header/header.component'; // Import the header component

@NgModule({
  declarations: [],
  imports: [
    HeaderComponent  // Import the standalone component here
  ],
  exports: [
    HeaderComponent
  ]
})
export class AppModule { }