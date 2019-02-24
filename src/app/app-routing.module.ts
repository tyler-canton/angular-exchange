import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// pathMatch is designed to ensure a unique root
const appRoutes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
