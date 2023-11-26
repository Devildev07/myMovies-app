import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
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
    private router: Router,
    private alertController: AlertController
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

  // async signUp() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Please wait...',
  //   });
  //   await loading.present();
  //   if (this.signUpForm?.valid) {
  //     let password: string | any;
  //     password = this.authService.encryptPass(this.signUpForm.value.password);
  //     const user = await this.authService
  //       .registerUser(this.signUpForm.value.email, password)
  //       .catch((error) => {
  //         loading.dismiss();
  //         console.log(error);
  //       });
  //     if (user) {
  //       loading.dismiss();
  //       this.router.navigateByUrl('/login');
  //     } else {
  //       console.log('provide correct value');
  //     }
  //     console.log(user);
  //   }
  // }

  async signUp() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    await loading.present();

    try {
      if (this.signUpForm?.valid) {
        const password: string = this.signUpForm.value.password;
        console.log('password', password);

        const encryptedPassword: any = await this.authService.encryptPass(
          password
        );
        console.log('encryptedPassword', encryptedPassword);

        const user = await this.authService.registerUser(
          this.signUpForm.value.email,
          encryptedPassword
        );

        if (user) {
          loading.dismiss();
          this.router.navigateByUrl('/login');
        } else {
          console.log('Registration failed. Provide correct values.');
        }
      }
    } catch (error) {
      loading.dismiss();
      console.log(error);
      this.presentAlert('Error', 'An error occurred during registration.');
    }
  }

  // alertbox
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
