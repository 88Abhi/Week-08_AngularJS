import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title: string = " Abhishek AngularJS"; 
  ImageURL = "https://github.com/user-attachments/assets/eccf9b76-5291-493b-a9be-b0ef482bbe92";
  ngOnInit():void {
   this.title = "Abhishek Jat, Hello from BridgeLabz";  
  }
}