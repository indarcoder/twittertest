import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicapiComponent } from './dynamicapi.component';

describe('DynamicapiComponent', () => {
  let component: DynamicapiComponent;
  let fixture: ComponentFixture<DynamicapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
