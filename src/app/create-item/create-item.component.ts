import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoicItemService } from '../core/invoiceitem.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  id: number;
  form: FormGroup = this.fb.group({
    productName: ['', Validators.required],
    unitPrice: ['', Validators.required],
    quantity: ['', Validators.required]
  })
  constructor(private createService: InvoicItemService, private router: Router, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id');
    this.id = +id;
  }

  async submitItem(): Promise<void> {
    if(!this.form.valid){
      return ;
    }else{
     const success = await this.createService.create(this.form.value.productName, this.form.value.unitPrice, this.form.value.quantity, this.id);
      this.router.navigate(['/item',this.id])
    }
  }
  public back() {
    this.router.navigate(['/item/',this.id]);
  }
}
