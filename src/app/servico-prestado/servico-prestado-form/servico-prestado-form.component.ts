import { Component, OnInit } from '@angular/core';

import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service'
import { Client } from 'src/app/clients/client';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Client[] = []
  servico: ServicoPrestado;
  success: boolean = false;
  errors: String[];

  constructor(
    private clienteService: ClientsService,
    private service: ServicoPrestadoService
  ) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService
      .getClients()
      .subscribe( response => this.clientes = response );
  }

  onSubmit(){
    this.service
      .salvar(this.servico)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.servico = new ServicoPrestado();
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  }

}