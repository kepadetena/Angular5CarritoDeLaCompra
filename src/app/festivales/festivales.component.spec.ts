import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalesComponent } from './festivales.component';

describe('FestivalesComponent', () => {
  let component: FestivalesComponent;
  let fixture: ComponentFixture<FestivalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
