import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Cuenta } from "../models/cuenta";

@Injectable({
  providedIn: "root",
})
export class CuentaService {
  selectedCuenta: Cuenta;

  readonly URL_API = "http://localhost:3000/api/cuenta";

  constructor(private http: HttpClient) {
    this.selectedCuenta = new Cuenta();
  }

  postSaldo(cuenta: Cuenta) {
    return this.http.post(this.URL_API, cuenta);
  }

  getSaldo() {
    return this.http.get<Cuenta[]>(this.URL_API);
  }

  
}
