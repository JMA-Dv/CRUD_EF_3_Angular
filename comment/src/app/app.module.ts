import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WatchCommentsComponent } from './components/watch-comments/watch-comments.component';

import {HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddCommentComponent,
    ListCommentsComponent,
    NavbarComponent,
    WatchCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
