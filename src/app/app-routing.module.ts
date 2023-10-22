import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/Views/home/home.component';
import { LancamentosComponent } from './Componentes/Views/lancamentos/lancamentos.component';
import { CaixinhasComponent } from './Componentes/Views/caixinhas/caixinhas.component';
import { MetasFinanceirasComponent } from './Componentes/Views/metas-financeiras/metas-financeiras.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      name: 'Dashboard'
    }
  },
  {
    path: 'lancamentos',
    component: LancamentosComponent,
    data: { name: 'Lançamentos'}
  },
  {
    path: 'envelopes',
    component: CaixinhasComponent,
    data: {
      name: 'Envelopes'
    }
  },
  {
    path: 'metas',
    component: MetasFinanceirasComponent,
    data: {
      name: 'Metas financeiras'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
