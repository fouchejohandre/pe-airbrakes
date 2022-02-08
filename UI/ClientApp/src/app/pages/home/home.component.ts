import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

export interface NgbPanelChangeEvent {
  nextState: boolean;
  panelId: string;
  preventDefault: () => void;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  lastPanelId: string = null;
  defaultPanelId: string = "panel2";

  constructor(http: HttpClient){
    http.get<any>('http://peairbrakes.vfsolutions.co.za/api/weatherforecast').subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }

  ngOnInit() {

  }

  panelShadow($event: NgbPanelChangeEvent, shadow) {
    const { nextState } = $event;
    const activePanelId = $event.panelId;
    const activePanelElem = document.getElementById(activePanelId);

    if (!shadow.isExpanded(activePanelId)) {
      activePanelElem.parentElement.classList.add("open");
    }

    if (!this.lastPanelId) this.lastPanelId = this.defaultPanelId;
    if (this.lastPanelId) {
      const lastPanelElem = document.getElementById(this.lastPanelId);
      if (this.lastPanelId === activePanelId && nextState === false)
        activePanelElem.parentElement.classList.remove("open");
      else if (this.lastPanelId !== activePanelId && nextState === true) {
        lastPanelElem.parentElement.classList.remove("open");
      }
    }
    this.lastPanelId = $event.panelId;
  }
}
