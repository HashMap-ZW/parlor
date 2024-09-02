import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '../helpers';

@Injectable()
export class WindowService {
    constructor(@Inject(WINDOW) private window: Window) {}

    getHostname(): string {
        return this.window.location.origin;
    }
    makeid(length: any) {
        let result = '';
        const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
