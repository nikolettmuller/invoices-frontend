import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../core/invoice';
import { InvoiceService } from '../core/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit{
  invoices: Invoice[] = [];
  constructor (private invoiceService: InvoiceService, private router: Router){

  }

 async ngOnInit(): Promise<void> {
   this.invoices = await this.invoiceService.getAllInvoices();
  }

  public open(id: number) {
    this.router.navigate(['/item', id]);
  }

  public create() {
    this.router.navigate(['/create']);
  }

}
