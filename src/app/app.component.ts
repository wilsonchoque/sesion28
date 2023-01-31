import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Login';
  resultado!:string;

  public formLogin !: FormGroup
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void{
    this.formLogin = this.formBuilder.group({
      username:['',
      [Validators.required,Validators.minLength(5), Validators.email],
      
    ],
      password:['',
      [Validators.required,Validators.minLength(5)]
    ],
    })
  }

  enviar(){
    if(this.formLogin.valid){
      this.resultado = "Estas logeado" 
      Swal.fire({
        title: '¡Estas logeado!',
        text: 'Has accedido',        
      })
    }
    else{
      this.resultado = "No estas logeado"
      Swal.fire({
        title: '¡No estas logeado!',
        text: 'Credenciales incorrectas',        
      })
    }
   
  }
}
