import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../core/invoiceitem';
import { InvoicItemService } from '../core/invoiceitem.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, private itemservice: InvoicItemService, private router: Router) { 

  }
  items: Item[] = [];
  async ngOnInit(): Promise<void> {
    const id= this.route.snapshot.paramMap.get('id');
    const idn: number = +id;
    this.id = +id;
    this.items = await this.itemservice.getAllItems(idn);
  }
  public create() {
    this.router.navigate(['/create', this.id]);
  }
  public back() {
    this.router.navigate(['/invoice']);
  }

}
