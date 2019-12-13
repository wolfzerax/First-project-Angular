import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoTextoComponent } from './corpo-texto.component';

describe('CorpoTextoComponent', () => {
  let component: CorpoTextoComponent;
  let fixture: ComponentFixture<CorpoTextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpoTextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
