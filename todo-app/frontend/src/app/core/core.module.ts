import { NgModule } from '@angular/core';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShareModule } from '../share/share.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [SideMenuComponent, PageNotFoundComponent, SpinnerComponent],
  imports: [ShareModule],
  exports: [SideMenuComponent],
})
export class CoreModule {}
