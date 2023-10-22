import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public movies = [
    {
      id: 1,
      title: 'The Godfather',
      rating: 4.5,
      desc: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      year: 1972,
      length: 175,
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      directors: ['Francis Ford Coppola'],
      genre: 'Drama',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster:
        'https://www.themoviedb.org/t/p/w220_and_h330_face/nbrqj9q8WubD3QkYm7n3GhjN7kE.jpg',
    },
    {
      id: 2,
      title: 'The Godfather',
      rating: 4.5,
      desc: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      year: 1972,
      length: 175,
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      directors: ['Francis Ford Coppola'],
      genre: 'Drama',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster:
        'https://www.themoviedb.org/t/p/w220_and_h330_face/nbrqj9q8WubD3QkYm7n3GhjN7kE.jpg',
    },
    {
      id: 3,
      title: 'The Godfather',
      rating: 4.5,
      desc: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      year: 1972,
      length: 175,
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      directors: ['Francis Ford Coppola'],
      genre: 'Drama',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster:
        'https://www.themoviedb.org/t/p/w220_and_h330_face/nbrqj9q8WubD3QkYm7n3GhjN7kE.jpg',
    },
    {
      id: 4,
      title: 'The Godfather',
      rating: 4.5,
      desc: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      year: 1972,
      length: 175,
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      directors: ['Francis Ford Coppola'],
      genre: 'Drama',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster:
        'https://www.themoviedb.org/t/p/w220_and_h330_face/nbrqj9q8WubD3QkYm7n3GhjN7kE.jpg',
    },
    {
      id: 5,
      title: 'The Godfather',
      rating: 4.5,
      desc: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      year: 1972,
      length: 175,
      actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
      directors: ['Francis Ford Coppola'],
      genre: 'Drama',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      poster:
        'https://www.themoviedb.org/t/p/w220_and_h330_face/nbrqj9q8WubD3QkYm7n3GhjN7kE.jpg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  // navigate to detail page
  gotoDetailsPage(movieId: number) {
    this.router.navigate(['/movie-detail', movieId]);
  }
}
