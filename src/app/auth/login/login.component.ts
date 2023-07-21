import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginForm } from 'src/Types/LoginForm';
import { AuthService } from 'src/Services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/Types/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('loginForm') loginForm!: NgForm; // Access the form using ViewChild
  email: string = '';
  password: string = '';
  passwordVisible: boolean = false;
  users: User[] = [];
  form: LoginForm = {
    email: '',
    password: '',
    passwordVisible: true
  }

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.getAllUsers();
  }
  

  getAllUsers(): User[] {
    return this.authService.getUsers(); // Retrieve all users from the AuthService
  }
  

  submitForm(): void {
    // Handle form submission logic here

    this.form.email = this.email;
    this.form.password = this.password;
    this.passwordVisible = this.passwordVisible;

    console.log(this.form);
    this.authService.saveUser(this.form);
    console.log('Posted successfully');

    this.loginForm.resetForm(); // Reset the form and clear its state

    this.passwordVisible = false; // Set password visibility to false

  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
