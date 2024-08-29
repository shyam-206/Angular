import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './pages/button/button.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { BordersComponent } from './pages/borders/borders.component';
import { AnimationsComponent } from './pages/animations/animations.component';
import { OthersComponent } from './pages/others/others.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { TablesComponent } from './pages/tables/tables.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

const routes: Routes = [
    { path : '' ,component : HomeComponent },
     {path : 'home' ,component : HomeComponent},
    { path : 'components/button' ,component : ButtonComponent},
    { path : 'components/cards' ,component : CardComponent},
    { path : 'utilities/colors' ,component : ColorsComponent},
    { path  : 'utilities/borders' , component : BordersComponent},
    { path : 'utilities/animations' , component : AnimationsComponent},
    { path : 'utilities/others' , component : OthersComponent} ,
    { path : 'charts' , component : ChartsComponent},
    { path : 'tables' , component : TablesComponent} ,
    { path : 'login' ,component : LoginComponent},
    { path : 'register' , component : RegisterComponent },
    { path : 'forgetpassword' , component : ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
