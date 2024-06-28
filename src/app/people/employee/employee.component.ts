import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeTypeService } from 'src/app/hr-settings/employee-type/employee-type.service';
import { JobTitleService } from 'src/app/hr-settings/job-titles/job-title.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title="Suppliers Data"
  data: any[];
  closeResult: string;
  fg: FormGroup;
  deleteId:number;
  editId:number;
  employeeType:any;
  jobTitle:any;



 

  constructor(
    private employeeService:EmployeeService,
    private employeeTypeService:EmployeeTypeService,
    private jobTitleService:JobTitleService,
    private modalService: NgbModal,
  ) {
    this.fg = new FormGroup({
      gender:new FormControl(""),
      dateOfBirth:new FormControl(""),
      employeetypeid:new FormControl(""),
      hideDate:new FormControl(""),
      jobtitleid:new FormControl(""),
      address:new FormControl(""),
      city:new FormControl(""),
      country:new FormControl(""),
      email:new FormControl(""),
      firstname:new FormControl(""),
      initials:new FormControl(""),
      lastname:new FormControl(""),
      maritalStatus:new FormControl(""),
      phone:new FormControl(""),
      photo:new FormControl(""),
      state:new FormControl(""),
      username:new FormControl(""),
    });
  }
  ngOnInit(): void {
    this.load();
   
  }
  load() {
    this.employeeService.getAll().subscribe(
      (response)=>{
        
        this.data=response;
        console.log(this.data);
        
      }
    );
    this.employeeTypeService.getAll().subscribe(
      (response)=>{
        
        this.employeeType=response;
        console.log(this.data);
        
      }
    );
    this.jobTitleService.getAll().subscribe(
      (response)=>{
        
        this.jobTitle=response;
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
   this.employeeService.add(this.fg)
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
      gender:data.gender,
      dateOfBirth:data.dateOfBirth,
      employeetypeid:data.employeetypeid,
      hideDate:data.hireDate,
      jobtitleid:data.jobtitleid,
      address:data.address,
      city:data.city,
      country:data.country,
      email:data.email,
      firstname:data.firstname,
      initials:data.initials,
      lastname:data.lastname,
      maritalStatus:data.maritalStatus,
      phone:data.phone,
      photo:data.photo,
      state:data.state,
      title:data.title,
      username:data.username
      
    });
    this.editId=data.id;
  }
  onSave() {
   
    this.employeeService.update(this.editId, this.fg)
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
  this.employeeService.delete(this.deleteId)
  .subscribe((results) => {
    this.ngOnInit();
    this.modalService.dismissAll();
  });
}

convertToDateOnly(isoDate: string): string {
  return isoDate.split('T')[0];
}
}
