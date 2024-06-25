import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { VehicleTypeService } from './vehicle-type.service';

@Component({
  selector: 'app-vehicle-types',
  templateUrl: './vehicle-types.component.html',
  styleUrls: ['./vehicle-types.component.css']
})
export class VehicleTypesComponent {
  title="Vehicle Type"
  data: any[];
  closeResult: string;
  fg: FormGroup;
  deleteId:number;
  editId:number;
 

  constructor(
    private vehicleTypeService:VehicleTypeService,
    private modalService: NgbModal,
  ) {}
  ngOnInit(): void {
    this.load();
    this.fg = new FormGroup({
      details:new FormControl(""),
      description: new FormControl(""),
    });
  }
  load() {
    this.vehicleTypeService.getAll().subscribe(
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
   this.vehicleTypeService.add(this.fg)
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
   
    this.vehicleTypeService.update(this.editId, this.fg)
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
  this.vehicleTypeService.delete(this.deleteId)
  .subscribe((results) => {
    this.ngOnInit();
    this.modalService.dismissAll();
  });
}

}
