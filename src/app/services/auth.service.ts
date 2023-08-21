import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authChanges = new BehaviorSubject<string>('');
  constructor() {}

  setUserName = (userName: string) => {
    this.authChanges.next(userName);
  };
}
