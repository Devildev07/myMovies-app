import { EventEmitter, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
public moviesData!: Observable<any> ;

  public myEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(public agFireStore: Firestore) {}

  async getData(key: any) {
    const collectionInstance = collection(this.agFireStore, key);

    return new Promise((resolve, reject) => {
      const subscription = collectionData(collectionInstance, {
        idField: 'id',
      }).subscribe(
        (val) => {
          console.log('val', val);
          subscription.unsubscribe(); // Clean up the subscription

          resolve(val); // Resolve the promise with the value
        },
        (error) => {
          subscription.unsubscribe(); // Clean up the subscription

          reject(error); // Reject the promise with the error
        }
      );
    });
  }

  // async getData(key: any) {
  //   const docRef = doc(this.agFireStore, 'movies', key);
  //   try {
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       const data = docSnap.data();
  //       return data;
  //     } else {
  //       throw new Error('Document not found');
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }

 
}
