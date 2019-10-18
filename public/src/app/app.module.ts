import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorComponent } from './author/author.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
// import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EditComponent,
    NewComponent,
    NotFoundComponent,
    AuthorComponent,
    // DeleteComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
