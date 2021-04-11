import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableComponent} from "./table/table.component";
import {HomeComponent} from "./home/home.component";
import {LinkComponent} from "./link/link.component";

const routes: Routes = [
  {path: 'refresh', component: TableComponent},
  {path: 'home', component: HomeComponent},
  {path:'link', component: LinkComponent},
  {path:'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
