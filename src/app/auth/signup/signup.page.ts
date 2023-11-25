import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm: FormGroup | any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            '^(?!.*(.)\\1{1})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$'
          ),
        ],
      ],
    });
  }

  get errorControl() {
    return this.signUpForm?.controls;
  }

  async signUp() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    await loading.present();
    if (this.signUpForm?.valid) {
      const user = await this.authService
        .registerUser(
          this.signUpForm.value.email,
          this.signUpForm.value.password
        )
        .catch((error) => {
          loading.dismiss();
          console.log(error);
        });
      if (user) {
        loading.dismiss();
        this.router.navigateByUrl('/login', { replaceUrl: true });
      } else {
        console.log('provide correct value');
      }

      console.log(user);
    }
  }
}
