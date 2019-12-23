import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { ContactService } from './services/contact.service';
import { ContactsPageComponent } from './contact/contacts-page/contacts-page.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactPreviewComponent } from './contact/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { MoveListComponent } from './move-list/move-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainHeaderComponent,
    ContactsPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    MoveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
