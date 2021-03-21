import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';

import { CuentaService } from "../../services/cuenta.service";
import { NgForm } from "@angular/forms";
import { Cuenta } from "../../models/cuenta";
import { TransferService } from '../../services/transfer.service';
import { Transferencia } from '../../models/transfer';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css'],
  providers: [CuentaService,TransferService],
})
export class CargaComponent implements OnInit {

  constructor(private cuentaservice: CuentaService,
              private router: Router,
              private rutaActiva: ActivatedRoute,
              private transferservice: TransferService) {}

  ngOnInit() {
    this.cuentaservice.selectedCuenta = new Cuenta();
  }

  carga(form?: NgForm) {
    var rut =  this.rutaActiva.snapshot.paramMap.get('rut');
    this.cuentaservice.selectedCuenta.rut = rut;
    this.cuentaservice.selectedCuenta.cuenta = rut.replace(/\./g,'');
    this.cuentaservice.selectedCuenta.monto = form.value.monto;
    this.cuentaservice.getCuenta().subscribe((res) =>{
      var cuenta = res.find(x => x.rut === this.cuentaservice.selectedCuenta.rut);
      cuenta.saldo = Number(cuenta.saldo) + Number(this.cuentaservice.selectedCuenta.monto);

      this.cuentaservice.putSaldo(cuenta).subscribe((res) =>{
        console.log('carga realizada ',res);
        var transfer = new Transferencia();
        transfer.cuenta = this.cuentaservice.selectedCuenta.cuenta;
        transfer.monto = this.cuentaservice.selectedCuenta.monto ;
        transfer.rut = this.cuentaservice.selectedCuenta.rut;
        transfer.tipo = 'Carga';
        alert('Carga Realizada');
        this.transferservice.createTransfer(transfer).subscribe((res) =>{
          console.log('transferencia registrada',transfer);
        });
      });
    });
  }
  
  volver(){
    var rut =  this.rutaActiva.snapshot.paramMap.get('rut');
    this.router.navigate(['/dashboard/'+rut]);

  }
}
