import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
formularioContacto:FormGroup


  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.formularioContacto=this.fb.group({
      nombre:['', [Validators.required,Validators.minLength(3)]],
      apellido:['', [Validators.required,Validators.minLength(3)]],
      documento:['', [Validators.required,Validators.maxLength(8)]],
      celular:['', [Validators.required,Validators.minLength(10)]],
      email:['',Validators.email],
      mensaje:['', Validators.maxLength(15)]

    })
  }
  submit(){
    console.log(this.formularioContacto.value);
  }

}

