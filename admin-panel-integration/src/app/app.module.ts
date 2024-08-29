import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ColorComponentComponent } from './components/color-component/color-component.component';
import { CardComponent } from './pages/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './pages/button/button.component';
import { RouterModule } from '@angular/router';
import { ColorsComponent } from './pages/colors/colors.component';
import { BordersComponent } from './pages/borders/borders.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { OthersComponent } from './pages/others/others.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { TablesComponent } from './pages/tables/tables.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ColorComponentComponent,
    CardComponent,
    HomeComponent,
    ButtonComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OthersComponent,
    ChartsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    BlankPageComponent,
    ForgetPasswordComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports : [ RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
