export class Cuenta {
  constructor(_id = "", cuenta = "", rut = "", monto = 0, saldo = 0) {
    this._id = _id;
    this.cuenta = cuenta;
    this.rut = rut;
    this.monto = monto;
    this.saldo = saldo;
  }

  _id: string;
  cuenta: string;
  rut: string;
  monto: number;
  saldo: number;
}
