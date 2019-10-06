import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortComponent } from './sort/sort.component'


const routes: Routes = [
{
	path: '',
	pathMatch: 'full',
	component: SortComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
