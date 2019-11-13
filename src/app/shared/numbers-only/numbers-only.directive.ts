import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {
  @Output() ngModelChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  @HostListener('input', ['$event'])
  onInput(event) {
    this.convert(event.target);
    this.allowNumbers(event.target);
  }

  @HostListener('blur', ['$event'])
  onBlur(event) {
    this.convert(event.target);
    this.allowNumbers(event.target);
  }

  @HostListener('focus', ['$event'])
  onFocus(event) {
    this.convert(event.target);
    this.allowNumbers(event.target);
  }

  private convert(element: HTMLInputElement) {
    let lastChar = element.value.substr(-1);
    switch (lastChar) {
      case 'q':
      case 'Q':
        lastChar = '1';
        break;

      case 'w':
      case 'W':
        lastChar = '2';
        break;

      case 'e':
      case 'E':
        lastChar = '3';
        break;

      case 'r':
      case 'R':
        lastChar = '4';
        break;

      case 't':
      case 'T':
        lastChar = '5';
        break;

      case 'y':
      case 'Y':
        lastChar = '6';
        break;

      case 'u':
      case 'U':
        lastChar = '7';
        break;

      case 'i':
      case 'I':
        lastChar = '8';
        break;

      case 'o':
      case 'O':
        lastChar = '9';
        break;

      case 'p':
      case 'P':
        lastChar = '0';
        break;

      default:
        break;
    }
    element.value = element.value.substr(0, element.value.length - 1) + lastChar;
  }

  private allowNumbers(element: HTMLInputElement) {
    const lastChar = element.value.substr(-1);
    const numbersList = '0123456789';
    element.value =
      numbersList.indexOf(lastChar) >= 0 ? element.value.substr(0) : element.value.substr(0, element.value.length - 1);
    this.ngModelChange.emit(element.value);
  }
}
