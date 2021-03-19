import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CuentaService } from "../../services/cuenta.service";
import { NgForm } from "@angular/forms";
import { Cuenta } from "../../models/cuenta";

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css'],
  providers: [CuentaService],
})
export class RetiroComponent implements OnInit {

  constructor(private cuentaservice: CuentaService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.snapshot.paramMap.get('rut');
    this.cuentaservice.selectedCuenta = new Cuenta();
  }

  retiro(form?: NgForm) {
    this.cuentaservice.getSaldo().subscribe((res) =>{
      
    });
  }

}
