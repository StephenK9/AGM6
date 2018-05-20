import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ComponentTwoComponent } from './d3-component-two.component';

describe('D3ComponentTwoComponent', () => {
  let component: D3ComponentTwoComponent;
  let fixture: ComponentFixture<D3ComponentTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ComponentTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
