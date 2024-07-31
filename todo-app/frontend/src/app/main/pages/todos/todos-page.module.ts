import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosIndexComponent } from './todos-index/todos-index.component';
import { TodosPageRoutingModule } from './todos-page-routing.module';
import { TodosModule } from '../../components/todos/todos.module';
import { ShareModule } from '../../../share/share.module';

@NgModule({
  declarations: [TodosIndexComponent],
  imports: [CommonModule, TodosPageRoutingModule, TodosModule, ShareModule],
})
export class TodosPageModule {}
