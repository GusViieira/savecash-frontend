import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainStore } from 'src/app/Store/main-store';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent {
  constructor(private route: ActivatedRoute, private mainStore: MainStore) {
    this.mainStore.setRouteName(this.route.snapshot.data['name']);
  }
}
