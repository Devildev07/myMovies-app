import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.page.html',
  styleUrls: ['./add-movies.page.scss'],
})
export class AddMoviesPage implements OnInit {
  years: number[] = [];
  selectedYear: number | any;

  constructor(
    public picker: PickerController,
    private agFire: Firestore,
    private router: Router
  ) {
    // Generate a range of years, e.g., from 1970 to the current year
    const currentYear = new Date().getFullYear();
    for (let year = 1970; year <= currentYear; year++) {
      this.years.push(year);
    }
  }

  ngOnInit() {}

  // picker
  async openYearPicker() {
    const picker = await this.picker.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            // Handle the selected year (value.year)
            this.selectedYear = value.year.value;
          },
        },
      ],
      columns: [
        {
          name: 'year',
          options: this.years.map((year) => ({
            text: year.toString(),
            value: year,
          })),
        },
      ],
    });
    await picker.present();
  }

  addData(addMovie: any) {
    console.log(addMovie.value);

    const collectionInst = collection(this.agFire, 'movies');
    addDoc(collectionInst, addMovie.value)
      .then(() => {
        console.log('Data Sent');
        addMovie.reset();

        // Redirect to the home page after a 5-second delay
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 5000);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }
}
