import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMoviesPage } from './add-movies.page';

describe('AddMoviesPage', () => {
  let component: AddMoviesPage;
  let fixture: ComponentFixture<AddMoviesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
