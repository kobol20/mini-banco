import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';

import { TransferService } from "../../services/transfer.service";
import { NgForm } from "@angular/forms";
import { Transferencia } from '../../models/transfer';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css'],
  providers: [TransferService],
})
export class TransferComponent implements OnInit {

  constructor(private transferservice: TransferService,
              private router: Router,
              private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    this.transferservice.selectedTransfer = new Transferencia();
    var rut =  this.rutaActiva.snapshot.paramMap.get('rut');
    this.transferservice.getTransfer().subscribe((res) => {
      this.transferservice.transferencias = res;
    });
  }

  volver(){
    var rut =  this.rutaActiva.snapshot.paramMap.get('rut');
    this.router.navigate(['/dashboard/'+rut]);

  }

}
