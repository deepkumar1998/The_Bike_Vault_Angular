import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Country } from '../countries/countries.component';

export class State {
  constructor(
    public id: number,
    public name: string,
    public capital: string,
    public country:Country,
    public code: string,
    public countryid: number,
    public details: string
  ) {}
}

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css'],
})
export class StatesComponent implements OnInit {
  states: State[];
  countries: Country[]; // Add this for storing country data
  closeResult: string;
  editForm:FormGroup
  deleteId: number;

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCountries(); // Fetch countries data
    this.getStates();
    this.editForm = this.fb.group({
      id: [''],
      name: [''],
      capital: [''],
      country:[''],
      code: [''],
      countryid:[''],
      details: ['']
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

  getStates() {
    this.httpClient
      .get<any>('http://127.0.0.1:8080/state/view')
      .subscribe((response) => {
        console.log(response);
        this.states = response;
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
  onSubmit(f: NgForm) {
    const url = 'http://127.0.0.1:8080/state/add';
    this.httpClient.post(url, f.value)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }  

  openDetails(targetModal, state: State) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    document.getElementById('cd').setAttribute('value', state.code);
    document.getElementById('cap').setAttribute('value', state.capital);
    document.getElementById('na').setAttribute('value', state.name);
    document.getElementById('national').setAttribute('value', state.country.nationality);
    document.getElementById('det').setAttribute('value', state.details);
  }

  openEdit(targetModal, state: State) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    this.editForm.patchValue({
      id: state.id,
      code: state.code,
      capital: state.capital,
      name: state.name,
      state: state.country,
      details: state.details,
    });
  }

  onSave() {
    const editURL = `http://127.0.0.1:8080/state/update/${this.editForm.value.id}` ;
    console.log(this.editForm.value);
    this.httpClient.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }

  
  openDelete(targetModal, state:State) {
    this.deleteId = state.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    const deleteURL = 'http://127.0.0.1:8080/state/delete/' + this.deleteId;
  
    this.httpClient.delete(deleteURL)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }
  


  
}
