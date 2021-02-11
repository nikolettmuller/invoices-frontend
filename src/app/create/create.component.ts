import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InvoiceService } from '../core/invoice.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup = this.fb.group({
    customerName: ['', Validators.required],
  })
  constructor(private createService: InvoiceService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

 async submit(): Promise<void> {
    if(!this.form.valid){
      return ;
    }else{
     const success = await this.createService.createAnInvoice(this.form.value.customerName);
      this.router.navigate(['/invoice'])
    }
  }
  public back() {
    this.router.navigate(['/invoice']);
  }

}
