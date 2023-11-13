import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


export class Country {
  constructor(
    public id: number,
    public code: string,
    public capital: string,
    public description: string,
    public nationality: string,
    public continent: string
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
  country: Country;
  editForm: FormGroup;
  deleteId:number;
 

  constructor(
    private httpClient: HttpClient,
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
    this.httpClient
      .get<any>('http://127.0.0.1:8080/country/view')
      .subscribe((response) => {
        console.log(response);
        this.countries = response;
      });
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
    const url = 'http://127.0.0.1:8080/country/add';
    this.httpClient.post(url, f.value)
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
    const editURL = `http://127.0.0.1:8080/country/update/${this.editForm.value.id}` ;
    console.log(this.editForm.value);
    this.httpClient.put(editURL, this.editForm.value)
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
    const deleteURL = 'http://127.0.0.1:8080/country/delete/' + this.deleteId;
  
    this.httpClient.delete(deleteURL)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }
  


}
