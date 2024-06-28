import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/people/client/client.service';
import { VehicleHireService } from '../hires/vehicle-hire.service';
import { VehicleDataService } from '../vehicles-data/vehicle-data.service';
import { SupplierService } from 'src/app/people/suppliers/supplier.service';
import { VehicleMaintenanceService } from './vehicle-maintenance.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent {
  title="Vehicle Maintenance"
  data: any[];
  closeResult: string;
  fg: FormGroup;
  deleteId:number;
  editId:number;
  vehicles:any;
  suppliers:any;


 

  constructor(
    private vehicleMaintenanceService:VehicleMaintenanceService,
    private vehicleService:VehicleDataService,
    private supplierService:SupplierService,
    private modalService: NgbModal,
  ) {
    this.fg = new FormGroup({
      vehicleid:new FormControl(""),
      startDate:new FormControl(""),
      remarks:new FormControl(""),
      endDate:new FormControl(""),
      supplierid:new FormControl(""),
      price:new FormControl("")
    });
  }
  ngOnInit(): void {
    this.load();
   
  }
  load() {
    this.vehicleMaintenanceService.getAll().subscribe(
      (response)=>{
        
        this.data=response;
        console.log(this.data);
        
      }
    );

    this.vehicleService.getAll().subscribe(
      (response)=>{
        this.vehicles=response;
        console.log(this.vehicles);
        
      }
    );
    this.supplierService.getAll().subscribe(
      (response)=>{
        this.suppliers=response;

       
        
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
   this.vehicleMaintenanceService.add(this.fg)
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
      vehicleid:data.vehicleid,
startDate:this.convertToDateOnly(data.startDate),
remarks:data.remarks,
endDate:this.convertToDateOnly(data.endDate),
supplierid:data.supplierid,
price:data.price
      
    });
    this.editId=data.id;
  }
  onSave() {
   
    this.vehicleMaintenanceService.update(this.editId, this.fg)
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
  this.vehicleMaintenanceService.delete(this.deleteId)
  .subscribe((results) => {
    this.ngOnInit();
    this.modalService.dismissAll();
  });
}

convertToDateOnly(isoDate: string): string {
  return isoDate.split('T')[0];
}

}
