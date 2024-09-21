import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserComponent } from './components/user/user.component';
import { MessageComponent } from './components/message/message.component';
import { ShirtComponent } from './components/shirt/shirt/shirt.component';
import { AddshirtComponent } from './components/shirt/addshirt/addshirt.component';
import { UpdateShirtComponent } from './components/shirt/update-shirt/update-shirt.component';
import { LoginComponent } from './components/login/login.component';
import { TrousersComponent } from './components/trousers/trousers/trousers.component';
import { AddTrousersComponent } from './components/trousers/add-trousers/add-trousers.component';
import { UpdateTrousesComponent } from './components/trousers/update-trouses/update-trouses.component';
import { ShoesComponent } from './components/shoes/shoes/shoes.component';
import { AddShoesComponent } from './components/shoes/add-shoes/add-shoes.component';
import { UpdateShoesComponent } from './components/shoes/update-shoes/update-shoes.component';
import { SlidesComponent } from './components/slides/slides/slides.component';
import { AddSlidesComponent } from './components/slides/add-slides/add-slides.component';
import { UpdateSlidesComponent } from './components/slides/update-slides/update-slides.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { HomeComponent } from './customer/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "userModel", redirectTo: "/user", pathMatch: 'full' },
  { path: "user", component: UserComponent },
  { path: "user/Add", component: UserAddComponent },
  { path: "user/Update/:id", component: UserUpdateComponent },
  { path: "user/edit/:id", component: EditUserComponent },
  { path: "msg", component: MessageComponent },
  { path: "shirtModel", redirectTo: "/shirt", pathMatch: 'full' },
  { path: "shirt", component: ShirtComponent },
  { path: "shirt/add", component: AddshirtComponent },
  { path: "shirt/update/:id", component: UpdateShirtComponent },
  { path: 'trouserModel', redirectTo: '/trousers', pathMatch: 'full' },
  { path: 'trousers', component: TrousersComponent },
  { path: 'trousers/add', component: AddTrousersComponent },
  { path: 'trousers/update/:id', component: UpdateTrousesComponent },
  { path: 'shoesModel', redirectTo: '/shoes', pathMatch: 'full' },
  { path: 'shoes', component: ShoesComponent },
  { path: 'shoes/add', component: AddShoesComponent },
  { path: 'shoes/update/:id', component: UpdateShoesComponent },
  { path: 'slidesModel', redirectTo: '/slides', pathMatch: 'full' },
  { path: 'slides', component: SlidesComponent },
  { path: 'slides/add', component: AddSlidesComponent },
  { path: 'slides/update/:id', component: UpdateSlidesComponent },
  { path: 'customerModel', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
