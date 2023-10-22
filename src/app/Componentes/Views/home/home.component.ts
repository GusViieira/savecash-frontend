import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainStore } from 'src/app/Store/main-store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private mainStore: MainStore) {
    this.mainStore.setRouteName(this.route.snapshot.data['name']);
  }
}
