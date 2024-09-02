import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ApisService } from './apis.service';

@Injectable({
  providedIn: 'root'
})
export class FilesService extends AlertService {
  constructor(private apis: ApisService) {
    super();
  }

  uploadFile(upload){
    return this.apis.file('/media', upload);
}

}
