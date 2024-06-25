import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { VehicleStatusService } from './vehicle-status.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Country } from 'src/app/globals/countries/countries.component';


@Component({
  selector: 'app-status-value',
  templateUrl: './status-value.component.html',
  styleUrls: ['./status-value.component.css']
})
export class StatusValueComponent {
  title="Vahicle Status"
  data: any[];
  closeResult: string;
  fg: FormGroup;
  deleteId:number;
  editId:number;
 

  constructor(
    private statusService:VehicleStatusService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.load();
    this.fg = new FormGroup({
      details:new FormControl(""),
      description: new FormControl(""),
    });
  }
  load() {
    this.statusService.getAll().subscribe(
      (response)=>{
        this.data=response;
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
  onSubmit() {
   this.statusService.add(this.fg)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
    this.modalService.dismissAll(); //dismiss the modal
  }

  openEdit(targetModal, data: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    this.fg.patchValue({
      details:data.details,
      description: data.description,
    });
    this.editId=data.id;
  }
  onSave() {
   
    this.statusService.update(this.editId, this.fg)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
  openDelete(targetModal, data:any) {
    this.deleteId = data.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
}
onDelete() {  
  this.statusService.delete(this.deleteId)
  .subscribe((results) => {
    this.ngOnInit();
    this.modalService.dismissAll();
  });
}
}