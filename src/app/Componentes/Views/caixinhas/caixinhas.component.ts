import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainStore } from 'src/app/Store/main-store';

@Component({
  selector: 'app-caixinhas',
  templateUrl: './caixinhas.component.html',
  styleUrls: ['./caixinhas.component.scss']
})
export class CaixinhasComponent {
  constructor(private route: ActivatedRoute, private mainStore: MainStore) {
    this.mainStore.setRouteName(this.route.snapshot.data['name']);
  }
}
