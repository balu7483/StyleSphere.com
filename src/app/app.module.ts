import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAddComponent } from './components/user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { MessageComponent } from './components/message/message.component';
import { ShirtComponent } from './components/shirt/shirt/shirt.component';
import { AddshirtComponent } from './components/shirt/addshirt/addshirt.component';
import { UpdateShirtComponent } from './components/shirt/update-shirt/update-shirt.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    UserAddComponent,
    UserUpdateComponent,
    MessageComponent,
    ShirtComponent,
    AddshirtComponent,
    UpdateShirtComponent,
    TrousersComponent,
    AddTrousersComponent,
    UpdateTrousesComponent,
    ShoesComponent,
    AddShoesComponent,
    UpdateShoesComponent,
    SlidesComponent,
    AddSlidesComponent,
    UpdateSlidesComponent,
    EditUserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
