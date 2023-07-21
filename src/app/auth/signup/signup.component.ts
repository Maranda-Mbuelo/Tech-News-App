import { Component } from '@angular/core';
import { SignUpForm } from 'src/Types/SignUpForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  form: SignUpForm = {
    email: '',
    password : '',
    confirmPassword: ''
  };

  onSubmit(): void {
    if (this.password === this.confirmPassword) {
      // Passwords match, handle form submission
      console.log('Form submitted');
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    } else {
      // Passwords don't match, handle error
      console.log('Passwords do not match');
    }
  }
}
