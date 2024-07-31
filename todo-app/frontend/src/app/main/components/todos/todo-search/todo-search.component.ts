import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoSearchParams } from '../../../../models/todo';
import { todoStatuses } from '../../../../core/constants/select.constant';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.less'],
})
export class TodoSearchComponent implements OnChanges {
  readonly todoStatuses = todoStatuses;

  form: FormGroup;

  isClear: boolean = false;

  @Input() search: TodoSearchParams;

  @Output() searchStart: EventEmitter<TodoSearchParams> =
    new EventEmitter<TodoSearchParams>();

  @Output() searchClear: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(new TodoSearchParams());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.search) {
      this.form.reset(changes.search.currentValue || {});
    }
  }

  onSubmit(): void {
    this.searchStart.emit(this.form.value);
  }

  onClear(): void {
    this.searchClear.emit();
  }
}
