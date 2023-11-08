import { INavbarData } from "./helper";

export const navbarData:INavbarData[]=[
    {
        routeLink:'dashboard',
        icon:'fal fa-home',
        label:'Dashboard'
    },

    {
        routeLink:'vehicles',
        icon:'fal fa-motorcycle',
        label:'Vehicles',
        items: [
            {
                routeLink:'vehicles/data',
                label:'Vehicle Data'
            },
            {
                routeLink:'vehicles/maintenance',
                label:'Maintenance'
            },
            {
                routeLink:'vehicles/movements',
                label:'Movements'
            },
            {
                routeLink:'vehicles/hires',
                label:'Hires'
            }

]},

    {
        routeLink:'parameters',
        icon:'fal fa-gears',
        label:'Parameters',
        items: [
            {
                routeLink:'parameters/vehicleMakes',
                label:'Vehicle Makes'
            },
            {
                routeLink:'parameters/vehicleModels',
                label:'Vehicle Models'
            },
            {
                routeLink:'parameters/vehicleTypes',
                label:'Vehicle Types'
            },
            {
                routeLink:'parameters/status',
                label:'Status Values'
            },       
]},
    {
        routeLink:'people',
        icon:'fal fa-users',
        label:'People',
        items: [
            {
                routeLink:'people/employee',
                label:'Employee'
            },
            {
                routeLink:'people/client',
                label:'Client'
            },
            {
                routeLink:'people/suppliers',
                label:'Suppliers'
            },
            {
                routeLink:'people/contacts',
                label:'Contacts'
            },
            {
                routeLink:'people/users',
                label:'Users'
            },
       
]},
    {
        routeLink:'hrsettings',
        icon:'fal fa-pie-chart',
        label:'HR Settings',
        items: [
            {
                routeLink:'hrsettings/jobTitles',
                label:'Job Titles'
            },
            {
                routeLink:'hrsettings/employeeType',
                label:'Employee Type'
            },
      
]},
    {
        routeLink:'accounts',
        icon:'fal fa-dollar-sign',
        label:'Accounts',
        items: [
            {
                routeLink:'accounts/invoice',
                label:'Invoice'
            },
            {
                routeLink:'accounts/invoiceStatus',
                label:'Invoice Status Value'
            }
    ]
    },
    {
        routeLink:'globals',
        icon:'fal fa-globe',
        label:'Globals',
        items: [
            {
                routeLink:'globals/countries',
                label:'Countries'
            },
            {
                routeLink:'globals/states',
                label:'States'
            },
            {
                routeLink:'globals/locations',
                label:'Locations'
            },
]},
    {
        routeLink:'reports',
        icon:'fal fa-book',
        label:'Reports',
        items: [
            {
                routeLink:'reports/vehicleReports',
                label:'Vehicle Reports'
            },
            {
                routeLink:'reports/employeeReports',
                label:'Employee Reports'
            },
            {
                routeLink:'reports/accountsReports',
                label:'Accounts Reports'
            },

]},



];