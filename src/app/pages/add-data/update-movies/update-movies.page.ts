import { Component, OnInit } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-movies',
  templateUrl: './update-movies.page.html',
  styleUrls: ['./update-movies.page.scss'],
})
export class UpdateMoviesPage implements OnInit {
  movieData: any;

  constructor(
    private modalController: ModalController,
    private agFire: Firestore
  ) {}

  ngOnInit() {
    this.movieData;
    console.log('movieData', this.movieData);
  }
  closeModal() {
    this.modalController.dismiss();
  }

  // saveChanges() {
  //   // Add your code here to update the movie data in Firebase.
  //   // You can use this.movieData to access the current movie data.
  //   // After updating, you can close the modal using this.closeModal().
  // }

  // update data in firebase
  saveChanges() {
    const movieId = this.movieData.id;
    console.log(`movieId: ${movieId}`);

    const movieRef = doc(this.agFire, 'movies', movieId);

    const updateMovieData = {
      movie_title: this.movieData.movie_title,
      movie_desc: this.movieData.movie_desc,
      movie_poster: this.movieData.movie_poster,
      movie_genre: this.movieData.movie_genre,
      movie_watchLink: this.movieData.movie_watchLink,
      movie_downloadLink: this.movieData.movie_downloadLink,
      movie_trailerLink: this.movieData.movie_trailerLink,
    };

    updateDoc(movieRef, updateMovieData)
      .then(() => {
        console.log('Movie data updated successfully!');
        this.closeModal();
      })
      .catch((error) => {
        console.error('Error updating movie data:', error);
      });
  }
}
