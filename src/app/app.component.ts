import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Oeuvres', url: '/folder/Oeuvres', icon: 'mail' },
    { title: 'Profil', url: '/profil/', icon: 'paper-plane' },
    { title: 'Inscription', url: '/folder/Inscription', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
