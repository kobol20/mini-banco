import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CargaComponent } from './pages/carga/carga.component';
import { RetiroComponent } from './pages/retiro/retiro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransferComponent } from './pages/transferencia/transferencia.component';
import { TercerosComponent } from './pages/terceros/terceros.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CargaComponent,
    RetiroComponent,
    DashboardComponent,
    TransferComponent,
    TercerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
