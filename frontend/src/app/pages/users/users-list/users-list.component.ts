import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDto, isUserDTOValid } from '../../../tools/models/user-dto';
import { UserService } from '../../../tools/services/user.service'; 



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
      firstName: 'John Doe',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneNumber: 'Admin',
      userName: '',
      password: ''
    },
  ];

  newUser: UserDto = {} as UserDto;

  editIndex: number | null = null; // To track if editing

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  addUser() {
    if (isUserDTOValid(this.newUser)) {
      this.users.push({ ...this.newUser });
      this.userService.createUser(this.newUser);
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



}
