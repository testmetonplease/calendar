import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  constructor() {}

  makeid() {
    let text = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
