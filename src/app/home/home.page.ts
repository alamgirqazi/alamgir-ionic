import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  name = 'Nidal';
  city = 'Multan';
  interests = ['Dota', 'Squash', 'Book Reading'];

  user = {
    name: 'Nidal',
    city: 'Multan',
    interests: ['Dota', 'Squash', 'Book Reading']
  };

  constructor() {}
}
