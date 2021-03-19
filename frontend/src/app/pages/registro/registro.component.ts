import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from "../../services/user.service";
import { NgForm } from "@angular/forms";
import { User } from "../../models/user";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UserService],
})
export class RegistroComponent implements OnInit {


  constructor(private userservice: UserService,
    private router: Router) {}

  ngOnInit() { 
    this.userservice.selectedUser = new User();
  }

  registro(form?: NgForm) {
    console.log(form);
    if(form.controls['rut'].errors  ||
      form.controls['nombre'].errors ||
      form.controls['correo'].errors ||
      form.controls['pass'].errors){
        console.log("Datos vacios")
        return form.invalid == true;
    }
    this.userservice.getUsers().subscribe((res) =>{
      var user = res.find(x => x.rut === form.value.rut);
      console.log('usuario',user);
      if(null != user && user.rut === form.value.rut ){
        console.log('Usuario ya existe');
        form.value.yaexiste = true;
        console.log(form);
      }else{
        var nuevoUsuario = new User();
        nuevoUsuario.correo = form.value.correo;
        nuevoUsuario.nombre = form.value.nombre;
        nuevoUsuario.pass = form.value.pass;
        nuevoUsuario.rut = form.value.rut;
        console.log('nuevoUsuario',nuevoUsuario);
        this.userservice.postUser(nuevoUsuario).subscribe((res) =>{
          console.log(res);
          if(res){
          this.router.navigate(['/dashboard']);
          }
        });
      }
    });
  }


}
