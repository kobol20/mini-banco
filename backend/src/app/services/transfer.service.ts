import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Transferencia } from "../models/transfer";

@Injectable({
  providedIn: "root",
})
export class TransferService {
  selectedTransfer: Transferencia;
  transferencias: Transferencia[];
  readonly URL_API = "http://localhost:3000/api/transfer";

  constructor(private http: HttpClient) {
    this.selectedTransfer = new Transferencia();
  }

  createTransfer(transfer: Transferencia) {
    return this.http.post(this.URL_API, transfer);
  }

  getTransfer() {
    return this.http.get<Transferencia[]>(this.URL_API);
  }
}
