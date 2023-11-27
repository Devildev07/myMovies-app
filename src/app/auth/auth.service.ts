import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLogin: boolean = false;
  userEmail: any = '';

  constructor(private ngFireAuth: AngularFireAuth) {
    const item = localStorage.getItem('userData');
    // console.log('item', item);
    if (item != undefined && item != null) {
      let data = JSON.parse(JSON.parse(item));
      // console.log('data', typeof data, data);

      if (data.isUserLogin) {
        // console.log('data', data);

        this.isUserLogin = true;
        this.userEmail = data.user.user.email;
        // console.log('userEmail', this.userEmail);
        // console.log('isUserLogin', this.isUserLogin);
      }
    }
  }

  // authfunctionality starts here
  // registerUser
  async registerUser(email: string, password: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(
      email,
      password
    );
  }

  // signinUser
  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  // signout
  async signOutUser() {
    return await this.ngFireAuth.signOut();
  }

  // get current user
  async getCurrentUser() {
    return this.ngFireAuth.authState;
  }

  //encrypt password
  encryptPass(getPass: string) {
    var passA = btoa(getPass);
    var passB = btoa('devil');
    var generatedPass = passA + '@$98#%' + passB;
    console.log('generatedPass', generatedPass);
    return generatedPass;
  }
}
