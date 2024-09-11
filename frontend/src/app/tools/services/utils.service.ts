import { Injectable } from '@angular/core';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService extends DateService {
  constructor() {
    super();
  }

  changeTextToUpperCase(text: string) {
    return text.toUpperCase();
  }

  transformText(value: string, maxLength: number = 100): string {
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '......';
    }
    return value;
  }

  chooseTwoRandomItems(arr) {
    const randomIndex1 = Math.floor(Math.random() * arr.length);
    let randomIndex2 = Math.floor(Math.random() * arr.length);
    while (randomIndex2 === randomIndex1) {
      randomIndex2 = Math.floor(Math.random() * arr.length);
    }
    return [arr[randomIndex1], arr[randomIndex2]];
  }

  checkStringLength(inputString, length) {
    return inputString.length >= length;
  }

  chekIfPdf(url: string): boolean {
    return url.endsWith('.pdf');
  }

  calculatePercentage(value1, value2) {
    if (value2 === 0) {
        return 0; // Avoid division by zero
    }
    return (value1 / value2) * 100;
}
}
