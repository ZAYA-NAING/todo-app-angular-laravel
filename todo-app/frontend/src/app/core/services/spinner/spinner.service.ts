import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isSpinning$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {}
}
