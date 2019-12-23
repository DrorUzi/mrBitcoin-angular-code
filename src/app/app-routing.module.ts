import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { ContactsPageComponent } from './contact/contacts-page/contacts-page.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'contact',
    component: ContactsPageComponent,
    // children:[{
    //   path:'edit',
    //   component: ContactEditComponent
    // }]
   
  },
  {
    path:'contact/edit',
      component: ContactEditComponent
  },
  {
    path:'contact/edit/:id',
    component:ContactEditComponent
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
