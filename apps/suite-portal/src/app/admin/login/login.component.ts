import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private snackBar: MatSnackBar) {
    
  }
  login() {
    this.userService.login(this.loginForm.value).then(response => {
      console.log("login")
      localStorage.setItem('user', JSON.stringify(response));
      this.router.navigate(['/maintenanceList']);
    }, error => {
      console.log(error)
      this.snackBar.open('Invalid Credentials, Please try again', '', {
        duration: 3000
      });
    });

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if (user && user.token)
      this.router.navigate(['/maintenanceList']);

  }

}
