import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName: string = '';
  authChanges = new EventEmitter<boolean>();
  constructor() {}

  setUserName = (userName: string) => {
    this.userName = userName;
    this.authChanges.emit(this.isAuthed());
  };

  isAuthed = () => {
    return this.userName !== '';
  };
}
