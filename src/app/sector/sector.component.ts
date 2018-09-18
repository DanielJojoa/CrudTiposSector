import { Sector } from './../models/sector';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { identity } from 'rxjs';
import { SectorService } from '../services/sector.service';


@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css'],
  providers: [SectorService]
})
export class SectorComponent implements OnInit {
  public sectors: any [] = [];
  public selectedSector: Sector;
  public showAddForm: string;
  public sector: Sector;
  public isActivedSector: boolean;
  public status: string;
  constructor(private _sectorService: SectorService, private _router: Router) {
    this.showAddForm = 'false' ;
    this.sector = new Sector();
    this.isActivedSector = false;

  }

  ngOnInit() {
  this._sectorService.getSectors().subscribe(
    response => {
      if (response.status === 'Exito') {
        this.sectors = response.tiposector;
      }

    }, error => {
      console.log(error);
    }
  );

  }
  addNewSector() {
    this.showAddForm = 'true';
  }
  activeSector(e) {
    this.activeSector = e.target.cheked;
  }
  onSubmit() {

    if ( this.sector.pkidtiposector) {
      this._sectorService.updateSector(this.sector).subscribe(
        response => {

           this.status = response.status;
           if (this.status === 'Exito') {
            setTimeout(function() { this.status = 'Exito'; }, 3000);
              this.status = '';
           } else {
            setTimeout(function() { this.status = 'Error'; }, 3000);
            this.status = '';
           }
        }, error => {
          console.log(error);
        }
      );
    } else {
      this._sectorService.addNewSector(this.sector).subscribe(
        response => {
          console.log('response =>', response);
          if (this.status === 'Exito') {
            setTimeout(function() { this.status = 'Exito'; }, 3000);
              this.status = '';
           } else {
            setTimeout(function() { this.status = 'Error'; }, 3000);
            this.status = '';
           }
        }, error => {
          console.log(error);
        }
      );
    }

  }

  removeSector(_sector: Sector) {
    this.sector = _sector;
    if ( confirm('Desea Eliminar' + _sector.nombretiposector + '?') ) {
      this._router.navigate(['/index']);
      this._sectorService.deleteSector({'pkidtiposector' :  this.sector.pkidtiposector }).subscribe(
        response => {

          if (response.status === 'Exito') {
            setTimeout(function() { this.status = 'Exito'; }, 3000);
              this.status = '';

           } else {
            setTimeout(function() { this.status = 'Error'; }, 3000);
            this.status = '';
           }
        }, error => {
          console.log(error);
        }
      );
    }
  }
  resetForm(form) {
    if (form) {
      form.reset();
      this.sector = new Sector();
      this.showAddForm = 'false';
      this._sectorService.getSectors().subscribe(
    response => {
      if (response.status === 'Exito') {
        this.sectors = response.tiposector;
        this._router.navigate(['/index']);
      }

    }, error => {
      console.log(error);
    }
  );

    }
  }

}
