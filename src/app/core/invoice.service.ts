import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from './invoice';

@Injectable({
    providedIn: 'root'
  })

export class InvoiceService{
    constructor (private httpClient: HttpClient ){

    }

    async getAllInvoices(): Promise<Invoice[]>{
        const invoices = await this.httpClient.get<Invoice[]>('/api/invoices/invoice').toPromise();
        return invoices;
    }

    async createAnInvoice(customerName: string): Promise<boolean>{
        const success = this.httpClient.post<boolean>('/api/invoices/invoice', { 'customerName': customerName }).toPromise();
        return success;
    }
}