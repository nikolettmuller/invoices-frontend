import { Component, OnInit } from '@angular/core';
import { Invoice } from './core/invoice';
import { InvoiceService } from './core/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'invoice-frontend';
}
