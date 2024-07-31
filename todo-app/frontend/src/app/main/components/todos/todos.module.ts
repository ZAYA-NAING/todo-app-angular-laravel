import { NgModule } from '@angular/core';
import { ShareModule } from '../../../share/share.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoEditableFormComponent } from './todo-editable-form/todo-editable-form.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoSearchComponent,
    TodoEditableFormComponent,
  ],
  imports: [ShareModule],
  exports: [TodoListComponent, TodoSearchComponent],
})
export class TodosModule {}
