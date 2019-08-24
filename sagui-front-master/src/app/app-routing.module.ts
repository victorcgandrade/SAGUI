import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
