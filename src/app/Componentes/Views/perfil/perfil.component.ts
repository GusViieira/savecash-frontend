import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainStore } from 'src/app/Store/main-store';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  constructor(private route: ActivatedRoute, private mainStore: MainStore) {
    this.mainStore.setRouteName(this.route.snapshot.data['name']);
  }
}
