import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxMovieComponent } from './ngrx-movie.component';

describe('NgrxMovieComponent', () => {
  let component: NgrxMovieComponent;
  let fixture: ComponentFixture<NgrxMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
