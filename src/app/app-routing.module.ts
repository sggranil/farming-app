import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EquipmentsComponent } from './home/equipments/equipments.component';
import { RequestComponent } from './home/request/request.component';
import { InventoryComponent } from './home/inventory/inventory.component';

const routes: Routes = [
  { path: '', redirectTo: 'equipments', pathMatch: 'full' },

  { path: '', component: HomeComponent, children: [
    { path: 'equipments', component: EquipmentsComponent },
    { path: 'inventory', component: InventoryComponent },
    { path: 'request', component: RequestComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
