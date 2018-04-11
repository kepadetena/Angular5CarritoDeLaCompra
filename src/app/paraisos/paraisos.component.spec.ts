import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaisosComponent } from './paraisos.component';

describe('ParaisosComponent', () => {
  let component: ParaisosComponent;
  let fixture: ComponentFixture<ParaisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
