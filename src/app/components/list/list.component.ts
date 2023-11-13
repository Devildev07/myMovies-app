import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/services/getData/get-data.service';
GetDataService;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public getMoviesData: any;

  constructor(private router: Router, public getDataService: GetDataService) {
    this.getDataService.myEventEmitter.subscribe((data) => {
      this.getMovies();
      this.getMoviesData.push(data);
      console.log('Received event with Data:', data);
    });
  }

  ngOnInit() {
    this.getMovies();
  }

  async getMovies() {
    this.getMoviesData = await this.getDataService.getData('movies');
    console.log('movie Data from Firebase:', this.getMoviesData);
  }

  // navigate to detail page
  gotoDetailsPage(movieId: number) {
    this.router.navigate(['/movie-detail', movieId]);
  }

  // open edit modal
  openEditModal(movie:any){
console.log('movie', movie);

  }
}
