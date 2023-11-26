import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common-service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup | any;

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router,
    public loadingCtrl: LoadingController,
    public commonService: CommonService
  ) {
    if (this.authService.isUserLogin) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
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

  async logIn() {
    const loading = await this.loadingCtrl.create({
      message: 'Please wait...',
    });
    await loading.present();
    if (this.loginForm?.valid) {
      this.loginForm.value.password = this.authService.encryptPass(
        this.loginForm.value.password
      );
      const user = await this.authService
        .loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .catch((error) => {
          loading.dismiss();
          console.log(error);
        });

        if (user) {
          const userData = {
            isUserLogin: true, user: user
          }
          console.log('userData', userData);
          this.commonService.setLocalStorage('userData', JSON.stringify(userData));
          this.authService.isUserLogin = true;
          this.authService.userEmail = userData.user.user?.email;
          loading.dismiss();
          this.router.navigateByUrl('/home');
        } else {
          this.authService.isUserLogin = false;
          console.log('provide correct value');
          loading.dismiss();
          
        }
    }
  }
}
