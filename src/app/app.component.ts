import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LiveFormDialogComponent } from './views/home/live-form-dialog/live-form-dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercicioangular0601';
  
  constructor(private dialog:MatDialog,
    private snack:MatSnackBar,
    private fb:FormBuilder
    ){}
  
  
  personalData:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    cpf:new FormControl('',[Validators.required,Validators.minLength(3)]),
    tel1:new FormControl('',[Validators.required,Validators.minLength(3)]),
    tel2:new FormControl('',[Validators.required,Validators.minLength(3)]),
    adress:new FormControl('',[Validators.required,Validators.minLength(3)]),
    complement:new FormControl('',[Validators.required,Validators.minLength(3)]),
    password1:new FormControl('',[Validators.required,Validators.minLength(3)]),
    password2:new FormControl('',[Validators.required,Validators.minLength(3)]),
    
  })
  
  submit(): void {

    console.log(`Nome = ${this.personalData.controls['name'].value}`)
     console.log(`Sobrenome= ${this.personalData.controls["lastname"].value}`)
     console.log(`Username= ${this.personalData.controls["username"].value}`)
     console.log(`Cpf= ${this.personalData.controls["cpf"].value}`)
     console.log(`Telefone1= ${this.personalData.controls["tel1"].value}`)
     console.log(`Telefone2= ${this.personalData.controls["tel2"].value}`)
     console.log(`Endereço= ${this.personalData.controls["adress"].value}`)
     console.log(`Complemento= ${this.personalData.controls["complement"].value}`)
     console.log(`Senha= ${this.personalData.controls["password1"].value}`)
     console.log(`ConfirmaçãoSenha= ${this.personalData.controls["password2"].value}`)
  
     let ref = this.dialog.open(LiveFormDialogComponent)

     ref.componentInstance.nome = this.personalData.controls['name'].value
     ref.componentInstance.sobrenome = this.personalData.controls['lastname'].value
     ref.componentInstance.cpf= this.personalData.controls['cpf'].value
     ref.componentInstance.telefone1 = this.personalData.controls['tel1'].value
     ref.componentInstance.telefone2 = this.personalData.controls['tel2'].value
     ref.componentInstance.endereco = this.personalData.controls['adress'].value
     ref.componentInstance.complemento = this.personalData.controls['complement'].value
     ref.componentInstance.senha = this.personalData.controls['password1'].value
     ref.componentInstance.confirmacaosenha = this.personalData.controls['password2'].value
  
  
  
  
    } 
  
    validarSenha(v1: any, v2: any): boolean {
      return !(v1 === v2)
    }

  
}
