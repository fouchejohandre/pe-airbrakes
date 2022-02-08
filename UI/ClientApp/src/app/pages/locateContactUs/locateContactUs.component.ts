import { Component, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-locateContactUs',
    templateUrl: './locateContactUs.component.html',
    styleUrls: ['./locateContactUs.component.scss']
})

export class LocateContactUsComponent implements OnInit {
  faPhone = faPhone;
  faAddress = faMapMarkedAlt;
  faEmail = faEnvelope;

  constructor() { }

  ngOnInit() {}

}
