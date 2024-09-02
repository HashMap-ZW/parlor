

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


  getClientById(id: number) {
    return this.apis.get(`/clientregistrations/${id}`);
  }

  addClient(client: ClientRegistration) {
    return this.apis.post('/clientregistrations', client);
  }

  updateClient(client: ClientRegistration) {
    return this.apis.put(`/clientregistrations/${client.id}`, client);
  }

  deleteClient(id: number) {
    return this.apis.delete(`/clientregistrations/${id}`);
  }

  getClientsList() {
    return this.clientsList.asObservable();
  }
}