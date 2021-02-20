import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticComponent } from './staticcontent/static.component';
import { DynamicapiComponent } from './dynamicontent/dynamicapi.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: 'content', component: ContentComponent },
  { path: 'static', component: StaticComponent },
  { path: 'dynamic', component: DynamicapiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
