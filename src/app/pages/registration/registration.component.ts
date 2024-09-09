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

  allClients: ClientRegistration[] = [];

  selectedClient: ClientRegistration;

  editModal = false;

  newClient: ClientRegistration = {
    id: 0,
    fullName: '',
    nationalID: '',
    mobileNumber: '',
    physicalAddress: '',
    dateCreated: new Date()
  };

  constructor(private clientRegistrationService: ClientRegistrationService) { }


  ngOnInit(): void {
    this.getClients();
    this.allClients;
  }

  addClient() {
    this.newClient.dateCreated = new Date();

    console.log('Adding client:', this.newClient);

    this.clientRegistrationService.addClient(this.newClient)
      .subscribe({
        next: (response) => {

          // Updating clients and allClients variables after a successful addition
          this.clients.push({ ...this.newClient });
          this.allClients.push({ ...this.newClient });
          this.resetForm();
        },
        error: (err) => {
          console.error('Error adding client:', err);

        }
      });
  }

  editClient(client: ClientRegistration) {
    console.log('Editing client:', client);
    this.selectedClient = { ...client };
    this.editModal = true;
  }

  updateClient() {
    if (this.selectedClient) {
      this.clientRegistrationService.updateClient(this.selectedClient)
        .subscribe({
          next: () => {
            //  updatting the allClients variable
            this.allClients = this.allClients.map(client =>
              client.id === this.selectedClient!.id ? { ...this.selectedClient! } : client
            );
            this.editModal = false;
            this.selectedClient = null;
          },
          error: (err) => {
            console.error('Error during client update:', err);
          }
        });
    }
  }
  deleteClient(id: number) {
    this.clientRegistrationService.deleteClient(id).subscribe({
      next: () => {
        this.getClients();
      },
      error: (err) => {
        console.error('Error deleting client:', err);

      }
    });
  }

  getClients(): void {
    this.clientRegistrationService.getClients()
      .subscribe((res: ClientRegistration[]) => {
        this.allClients = res;
        console.log(this.allClients);
      });
  }

  resetForm() {
    this.newClient = {
      id: 0,
      fullName: '',
      nationalID: '',
      mobileNumber: '',
      physicalAddress: '',
      dateCreated: new Date()
    };
  }
}