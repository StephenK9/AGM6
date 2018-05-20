import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ComponentOneComponent } from './d3-component-one.component';

describe('D3ComponentOneComponent', () => {
  let component: D3ComponentOneComponent;
  let fixture: ComponentFixture<D3ComponentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ComponentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
