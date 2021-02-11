import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './invoiceitem';

@Injectable({
    providedIn: 'root'
  })

export class InvoicItemService{
    constructor (private httpClient: HttpClient ){

    }

    async getAllItems(id: number): Promise<Item[]>{
        const invoices = await this.httpClient.get<Item[]>('/api/invoices/item/' + id).toPromise();
        return invoices;
    }

    async create(productName: string, unitPrice: number, quantity: number, invoiceId: number): Promise<boolean> {
        const success = this.httpClient.post<boolean>('/api/invoices/item', { 'productName': productName, 'unitPrice': unitPrice, 'quantity': quantity, 'invoiceId': invoiceId }).toPromise();
        return success;
    }
}


