import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovietitleComponent } from './movietitle.component';

describe('MovietitleComponent', () => {
  let component: MovietitleComponent;
  let fixture: ComponentFixture<MovietitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovietitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovietitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
