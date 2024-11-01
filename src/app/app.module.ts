import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Componentes/Views/home/home.component';
import { LancamentosComponent } from './Componentes/Views/lancamentos/lancamentos.component';
import { CaixinhasComponent } from './Componentes/Views/caixinhas/caixinhas.component';
import { MetasFinanceirasComponent } from './Componentes/Views/metas-financeiras/metas-financeiras.component';
import { BaseLayoutComponent } from './Componentes/layout/base-layout/base-layout.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { AppCardComponent } from './Componentes/modules/app-card/app-card.component';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { PerfilComponent } from './Componentes/Views/perfil/perfil.component';
import { ConfiguracoesComponent } from './Componentes/Views/configuracoes/configuracoes.component';
import { AppModalComponent } from './Componentes/modules/app-modal/app-modal.component';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Componentes/Views/login/login.component';
import { ImageModule } from 'primeng/image';
import { PasswordModule } from 'primeng/password';
import { ModalComponent } from './Componentes/shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LancamentosComponent,
    CaixinhasComponent,
    MetasFinanceirasComponent,
    BaseLayoutComponent,
    AppCardComponent,
    PerfilComponent,
    ConfiguracoesComponent,
    AppModalComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    DividerModule,
    MenuModule,
    ToastModule,
    CardModule,
    TableModule,
    RatingModule,
    TagModule,
    DialogModule,
    InputNumberModule,
    CalendarModule,
    CheckboxModule,
    InputTextModule,
    ReactiveFormsModule,
    ImageModule,
    PasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
