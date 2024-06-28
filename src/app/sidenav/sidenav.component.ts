import { Component, EventEmitter, HostListener, OnInit, Output, inject } from '@angular/core';
import { adminData, userData } from './nav-data';
import { INavbarData, fadeInOut } from './helper';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { AuthService } from '../auth/auth.service';
interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations:[
    fadeInOut,
      trigger('rotate',[
        transition(':enter',[
          animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset:'0'}),
            style({transform: 'rotate(2turn)', offset:'1'})
          ]))
        ])
      ])  
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed=false;
  screenWidth=0;
  navData:any;
  multiple:boolean=false;
  constructor(private authService:AuthService){

  }

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
    }
  }
  

  ngOnInit():void{
    this.screenWidth=window.innerWidth;
    if (this.authService.getUserRole()=="ADMIN") {
      this.navData=adminData;
    }
    else if(this.authService.getUserRole()=="USER"){
      this.navData=userData;
    }
  }

  toogleCollapse():void{
    this.collapsed=!this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});
  }

  closeSidenav():void{
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed: this.collapsed,screenWidth:this.screenWidth});

  }

  handleClick(item:INavbarData): void{
    if(!this.multiple){
      for(let modelItem of this.navData){
      if(item !==modelItem && modelItem.expanded){
        modelItem.expanded=false;
      }
      }
    }
    item.expanded=!item.expanded
  }
}
