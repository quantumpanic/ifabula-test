import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpReqPage } from './http-req.page';

describe('HttpReqPage', () => {
  let component: HttpReqPage;
  let fixture: ComponentFixture<HttpReqPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HttpReqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
