import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from "../../services/user.service";
import { NgForm } from "@angular/forms";
import { User } from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {

  constructor(private userservice: UserService,
    private router: Router) {}

  ngOnInit() {
    this.userservice.selectedUser = new User();
  }

  login(form?: NgForm) {
    this.userservice.getUsers().subscribe((res) =>{
      var user = res.find(x => x.correo === form.value.correo);
      if(null != user && user.correo == form.value.correo && 
        user.pass == form.value.pass ){
        console.log('Login correcto');
        this.router.navigate(['/dashboard/'+user.rut]);
      }else{
        console.log('Login incorrecto');
        alert('Usuario no existe');
      }
    });
  }

}
