import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/father', pathMatch: 'full'},
  { path: 'father', loadChildren: () => import('../modules/father.module').then(m => m.FatherModule) },
  { path: 'mother', loadChildren: () => import('../modules/mother.module').then(m => m.MotherModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
