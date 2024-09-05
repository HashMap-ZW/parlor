

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ClientRegistration } from '../models/registration.interface';
import { ApisService } from './apis.service';


@Injectable({ providedIn: 'root' })
export class ClientRegistrationService {
  private clientsList = new BehaviorSubject<ClientRegistration[]>([]);

  constructor(private apis: ApisService, private router: Router) { }

  addClient(client: ClientRegistration) {
    return this.apis.post('/ClientRegistration', client);
  }

  getClients() {
    return this.apis.get('/ClientRegistration');
  }

  getClientById(id: number) {
    return this.apis.get(`/ClientRegistration/${id}`);
  }

  updateClient(client: ClientRegistration) {
    return this.apis.put(`/ClientRegistration/${client.id}`, client);
  }

  deleteClient(id: number) {
    return this.apis.delete(`/ClientRegistration/${id}`);
  }
}
