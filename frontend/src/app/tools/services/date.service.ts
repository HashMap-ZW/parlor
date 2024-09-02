import { Injectable } from '@angular/core';
import  moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  getFirstDayOfMonth(year:any, month:any) {
    return  moment(new Date(year, month, 1)).format('YYYY-MM-DD');
  }

  formatDate(date:any){
    return moment(date).format('YYYY-MM-DD');
  }


  convertDate(timestamop){
    return new Date(timestamop).toLocaleString('en-US');

  }

  calculateAge(dateOfBirth) {
    const today = moment();
    const birthDate = moment(dateOfBirth, 'YYYY-MM-DD');

    return today.diff(birthDate, 'years');
}

  convertToMilliseconds(date:any){
     return  moment(date).valueOf();
  }

  isEighteenOrAbove(dateString) {
    const birthdate = moment(dateString);
    const today = moment();
    return today.diff(birthdate, 'years') >= 18;
  }

}
