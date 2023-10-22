import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainStore } from 'src/app/Store/main-store';

@Component({
  selector: 'app-metas-financeiras',
  templateUrl: './metas-financeiras.component.html',
  styleUrls: ['./metas-financeiras.component.scss']
})
export class MetasFinanceirasComponent {
  constructor(private route: ActivatedRoute, private mainStore: MainStore) {
    this.mainStore.setRouteName(this.route.snapshot.data['name']);
  }
}
