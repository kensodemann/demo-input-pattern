import { Component, DebugElement  } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NumbersOnlyDirective } from './numbers-only.directive';

@Component({
  template: `<input type="text" appNumbersOnly />`
})
class TestNumbersOnlyComponent {
}

describe('NumbersOnlyDirective', () => {
  let component: TestNumbersOnlyComponent;
  let fixture: ComponentFixture<TestNumbersOnlyComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestNumbersOnlyComponent, NumbersOnlyDirective]
    });
    fixture = TestBed.createComponent(TestNumbersOnlyComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('allows numbers to be entered', () => {
    inputEl.nativeElement.value = '1234';
    inputEl.triggerEventHandler('input', {target: inputEl.nativeElement});
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toEqual('1234');
  });

  it('does not allow letters to be entered', () => {
    inputEl.nativeElement.value = '1234a';
    inputEl.triggerEventHandler('input', {target: inputEl.nativeElement});
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toEqual('1234');
  });

  it('does not allow special characters to be entered', () => {
    inputEl.nativeElement.value = '1234!';
    inputEl.triggerEventHandler('input', {target: inputEl.nativeElement});
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toEqual('1234');
  });

  it('triggers on blur', () => {
    inputEl.nativeElement.value = '1234!';
    inputEl.triggerEventHandler('blur', {target: inputEl.nativeElement});
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toEqual('1234');
  });

  it('triggers on focus', () => {
    inputEl.nativeElement.value = '1234!';
    inputEl.triggerEventHandler('focus', {target: inputEl.nativeElement});
    fixture.detectChanges();
    expect(inputEl.nativeElement.value).toEqual('1234');
  });
});
