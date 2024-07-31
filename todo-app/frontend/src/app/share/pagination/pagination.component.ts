import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationMetaData } from '../../interfaces/app.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent {
  @Input() paginationInfo!: PaginationMetaData;

  @Output() pageIndexChange = new EventEmitter<number>();
}
