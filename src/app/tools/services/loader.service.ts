import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderService  extends UtilsService{
  isLoading = new BehaviorSubject<boolean>(false);

  constructor() {
  super()
  }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
}
