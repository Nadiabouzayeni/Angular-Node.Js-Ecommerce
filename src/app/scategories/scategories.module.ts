import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScategoriesRoutingModule } from './scategories-routing.module';
import { FilePondModule } from 'ngx-filepond';



import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CloudinaryModule } from '@cloudinary/ng';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditScatComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ViewCScatomponent } from './view/view.component';
import { ScategoriesComponent } from './index/index.component';
@NgModule({
  declarations: [
    ScategoriesComponent,
    EditScatComponent,
    CreateComponent,
    ViewCScatomponent,
  ],
  imports: [
    CommonModule,
    ScategoriesRoutingModule,
    FilePondModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CloudinaryModule,
    MatPaginatorModule,
    MatTableModule,
   BrowserAnimationsModule,
  ]
 

 

})
export class ScategoriesModule { }
