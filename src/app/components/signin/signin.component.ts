import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alert } from 'selenium-webdriver';
import { SigninService } from 'src/app/services/signin.service';
import { MatSnackBar } from '@angular/material';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private signinService: SigninService,
              private snackbar: MatSnackBar, private routingService: RoutingService) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  signin() {
    if (this.signinForm.invalid) {
      return;
    }
    this.signinService.signin(JSON.stringify(this.signinForm.getRawValue())).subscribe(
      data => {
        console.log('Signin SUCCESSFUL: ', JSON.stringify(data));
        this.signinService.store(JSON.stringify(data));
        this.snackbar.open('Willkommen zurück, ' + data.firstName + ' ' + data.lastName, '', { duration: 3000 });
        this.routingService.routeToHome();
      },
      error => {
        console.log('Signin FAILED: ', error.status);
        this.snackbar.open('Anmeldung fehlgeschlagen: ' + error.status, '', { duration: 3000 });
      }
    );
  }

  hasError(name: string, error: string): boolean {
    return this.signinForm.controls[name].hasError(error);
  }

}
