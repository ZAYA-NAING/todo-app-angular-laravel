import { NgModule } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  MenuFoldOutline,
  MenuUnfoldOutline,
} from '@ant-design/icons-angular/icons';

import { IconDefinition } from '@ant-design/icons-angular';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CoreModule } from '../core/core.module';
import { ShareModule } from '../share/share.module';

const icons: IconDefinition[] = [MenuFoldOutline, MenuUnfoldOutline];

@NgModule({
  declarations: [MainComponent],
  imports: [
    MainRoutingModule,
    ShareModule,
    NzIconModule.forChild(icons),
    CoreModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
