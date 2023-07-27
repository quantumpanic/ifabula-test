import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HashFunctionPage } from './hash-function.page';

describe('HashFunctionPage', () => {
  let component: HashFunctionPage;
  let fixture: ComponentFixture<HashFunctionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HashFunctionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
