import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { Role, login } from '../models';
import { AlertService } from './alert.service';
import { ApisService } from './apis.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService extends AlertService {
  servicesList:any = new BehaviorSubject([])
  constructor(private apis: ApisService, private router: Router) {
    super();
  }

  login(auth: login) {
    return this.apis.post('/auth/login-with-password', auth);
  }

  registerCustomer(registration: any) {
    return this.apis.post('/auth/sign-up-using-email', registration);
  }

  resetPassword(email): any {
    return this.apis.get('/user/resetPassword/' + email);
  }

  sendVerificationEmail(emailInfo: { email: string }) {
    return this.apis.post('/auth/send-verification-email', emailInfo);
  }

  sendPasswordRequestEmail(emailInfo: { email: string }) {
    return this.apis.post('/auth/request-password-email', emailInfo);
  }

  updatePassword(passInfo: any) {
    return this.apis.post('/auth/update-password', passInfo);
  }

  verifyEmail(token: string) {
    return this.apis.get('/auth/verify-email/?token=' + token);
  }

  decodeToken(x: any, url: string) {
    const decoded: any = jwt_decode.jwtDecode(x.token);
    if (!decoded.verified) {
      return this.error(
        'Your Account is not verified ,please verify your account to be able to continue'
      );
    }

    if (!decoded.active) {
      return this.reportError(
        'Account Blocked',
        'For some reason your account have been disabled ,please contact the administration ,if there some issues'
      );
    }

    if (decoded.role != Role.CUSTOMER) {
      return this.error('Youre not alllowed to access this account');
    }
    sessionStorage.setItem('token', x.token);
    sessionStorage.setItem('user', JSON.stringify(decoded));
    this.success('Login successful');

    return this.router.navigateByUrl(url);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  goToRoute(route: any) {
    this.router.navigate([`/${route}`]);
  }


  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.goToRoute('/');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  isLoggedIn(): boolean {
    const user = sessionStorage.getItem('user');
    return !!user;
  }

  getUser() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    return user;
  }
}
