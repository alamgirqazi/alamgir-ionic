import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  name = 'Alamgir';
  city = 'Rawalpindi';
  interests = ['Football', 'Books', 'Tv Serials'];

  user = {
    name: 'Alamgir',
    city: 'Rawalpindi',
    interests: ['Football', 'Books', 'Tv Serials']
  };

  constructor() {}
}
