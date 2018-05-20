import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ComponentThreeComponent } from './d3-component-three.component';

describe('D3ComponentThreeComponent', () => {
  let component: D3ComponentThreeComponent;
  let fixture: ComponentFixture<D3ComponentThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ComponentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
