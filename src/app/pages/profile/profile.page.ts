import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
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
  profileData: any;
  profiles: any;
  profileLength: any = 0;

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
    this.getProfileData();
  }

  addProfile(addProfileForm: any) {
    console.log(addProfileForm.value);
    const collectionInst = collection(this.agFire, 'users');
    addDoc(collectionInst, addProfileForm.value)
      .then(() => {
        console.log('Data Sent');
        // addProfileForm.reset();
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

  async getProfileData() {
    this.profileData = await this.getDatas.getData('users');
    console.log(this.profileData);
    const filterProfile = this.profileData.filter((data: any) => {
      return data.email === this.userEmail;
    });
    console.log('filterProfile', filterProfile);
    if (filterProfile.length > 0) {
      this.profiles = filterProfile;
    } else {
      // If no profile data is found, create an empty profile
      this.profiles = [{ uname: '', email: '' }];
    }

    this.profiles = filterProfile;
    this.profileLength = this.profiles.length;
  }

  updateProfile(updateProfileForm: any) {
    const profileId = this.profiles[0].id;
    console.log('profileId', profileId);

    const profileRef = doc(this.agFire, 'users', profileId);

    const updateProfileData = updateProfileForm.value;
    console.log('updateProfileData', updateProfileData);

    updateDoc(profileRef, updateProfileData)
      .then(() => {
        console.log('Profile data updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating profile data:', error);
      });
  }

  deleteProfile() {
    const profileId = this.profiles[0].id;
    console.log('profileId', profileId);
    deleteDoc(doc(this.agFire, 'users', profileId))
      .then(() => {
        console.log('Profile deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting profile:', error);
      });
  }
}
