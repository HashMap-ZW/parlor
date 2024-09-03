

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ClientRegistration } from '../models/registration.interface';
import { ApisService } from './apis.service';

@Injectable({ providedIn: 'root' })
export class ClientRegistrationService {
  private clientsList = new BehaviorSubject<ClientRegistration[]>([]);

  constructor(private apis: ApisService,
    private router: Router) { }


  addClient(client: ClientRegistration) {
    return this.apis.post('/addClient', client);
  }

  getClientById(id: number) {
    return this.apis.get(`/getClientById/${id}`);
  }

  updateClient(client: ClientRegistration) {
    return this.apis.put(`/updateClient/${client.id}`, client);
  }

  deleteClient(id: number) {
    return this.apis.delete(`/deleteClient/${id}`);
  }

}