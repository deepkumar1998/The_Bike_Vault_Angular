import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VehicleStatusService } from 'src/app/parameters/status-value/vehicle-status.service';
import { VehicleMakeService } from 'src/app/parameters/vehicle-makes/vehicle-make.service';
import { VehicleModelService } from 'src/app/parameters/vehicle-models/vehicle-model.service';
import { VehicleTypeService } from 'src/app/parameters/vehicle-types/vehicle-type.service';
import { EmployeeService } from 'src/app/people/employee/employee.service';
import { VehicleDataService } from './vehicle-data.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehicles-data',
  templateUrl: './vehicles-data.component.html',
  styleUrls: ['./vehicles-data.component.css'],
})
export class VehiclesDataComponent {
  title = 'VehicleS Data';
  data: any[];
  closeResult: string;
  fg: FormGroup;
  deleteId: number;
  editId: number;
  suppliers: any;
  employees: any;
  locations: any;
  vehiclemake: any;
  vehiclemodel: any;
  vehiclestatus: any;
  vehicletype: any;

  constructor(
    private vehicleDataService: VehicleDataService,
    private vehicleTypeService: VehicleTypeService,
    private vehicleMakeService: VehicleMakeService,
    private vehicleModelService: VehicleModelService,
    private vehicleStatusService: VehicleStatusService,
    private employeeService: EmployeeService,
    private modalService: NgbModal
  ) {
    this.fg = new FormGroup({
      name: new FormControl(''),
      employeeid: new FormControl(''),
      locationid: new FormControl(''),
      vehiclemakeid: new FormControl(''),
      vehiclemodelid: new FormControl(''),
      vehiclestatusid: new FormControl(''),
      vehicletypeid: new FormControl(''),
      acquisitionDate: new FormControl(''),
      registrationDate: new FormControl(''),
      description: new FormControl(''),
      fuelCapacity: new FormControl(''),
      netWeight: new FormControl(''),
      power: new FormControl(''),
      remarks: new FormControl(''),
      vehicleNumber: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
    });
  }
  ngOnInit(): void {
    this.load();
  }
  load() {
    this.vehicleDataService.getAll().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });

    this.vehicleMakeService.getAll().subscribe((response) => {
      this.vehiclemake = response;
    });
    this.vehicleModelService.getAll().subscribe((response) => {
      this.vehiclemodel = response;
    });
    this.vehicleStatusService.getAll().subscribe((response) => {
      this.vehiclestatus = response;
    });
    this.vehicleTypeService.getAll().subscribe((response) => {
      this.vehicletype = response;
    });
    this.employeeService.getAll().subscribe((response) => {
      this.employees = response;
    });
  }
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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
    this.vehicleDataService.add(this.fg).subscribe((result) => {
      this.ngOnInit(); //reload the table
    });
    this.fg.reset();
    this.modalService.dismissAll(); //dismiss the modal
  }

  openEdit(targetModal, vehicleData: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'md',
    });
    this.fg.patchValue({
      name:vehicleData.name,
      employeeid: vehicleData.employeeid,
      locationid: vehicleData.locationid,
      vehiclemakeid: vehicleData.vehiclemakeid,
      vehiclemodelid: vehicleData.vehiclemodelid,
      vehiclestatusid: vehicleData.vehiclestatusid,
      vehicletypeid: vehicleData.vehicletypeid,
      acquisitionDate: this.convertToDateOnly(vehicleData.acquisitionDate),
      registrationDate: this.convertToDateOnly(vehicleData.registrationDate),
      description: vehicleData.description,
      fuelCapacity: vehicleData.fuelCapacity,
      netWeight: vehicleData.netWeight,
      power: vehicleData.power,
      remarks: vehicleData.remarks,
      vehicleNumber: vehicleData.vehicleNumber,
      image: vehicleData.image,
      price: vehicleData.price,
    });
    this.editId = vehicleData.id;
  }
  onSave() {
    this.vehicleDataService
      .update(this.editId, this.fg)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
    this.fg.reset();
  }
  openDelete(targetModal, data: any) {
    this.deleteId = data.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg',
    });
  }
  onDelete() {
    this.vehicleDataService.delete(this.deleteId).subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
  }

  convertToDateOnly(isoDate: string): string {
    return isoDate.split('T')[0];
  }
}
