import { Component } from '@angular/core';
import { SupplierService } from './supplier.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent {
  title="Suppliers Data"
  data: any[];
  closeResult: string;
  fg: FormGroup;
  deleteId:number;
  editId:number;



 

  constructor(
    private supplierService:SupplierService,
    private modalService: NgbModal,
  ) {
    this.fg = new FormGroup({
      address:new FormControl(""),
      city:new FormControl(""),
      country:new FormControl(""),
      email:new FormControl(""),
      name:new FormControl(""),
      phone:new FormControl(""),
      state:new FormControl(""),
      website:new FormControl("")
    });
  }
  ngOnInit(): void {
    this.load();
   
  }
  load() {
    this.supplierService.getAll().subscribe(
      (response)=>{
        
        this.data=response;
        console.log(this.data);
        
      }
    );



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
   this.supplierService.add(this.fg)
      .subscribe((result) => {
        this.ngOnInit(); //reload the table
      });
      this.fg.reset();
    this.modalService.dismissAll(); //dismiss the modal
  }

  openEdit(targetModal, data: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'md',
    });
    this.fg.patchValue({
      address:data.address,
city:data.city,
country:data.country,
email:data.email,
name:data.name,
phone:data.phone,
state:data.state,
website:data.website
      
    });
    this.editId=data.id;
  }
  onSave() {
   
    this.supplierService.update(this.editId, this.fg)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
      this.fg.reset();
  }
  openDelete(targetModal, data:any) {
    this.deleteId = data.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
}
onDelete() {  
  this.supplierService.delete(this.deleteId)
  .subscribe((results) => {
    this.ngOnInit();
    this.modalService.dismissAll();
  });
}

convertToDateOnly(isoDate: string): string {
  return isoDate.split('T')[0];
}

}
