import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMoviesPage } from './update-movies.page';

describe('UpdateMoviesPage', () => {
  let component: UpdateMoviesPage;
  let fixture: ComponentFixture<UpdateMoviesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
