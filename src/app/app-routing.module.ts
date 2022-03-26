import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'details', loadChildren: () => import('./page/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit', loadChildren: () => import('./page/edit/edit.module').then(m => m.EditModule) },
  { path: 'list', loadChildren: () => import('./page/list/list.module').then(m => m.ListModule) },
  { path: 'new', loadChildren: () => import('./page/new/new.module').then(m => m.NewModule) },
  { path: '**', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
