import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'login.component.html' })

export class LoginComponent {
  title: "Listing of activities"

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  onSubmit() {
    this.submitted = true;

    alert('success');
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    
  }
}
