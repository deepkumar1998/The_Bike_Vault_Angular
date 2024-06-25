import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { State } from '../states/states.component';
import { CountryService } from './country.service';



export class Country {
  constructor(
    public id: number,
    public code: string,
    public capital: string,
    public description: string,
    public nationality: string,
    public continent: string,
    public state:State[]
  ) {}
}
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: Country[];
  closeResult: string;
  editForm: FormGroup;
  deleteId:number;
 

  constructor(
    private countryService:CountryService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getCountries();
    this.editForm = this.fb.group({
      id: [''],
      code: [''],
      capital: [''],
      nationality: [''],
      continent: [''],
      description: [''],
    });
  }
  getCountries() {
    this.countryService.getAll().subscribe(
      (response)=>{
        this.countries=response;
      }
    )
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSubmit(f: NgForm) {
   this.countryService.add(f)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  openDetails(targetModal, country: Country) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    document.getElementById('cd').setAttribute('value', country.code);
    document.getElementById('cap').setAttribute('value', country.capital);
    document.getElementById('cont').setAttribute('value', country.continent);
    document
      .getElementById('national')
      .setAttribute('value', country.nationality);
    document.getElementById('desc').setAttribute('value', country.description);
  }

  openEdit(targetModal, country: Country) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    this.editForm.patchValue({
      id: country.id,
      code: country.code,
      capital: country.capital,
      continent: country.continent,
      nationality: country.nationality,
      description: country.description,
    });
  }
  onSave() {
   
    this.countryService.update(this.editForm.value.id, this.editForm)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
  openDelete(targetModal, country:Country) {
    this.deleteId = country.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {  
    this.countryService.delete(this.deleteId)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }
  


}
