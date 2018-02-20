import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagesComponent } from './components/messages/messages.component';


const routes: Routes = [
  { path: 'messages', component: MessagesComponent, outlet: 'popup' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }