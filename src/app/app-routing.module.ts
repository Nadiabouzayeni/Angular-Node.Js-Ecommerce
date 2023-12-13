import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { IndexComponent } from './products/index/index.component';

const routes: Routes = [
  { path: 'products', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'scategories', component: IndexComponent, canActivate: [AuthGuard] }

  // ... Autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }
