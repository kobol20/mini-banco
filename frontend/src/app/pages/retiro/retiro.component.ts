import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CuentaService } from "../../services/cuenta.service";
import { NgForm } from "@angular/forms";
import { Cuenta } from "../../models/cuenta";
import { Transferencia } from '../../models/transfer';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css'],
  providers: [CuentaService, TransferService],
})
export class RetiroComponent implements OnInit {

  constructor(private cuentaservice: CuentaService,
    private transferservice: TransferService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.cuentaservice.selectedCuenta = new Cuenta();
    this.cuentaservice.selectedCuenta.rut = this.route.snapshot.paramMap.get('rut');
  }

  retiro(form?: NgForm) {
    this.cuentaservice.getCuenta().subscribe((res) =>{
      var cuenta = res.find(x => x.rut === this.cuentaservice.selectedCuenta.rut);
      if(cuenta.saldo > form.value.monto){
        console.log('Saldo actual', cuenta.saldo);
        cuenta.saldo = Number(cuenta.saldo) - Number(form.value.monto);
        this.cuentaservice.putSaldo(cuenta).subscribe((res) =>{
          console.log('Saldo actual', cuenta.saldo);
          var transfer = new Transferencia();
          transfer.cuenta = cuenta.cuenta;
          transfer.monto = this.cuentaservice.selectedCuenta.monto ;
          transfer.rut = this.cuentaservice.selectedCuenta.rut;
          transfer.tipo = 'Retiro';
          this.transferservice.createTransfer(transfer).subscribe((res) =>{
            console.log('transferencia registrada',transfer);
          });
        });
        alert('Retiro realizado');
      }else{
        alert('Saldo insuficiente');
      }
    });
  }

  volver(){
    var rut =  this.route.snapshot.paramMap.get('rut');
    this.router.navigate(['/dashboard/'+rut]);

  }

}
