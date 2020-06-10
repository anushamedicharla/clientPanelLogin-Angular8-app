import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed: number;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.totalOwed = this.getTotalOwed();
    });
  }

  getTotalOwed() {
    const total = this.clients.reduce((totalValue, client) => {
      return totalValue + parseFloat(client.balance.toString());
    }, 0);

    return total;
  }

}
