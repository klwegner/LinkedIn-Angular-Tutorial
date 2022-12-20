import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MediaItemComponent } from '../app/media-item/media-item.component';
import { MediaItemListComponent } from '../app/media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { lookupListToken, lookupLists } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app-routing';
import { CategoryListPipe } from './category-list.pipe';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    CategoryListComponent,
    FavoriteDirective,
    CategoryListPipe
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}