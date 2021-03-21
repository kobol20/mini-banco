import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';

import { CuentaService } from "../../services/cuenta.service";
import { NgForm } from "@angular/forms";
import { Cuenta } from "../../models/cuenta";
import { TransferService } from '../../services/transfer.service';
import { Transferencia } from '../../models/transfer';

@Component({
  selector: 'app-terceros',
  templateUrl: './terceros.component.html',
  styleUrls: ['./terceros.component.css'],
  providers: [CuentaService,TransferService],
})
export class TercerosComponent implements OnInit {

  constructor(private cuentaservice: CuentaService,
              private router: Router,
              private rutaActiva: ActivatedRoute,
              private transferservice: TransferService) {}

  ngOnInit() {
    console.log('carga saldo rutaactiva rut :',this.rutaActiva.snapshot.params);
    this.cuentaservice.selectedCuenta = new Cuenta();
  }

  transferencias(form?: NgForm) {
    console.log('Cargar terceros ',form.value.monto);
    this.cuentaservice.selectedCuenta.rut = form.value.rut;
    this.cuentaservice.selectedCuenta.cuenta = form.value.rut;
    this.cuentaservice.selectedCuenta.monto = form.value.monto;
    console.log('obtener cuenta');
    this.cuentaservice.getCuenta().subscribe((res) =>{
      console.log('cuenta obtenida :',res);
      var cuenta = res.find(x => x.rut === this.cuentaservice.selectedCuenta.rut);
      console.log('cuenta match rut ',cuenta);
      if(cuenta){
          cuenta.saldo = Number(cuenta.saldo) + Number(this.cuentaservice.selectedCuenta.monto);
          this.cuentaservice.putSaldo(cuenta).subscribe((res) =>{
            console.log('carga realizada ',res);
            var transfer = new Transferencia();
            transfer.cuenta = this.cuentaservice.selectedCuenta.cuenta;
            transfer.monto = this.cuentaservice.selectedCuenta.monto ;
            transfer.rut = this.cuentaservice.selectedCuenta.rut;
            transfer.tipo = 'transferencia';
            this.transferservice.createTransfer(transfer).subscribe((res) =>{
              console.log('transferencia registrada');
            });
          });
      }else{
        console.log('cuenta no existe');
        alert('cuenta no existe');
      }
    });
    console.log('fin carga');
  }
  
  volver(){
    var rut =  this.rutaActiva.snapshot.paramMap.get('rut');
    this.router.navigate(['/dashboard/'+rut]);

  }
}
