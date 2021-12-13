import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  a: number = 0;
  clickButton() {
    this.a++;
  }
  k: string = '';
  l: string = '';
  m: string = '';

  submitButton(a: string, b: string) {
    this.k = a;
    this.l = b;
  }
  isValue = '';
  isReadOnly = true;
  isDisabled = true;
  isPassout=true
}
