import { Injectable } from '@angular/core';

import { Tour } from './tour';
import { TOURS } from './mock-tours';

@Injectable()
export class TourService {
  getTours(): Promise<Tour[]> {
    return Promise.resolve(TOURS);
  }
}