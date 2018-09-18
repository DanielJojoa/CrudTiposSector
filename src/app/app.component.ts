import { SectorService } from './services/sector.service';
import { Sector } from './models/sector';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SectorService]
})
export class AppComponent {
  title = 'Crud';
  constructor (private _inspectorService: SectorService) {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit ( ) {
  }
}
