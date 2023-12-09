import { Component, OnInit } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { addDoc } from '@firebase/firestore';
import { AuthService } from 'src/app/auth/auth.service';
import { CommonService } from 'src/app/services/common-service/common.service';
import { GetDataService } from 'src/app/services/getData/get-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userEmail: any;

  constructor(
    public authService: AuthService,
    public route: Router,
    public common: CommonService,
    public getDatas: GetDataService,
    public agFire: Firestore
  ) {
    var localData = common.getLocalStorage('userData');
    // console.log('localData=', localData);
  }

  ngOnInit() {
    this.userEmail = this.authService.userEmail;
  }

  updateProfile(profileForm: any) {
    console.log(profileForm.value);
    const collectionInst = collection(this.agFire, 'users');
    addDoc(collectionInst, profileForm.value)
      .then(() => {
        console.log('Data Sent');
        // profileForm.reset();
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  async logOut() {
    this.authService.signOutUser().then(() => {
      this.common.removeLocalStorage('userData');
      this.route.navigate(['/login']);
      this.authService.isUserLogin = false;
    });
  }
}
