import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CuentaService } from "../../services/cuenta.service";
import { NgForm } from "@angular/forms";
import { Cuenta } from "../../models/cuenta";

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css'],
  providers: [CuentaService],
})
export class CargaComponent implements OnInit {

  constructor(private cuentaservice: CuentaService,
              private router: Router) {}

  ngOnInit() {
    this.cuentaservice.selectedCuenta = new Cuenta();
  }

  carga(form?: NgForm) {
    this.cuentaservice.postSaldo(this.cuentaservice.selectedCuenta).subscribe((res) =>{
      
    });
  }

}
