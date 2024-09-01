import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface UserDto {
  name: string;
  username: string;
  email: string;
  role: string;
  createdOn: string;
}

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  users: UserDto[] = [
    {
      name: 'John Doe', email: 'john@example.com', role: 'Admin',
      username: '',
      createdOn: ''
    },
    {
      name: 'Jane Smith', email: 'jane@example.com', role: 'User',
      username: '',
      createdOn: ''
    },
  ];

  newUser: UserDto = {
    name: '', email: '', role: '',
    username: '',
    createdOn: ''
  };

  editIndex: number | null = null; // To track if editing

  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      this.users.push({ ...this.newUser });
      this.resetForm();
    }
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  resetForm() {
    this.newUser = {} as UserDto;
  }

  editUser(index: number) {
    this.newUser = { ...this.users[index] };
    this.editIndex = index;
  }

  handleSubmit() {
    if (this.editIndex !== null) {
      // Edit mode
      this.users[this.editIndex] = { ...this.newUser };
      this.editIndex = null;
    } else {
      // Add mode
      this.users.push({ ...this.newUser });
    }
    this.resetForm();
  }

  ngOnInit(): void { }

}
