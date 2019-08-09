import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UserAdministrationService } from 'src/app/core/services/user-administration.service';
import { RoutingService } from 'src/app/core/services/routing.service';

@Component({
  selector: 'app-user-profile-administration',
  templateUrl: './user-profile-administration.component.html',
  styleUrls: ['./user-profile-administration.component.css']
})
export class UserProfileAdministrationComponent implements OnInit {

  registerForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private userService: UserAdministrationService,
              private snackbar: MatSnackBar, private routingService: RoutingService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', ],
      password: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      references: ['', ],
      birthdate: ['', Validators.required]
    });
  }

  hasError(name: string, error: string): boolean {
    return this.registerForm.controls[name].hasError(error);
  }

  register() {
      if (this.registerForm.invalid) {
        return;
      }
      this.userService.createUser(JSON.stringify(this.registerForm.getRawValue())).subscribe(
        data => {
          console.log('Registration SUCCESSFUL: ', JSON.stringify(data));
          this.snackbar.open('Willkommen auf dem UX Portal, ' + data.firstName + ' ' + data.lastName, '', { duration: 3000 });
          this.routingService.routeToHome();
        }
      );
  }

}
