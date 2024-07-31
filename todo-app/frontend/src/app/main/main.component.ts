import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../core/services/spinner/spinner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent {
  isCollapsed = false;

  
  isSpinning$: Observable<boolean>;
  isSpinning: boolean;
 

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.isSpinning$.subscribe(() => {
      this.isSpinning$ = this.spinnerService.isSpinning$.asObservable();
      this.isSpinning = false;
      });
  }
}
