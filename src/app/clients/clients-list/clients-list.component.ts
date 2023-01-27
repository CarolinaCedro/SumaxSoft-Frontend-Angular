import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ClientsService } from 'src/app/clients.service';
import { Client } from '../client';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Client[] = [];
  selectedCustomer:Client;
  msgSucess:string;
  msgError:string;


  constructor(
    private service:ClientsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service
    .getClients()
    .subscribe(response => {
      this.clients = response
    }
    )
  }

  pickCustomer(client: Client){
    this.selectedCustomer = client;
  }

  deleteCustomer(){
    this.service
    .delete(this.selectedCustomer)
    .subscribe(
      response => {this.msgSucess = 'Cliente deletado com sucesso',this.ngOnInit()},
      error => this.msgError = 'Ocorreu um erro ao deletar o cliente'
    )
  }



  newRegistration(){
    this.router.navigate(['/clients-form'])
  }
}
