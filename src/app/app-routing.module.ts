import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes/Views/home/home.component';
import { LoginComponent } from './Componentes/Views/login/login.component';
import { CaixinhasComponent } from './Componentes/Views/caixinhas/caixinhas.component';
import { ConfiguracoesComponent } from './Componentes/Views/configuracoes/configuracoes.component';
import { LancamentosComponent } from './Componentes/Views/lancamentos/lancamentos.component';
import { MetasFinanceirasComponent } from './Componentes/Views/metas-financeiras/metas-financeiras.component';
import { PerfilComponent } from './Componentes/Views/perfil/perfil.component';
import { BaseLayoutComponent } from './Componentes/layout/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'home',
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
        path: 'goals',
        component: MetasFinanceirasComponent,
        data: {
          name: 'Metas financeiras'
        }
      },
      {
        path: 'profile',
        component: PerfilComponent,
        data: {
          name: 'Perfil'
        }
      },
      {
        path: 'settings',
        component: ConfiguracoesComponent,
        data: {
          name: 'Configurações'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }