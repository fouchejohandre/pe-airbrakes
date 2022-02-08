import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(http: HttpClient){

    http.get<any>('http://peairbrakes.vfsolutions.co.za/api/weatherforecast').subscribe(result => {
      console.log(result);
    }, error => console.error(error));
  }

  ngOnInit() {

  }

}
