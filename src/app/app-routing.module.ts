import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { CreateComponent } from './create/create.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [ 
  { 
    path: "item/:id", 
    component: ItemComponent
  },
  {
    path: "invoice",
    component: InvoiceComponent
  },

  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "create/:id",
    component: CreateItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
