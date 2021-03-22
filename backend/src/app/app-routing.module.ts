import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { RetiroComponent } from './pages/retiro/retiro.component';
import { CargaComponent } from './pages/carga/carga.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransferComponent } from './pages/transferencia/transferencia.component';
import { TercerosComponent } from './pages/terceros/terceros.component';


const routes: Routes = [
  { path: 'home'    , component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'carga/:rut'   , component: CargaComponent },
  { path: 'retira/:rut'   , component: RetiroComponent },
  { path: 'dashboard/:rut'   , component: DashboardComponent },
  { path: 'transferencias/:rut'   , component: TransferComponent },
  { path: 'terceros/:rut'   , component: TercerosComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
