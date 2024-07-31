import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PaginationComponent } from './pagination/pagination.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageModule } from 'ng-zorro-antd/message';

const NZ_MODULES = [
  NzMenuModule,
  NzIconModule,
  NzEmptyModule,
  NzDividerModule,
  NzButtonModule,
  NzLayoutModule,
  NzBreadCrumbModule,
  NzTableModule,
  NzCollapseModule,
  NzFormModule,
  NzInputModule,
  NzResultModule,
  NzModalModule,
  NzSelectModule,
  NzPaginationModule,
  NzSpinModule,
  NzMessageModule,
];

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [CommonModule, RouterModule, ...NZ_MODULES],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PaginationComponent,
    ...NZ_MODULES,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class ShareModule {}
