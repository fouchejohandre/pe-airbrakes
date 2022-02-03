import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    faCoffee = faCoffee;
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element : ElementRef) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
    }
    
    navigate(whereTo: string){
        alert(whereTo);
    }
}
