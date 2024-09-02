
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientRegistration } from '../../tools/models/registration.interface';
import { ClientRegistrationService } from '../../tools/services/registration.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  clients: ClientRegistration[] = [];
  newClient: ClientRegistration = {} as ClientRegistration;

  constructor(private clientRegistrationService: ClientRegistrationService) { }

  addClient() {
    this.clientRegistrationService.addClient(this.newClient).subscribe(() => {
      this.clients.push({ ...this.newClient });
      this.resetForm();
    });
  }

  updateClient(client: ClientRegistration) {
    this.clientRegistrationService.updateClient(client).subscribe(() => {
      const index = this.clients.findIndex(c => c.id === client.id);
      if (index !== -1) {
        this.clients[index] = client;
      }
    });
  }

  deleteClient(id: number) {
    this.clientRegistrationService.deleteClient(id).subscribe(() => {
      this.clients = this.clients.filter(client => client.id !== id);
    });
  }

  resetForm() {
    this.newClient = {} as ClientRegistration;
  }
}