import { Product } from './../models/product';
import { FormsModule } from '@angular/forms';
import { CompanyService } from './../services/company.service';
import { Company } from './../models/company';
import { Component, OnInit } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  prodEditId: Number;
  companies: Company[];
  selected: any;
  curr: any;
  prod: any;
  com: any;
  comp: string;
  pId: number;
  pName: String;
  price: Number;
  show:boolean = false;
  buttonName:any = 'Show';
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
      // console.log(this.companies);
    })
  }

  onOptionsSelected(): any {
    this.curr = this.companies.filter(t=>t.name ==this.selected);
  }

  deleteProduct(com,prod) {
    for(let i=0;i<com.products.length;i++){
      // console.log(com.products[i].id);
      // console.log(i)
      if(com.products[i].id==prod.id){
        com.products.splice(i, 1);
        break;
      }
    }
    this.companyService.updateCompanyById(com,com._id).subscribe(response=>{
      alert('Product is Deleted')
    },error=>{
      alert('Error')
    });
  }


  addProduct(com) {
    const product = new Product(this.pId,this.pName,this.price);
    com.products.push(product)
    this.companyService.updateCompanyById(com,com._id).subscribe(response=>{
      alert('Product is Added')
    },error=>{
      alert('Error')
    });
  }

  editCompany(com) {
    
    com.name = this.comp
    this.companyService.updateCompanyById(com,com._id).subscribe(response=>{
      alert('Company Name is edited')
    },error=>{
      alert('Error')
    });
  }

  deleteCompany(com) {
    this.companyService.deleteCompanyById(com._id).subscribe(response=>{
      alert('Company is deleted')
    },error=>{
      alert('Error')
    });
  }

  addCompany() {
    const company = new Company(this.comp,[]);
    this.companyService.addCompany(company).subscribe(response=> {
      alert('Company is added')
    },error=>{
      alert('Error')
    });
  }

  toggle(com,prod) {
    this.show = !this.show;
    
    this.deleteProduct(com,prod)
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
}

