export class User {
  constructor(_id = "", nombre = "", rut = "", correo = "", pass ="") {
    this._id = _id;
    this.nombre = nombre;
    this.rut = rut;
    this.correo = correo;
    this.pass = pass;
  }

  _id: string;
  nombre: string;
  rut: string;
  correo: string;
  pass: string;
}
