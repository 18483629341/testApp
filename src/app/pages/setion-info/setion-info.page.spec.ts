import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetionInfoPage } from './setion-info.page';

describe('SetionInfoPage', () => {
  let component: SetionInfoPage;
  let fixture: ComponentFixture<SetionInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetionInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetionInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
