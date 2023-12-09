import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { UpdateMoviesPage } from 'src/app/pages/add-data/update-movies/update-movies.page';
import { GetDataService } from 'src/app/services/getData/get-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public getMoviesData: any;
  moviesData: any;

  constructor(
    private router: Router,
    public getDataService: GetDataService,
    public modalController: ModalController,
    public authService: AuthService
  ) {
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
    this.moviesData = await this.getDataService.getData('movies');
    const sortData = this.moviesData.sort((a: any, b: any) =>
      a.movie_title.localeCompare(b.movie_title)
    );
    this.getMoviesData = sortData;
    console.log('movie Data from Firebase:', this.getMoviesData);
  }

  // navigate to detail page
  gotoDetailsPage(movieId: number) {
    this.router.navigate(['/movie-detail', movieId]);
  }

  // open edit modal
  async openEditModal(movie: any) {
    console.log('movie', movie);
    const modal = await this.modalController.create({
      component: UpdateMoviesPage,
      componentProps: { movieData: movie },
    });

    await modal.present();
  }
}
