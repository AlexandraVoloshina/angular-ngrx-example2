import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { reducers } from './store/reducers';
import { ArticleEffects } from './store/articles.effects';
import { ArticleService } from './services/article.service';

//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ArticleEffects]),
    InMemoryWebApiModule.forRoot(TestData)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent, ArticleComponent]
})
export class AppModule { }
