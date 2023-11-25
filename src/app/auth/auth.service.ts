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
    console.log('item', item);
    if (item != undefined && item != null) {
      let data = JSON.parse(item);
      if (data.isUserLogin) {
        console.log('data', data);

        this.isUserLogin = true;
        this.userEmail = data.user.user.email;
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


}
