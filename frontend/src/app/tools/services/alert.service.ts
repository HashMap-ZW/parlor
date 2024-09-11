import { Injectable } from '@angular/core';
import * as Notiflix from 'notiflix';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable()
export class AlertService extends LoaderService {
  triggerUpdate = new BehaviorSubject(true);
  public isMobile = new BehaviorSubject(true);
  error(text: string, callback?: any) {
    Notiflix.Notify.failure(text || 'Server Error', callback, {
      position: 'right-bottom',
      cssAnimation: true,
      cssAnimationStyle: 'from-bottom',
      clickToClose: true,
      useIcon: true,
      timeout: 3000,
      fontSize: '20px',
      borderRadius: '20px',
      width: '500px',
    });
  }

  success(text: string, callback?: any) {
    Notiflix.Notify.success(text, callback, {
      position: 'right-bottom',
      cssAnimation: true,
      cssAnimationStyle: 'from-bottom',
      useIcon: true,
      fontSize: '20px',
      borderRadius: '20px',
      width: '500px',
    });
  }

  info(text: string, callback?: any) {
    Notiflix.Notify.info(text, callback, {
      position: 'right-bottom',
      cssAnimation: true,
      cssAnimationStyle: 'from-bottom',
      useIcon: true,
      fontSize: '20px',
      borderRadius: '20px',
      width: '500px',
    });
  }

  reportInfo(text: string, message: string, callback?: any) {
    Notiflix.Report.info(text, message, 'Ok', {});
  }

  reportSuccess(text: string, message, callback?: any) {
    Notiflix.Report.success(text, message, 'Ok', {});
  }

  reportError(text: string, message, callback?: any) {
    Notiflix.Report.failure(text, message, 'Ok', {});
  }

  loader(callback?: any) {
    Notiflix.Loading.pulse('Processing', {
      cssAnimation: true,
      backgroundColor: 'rgba(12, 50, 250, 0.3)',
    });
  }

  closeLoader() {
    Notiflix.Loading.remove();
  }

  loaderInfo(text: any, callback?: any) {
    Notiflix.Notify.success(text, callback, {
      position: 'center-center',
      cssAnimation: true,
      cssAnimationStyle: 'from-bottom',
      clickToClose: true,
      closeButton: true,
      useIcon: true,
      fontSize: '20px',
      borderRadius: '20px',
      width: '500px',
    });
  }
}
