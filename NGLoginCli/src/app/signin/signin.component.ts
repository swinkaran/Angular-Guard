import { Component } from '@angular/core';

import { User } from '../_models';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SignInFormComponent {
  model = new User();

  constructor() {
    this.model.id = 112;
    this.model.firstName = 'Srikaran';
    this.model.lastName = 'N Sarma';
    this.model.username = 'admin';
    this.model.password = 'password123';
  }
  
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
