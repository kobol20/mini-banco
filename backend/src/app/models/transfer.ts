export class Transferencia {
  constructor(_id = "", cuenta = "", rut = "", monto = 0, tipo ="") {
    this._id = _id;
    this.cuenta = cuenta;
    this.rut = rut;
    this.monto = monto;
    this.tipo = tipo;
  }

  _id: string;
  cuenta: string;
  rut: string;
  monto: number;
  tipo: string;
}
