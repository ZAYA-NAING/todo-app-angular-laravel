import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../../../../core/services/api-services/todo/todo.service';
import { Todo } from '../../../../models/todo';
import { todoStatuses } from '../../../../core/constants/select.constant';

@Component({
  selector: 'app-todo-editable-form',
  templateUrl: './todo-editable-form.component.html',
  styleUrls: ['./todo-editable-form.component.less'],
})
export class TodoEditableFormComponent implements OnInit {
  readonly todoStatuses = todoStatuses;
  // @Input() todo: any;

  form: FormGroup;

  @Input() todo?: Todo;

  constructor(
    public modal: NzModalRef<TodoEditableFormComponent, void>,
    private todoService: TodoService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group(new Todo({}));
    this.modal.updateConfig({
      nzOnOk: () => this.onSubmit(),
    });
  }

  ngOnInit(): void {
    if (this.todo || this.modal.getConfig().nzData?.todo) {
      this.form.patchValue(this.modal.getConfig().nzData.todo);
    }
  }

  onSubmit() {
    return this.todoService.saveItem(this.form.value).toPromise();
  }
}
