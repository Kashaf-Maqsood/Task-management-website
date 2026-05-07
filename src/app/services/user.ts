import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  private userName: string = '';

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }
}
