import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.page.html',
  styleUrls: ['./add-movies.page.scss'],
})
export class AddMoviesPage implements OnInit {
  years: number[] = [];
  selectedYear: number | any;

  constructor(public picker: PickerController) {
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
  }
}
