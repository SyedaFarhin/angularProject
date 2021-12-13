import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ecom';
  name = 'neha kohli';
  age = 22;
  getFullName() {
    alert('this is me');
  }
  c: number = 0;
  add(x: number, y: number) {
    this.c = x + y;
    alert(this.c);
  }
  setName(x: string) {
    this.name = x;
  }
  myName: string = '';
  displayName(value: string) {
    console.log('username', this.myName);
    value === '' || value === ' '
      ? (this.myName = 'please enter something')
      : (this.myName = value);
  }
  mydata: string = '';
  setData(value: string) {
    this.mydata = value;
    console.log(this.mydata);
  }
  m = 0;
  n = 0;
  i = 0;
  EnterFunction() {
    this.m++;
  }
  OverFunction() {
    this.n++;
  }
  MoveFunction() {
    this.i++;
  }
}
