import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services';

@Component({ templateUrl: 'login.component.html' })

export class LoginComponent implements OnInit {
  title: "Listing of activities";
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  
  ngOnInit() {

  //  // reset login status
  //  //this.authenticationService.logout();

  //  // get return url from route parameters or default to '/'
  //  //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    //this.submitted = true;
    alert('submitting the form');

    // stop here if form is invalid
    //if (this.loginForm.invalid) {
    //  alert('invalid form');
    //  return;
    //}

    //this.loading = true;
  }
}
