import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VehicleMakeService } from './vehicle-make.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicle-makes',
  templateUrl: './vehicle-makes.component.html',
  styleUrls: ['./vehicle-makes.component.css']
})
export class VehicleMakesComponent {
  title="Vehicle Make"
  data: any[];
  closeResult: string;
  fg: FormGroup;
  deleteId:number;
  editId:number;
 

  constructor(
    private vehicleMakeService:VehicleMakeService,
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
    this.vehicleMakeService.getAll().subscribe(
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
   this.vehicleMakeService.add(this.fg)
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
   
    this.vehicleMakeService.update(this.editId, this.fg)
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
  this.vehicleMakeService.delete(this.deleteId)
  .subscribe((results) => {
    this.ngOnInit();
    this.modalService.dismissAll();
  });
}
}
