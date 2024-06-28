import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { VehicleHireService } from './vehicle-hire.service';
import { VehicleDataService } from '../vehicles-data/vehicle-data.service';
import { ClientService } from 'src/app/people/client/client.service';

@Component({
  selector: 'app-hires',
  templateUrl: './hires.component.html',
  styleUrls: ['./hires.component.css']
})
export class HiresComponent {
  title="Vehicle Hire"
  data: any[];
  closeResult: string;
  fg: FormGroup;
  deleteId:number;
  editId:number;
  vehicles:any;
  clients:any;


 

  constructor(
    private vehicleHireService:VehicleHireService,
    private vehicleService:VehicleDataService,
    private clientService:ClientService,
    private modalService: NgbModal,
  ) {
    this.fg = new FormGroup({
      vehicleid:new FormControl(""),
      dateOut:new FormControl(""),
      dateIn:new FormControl(""),
      clientid:new FormControl(""),
      price:new FormControl(""),
      remarks:new FormControl("")
    });
  }
  ngOnInit(): void {
    this.load();
   
  }
  load() {
    this.vehicleHireService.getAll().subscribe(
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
    this.clientService.getAll().subscribe(
      (response)=>{
        this.clients=response;

        console.log(this.clients);
        
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
   this.vehicleHireService.add(this.fg)
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
      clientid:data.client.id,
      dateOut:this.convertToDateOnly(data.dateOut),
      dateIn:this.convertToDateOnly(data.dateIn),
      price:data.price,
      remarks:data.remarks
      
    });
    this.editId=data.id;
  }
  onSave() {
   
    this.vehicleHireService.update(this.editId, this.fg)
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
  this.vehicleHireService.delete(this.deleteId)
  .subscribe((results) => {
    this.ngOnInit();
    this.modalService.dismissAll();
  });
}

convertToDateOnly(isoDate: string): string {
  return isoDate.split('T')[0];
}
}
