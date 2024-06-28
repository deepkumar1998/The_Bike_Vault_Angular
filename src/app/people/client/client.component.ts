import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientService } from './client.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export class Client {
  constructor() {
    
  }
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  title="Clients Data"
  data: any[];
  closeResult: string;
  fg: FormGroup;
  deleteId:number;
  editId:number;



 

  constructor(
    private clientService:ClientService,
    private modalService: NgbModal,
  ) {
    this.fg = new FormGroup({
      address:new FormControl(""),
      city:new FormControl(""),
      details:new FormControl(""),
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
    this.clientService.getAll().subscribe(
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
   this.clientService.add(this.fg)
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
details:data.details,
email:data.email,
name:data.name,
phone:data.phone,
state:data.state,
website:data.website
      
    });
    this.editId=data.id;
  }
  onSave() {
   
    this.clientService.update(this.editId, this.fg)
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
  this.clientService.delete(this.deleteId)
  .subscribe((results) => {
    this.ngOnInit();
    this.modalService.dismissAll();
  });
}

convertToDateOnly(isoDate: string): string {
  return isoDate.split('T')[0];
}

}
