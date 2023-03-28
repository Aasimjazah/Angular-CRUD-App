import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './MyModules/form/form.component';
import { ShowBookComponent } from './MyModules/show-book/show-book.component';
import { UpdateFormComponent } from './MyModules/update-form/update-form.component';

const routes: Routes = [
  {
    path:"ShowBook",
    component:ShowBookComponent,
    pathMatch:'full'
  },
  {
    path:"UpdateForm",
    component:UpdateFormComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
