import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchRepositoryComponent } from './search-repository/search-repository.component';
import { SessionService } from './servises/session.service';
import { GithubService } from './servises/github.service';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

@NgModule({
   declarations: [
      AppComponent,
      SearchRepositoryComponent,
      BookmarksComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      SessionService,
      GithubService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
