import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROOT_PATH, RoutesConstant } from './core/constants/route.constant';

const routes: Routes = [
  {
    path: ROOT_PATH,
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    data: RoutesConstant.MAIN.data,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
