import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../css/bootstrap.min.css']
})
export class LoginComponent {
  loginForm: any;

  constructor(private dataService: AuthenticationService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    )

    if (localStorage.getItem('token') != '' && localStorage.getItem('token') != null) {
      this.router.navigate(['/home']) //chuyển hướng đến trang home khi đã có token
    }else {
      this.router.navigate(['/login'])
    }
  }

  onSubmit() {
    this.dataService.getDataLogin(this.loginForm.value).subscribe(
      (response) => {
        console.log(response.token)
        localStorage.setItem('token', response.token) //set token vào localstorage
        this.router.navigate(['/home']) //chuyển hướng đến trang home khi đã có token
      },
      (error) => {
        alert('Incorrect information')
      }
    )
  }

}
