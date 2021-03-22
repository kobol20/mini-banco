import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  constructor(private rutaActiva: ActivatedRoute,
              private router: Router) { }
  
  ngOnInit() {
  }

  carga(){
    var rut = this.rutaActiva.snapshot.params['rut'];
    this.router.navigate(['/carga/'+rut]);
  }

  retiro(){
    var rut = this.rutaActiva.snapshot.params['rut'];
    this.router.navigate(['/retira/'+rut]);
  }

  transferencias(){
    var rut = this.rutaActiva.snapshot.params['rut'];
    this.router.navigate(['/transferencias/'+rut]);
  }
  terceros(){
    var rut = this.rutaActiva.snapshot.params['rut'];
    this.router.navigate(['/terceros/'+rut]);
  }
}
