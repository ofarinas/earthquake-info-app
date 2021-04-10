import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HomePageComponent} from './components/home-page/home-page.component';

@NgModule({

  declarations: [HomePageComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [MatToolbarModule, MatIconModule, HomePageComponent],
})
export class UiSharedModule {
}
