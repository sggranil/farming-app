import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModules } from './material.module';

import { HomeComponent } from './home/home.component';
import { EquipmentsComponent } from './home/equipments/equipments.component';
import { InventoryComponent } from './home/inventory/inventory.component';
import { RequestComponent } from './home/request/request.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquipmentsComponent,
    InventoryComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
