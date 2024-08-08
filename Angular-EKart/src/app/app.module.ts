import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SearchComponent } from './container/product-list/search/search.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { CounterComponent } from './input-output/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    SearchComponent,
    ContainerComponent,
    FilterComponent,
    InputOutputComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
