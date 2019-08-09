import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoutingService } from 'src/app/core/services/routing.service';
import { SigninService } from '../core/services/signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private signinService: SigninService,
              private routingService: RoutingService) { }

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
        this.routingService.routeToHome();
      }
    );
  }

  hasError(name: string, error: string): boolean {
    return this.signinForm.controls[name].hasError(error);
  }

}

