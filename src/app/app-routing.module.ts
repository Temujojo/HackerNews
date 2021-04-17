import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'story', pathMatch: 'full'
  },{
  path: 'story',
  component: StoryComponent
},{
  path:'**',
  redirectTo: '404'
},
{
  path: '404',
  component: Error404Component
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
