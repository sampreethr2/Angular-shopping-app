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
  companies: Company[];
  selected: any;
  curr: any;
  prod: any;
  com: any;
  comp: string;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
      console.log(this.companies);
    })
  }

  onOptionsSelected(): any {
    this.curr = this.companies.filter(t=>t.name ==this.selected);
  }

  deleteProduct(prod) {
    console.log("delete");
    console.log(prod);
  }

  editProduct(prod) {
    console.log("edit")
    console.log(prod);
  }

  editCompany(com) {
    console.log("company edit")
    console.log(com.name)
  }

  deleteCompany(com) {
    // console.log("company delete")
    // console.log(com._id)
    this.companyService.deleteCompanyById(com._id).subscribe(response=>{
      alert('Company is deleted')
    },error=>{
      alert('Error')
    });
  }

  addCompany() {
    console.log(this.comp)
    const company = new Company(NONE_TYPE);
    company.name = this.comp
    console.log(company.name)
  }
}

