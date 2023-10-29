import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/getData/get-data.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie: any;
  constructor(
    private route: ActivatedRoute,
    private movieService: GetDataService
  ) {}

  ngOnInit() {}


  ionViewWillEnter() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log(id);
      // Fetch the movie details from Firebase using the ID as a Promise
      this.movieService.getData('movies').then((data:any) => {
        this.movie = data.find((movie: any) => movie.id === id);
        console.log(this.movie);
      })
    });
  }
}
