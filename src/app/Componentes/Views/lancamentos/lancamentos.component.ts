import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainStore } from 'src/app/Store/main-store';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent {
  value: string | undefined;


  constructor(private route: ActivatedRoute, private mainStore: MainStore) {
    this.mainStore.setRouteName(this.route.snapshot.data['name']);
  }
}

