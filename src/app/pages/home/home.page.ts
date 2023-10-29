import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/getData/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public getMoviesData: any;
  public moviesCount: any
  constructor(public getDataService: GetDataService) {}

  ngOnInit() {
    this.getMovies();
  }
  async getMovies() {
    this.getMoviesData = await this.getDataService.getData('movies');
    console.log('movie Data from Firebase:', this.getMoviesData);
    this.moviesCount = this.getMoviesData.length;
  }
}
