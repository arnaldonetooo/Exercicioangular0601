import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {

  nome:string=''
  sobrenome:string=''
  cpf:string=''
  telefone1:string=''
  telefone2:string=''
  endereco:string=''
  complemento:string=''
  senha:string=''
  confirmacaosenha:string=''
   
  
  
  constructor() { }

  ngOnInit(): void {
  }
 
}
