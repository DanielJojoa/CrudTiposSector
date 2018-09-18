import { Sector } from './../models/sector';
import { Params } from '@angular/router';
import { GLOBAL } from './global';
import {Injectable} from '@angular/core' ;
import {Http, Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SectorService {
    public url: string;
    public token: string;
    public selectedSector: Sector;

    constructor (private _http: Http) {
        this.url = GLOBAL.url;
        this.token = GLOBAL.token;
        this.selectedSector = new Sector();
    }
    getSectors() {
        console.log('Entra al serviico');
        const params = 'authorization=' + this.token;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this._http.post(this.url + 'query', params, {headers: headers}).pipe(map(res => res.json()));
    }
    addNewSector(newSector) {

        const json = JSON.stringify(newSector);
        console.log(json);
        const params = 'json=' + json + '&authorization=' + this.token ;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(this.url + 'new', params, { headers: headers }).pipe(map(res => res.json()));

    }
    setSelectedSector(_sector: Sector) {
        this.selectedSector = _sector;
     }
    getSelectedSector( ) {
        return this.selectedSector;
     }
    updateSector(_sector) {
        const json = JSON.stringify(_sector);
        console.log(json);
        const params = 'json=' + json + '&authorization=' + this.token ;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(this.url + 'edit', params, { headers: headers }).pipe(map(res => res.json()));
    }
    deleteSector (_sector) {
        const json = JSON.stringify(_sector);
        console.log(json);
        const params = 'json=' + json + '&authorization=' + this.token ;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(this.url + 'remove', params, { headers: headers }).pipe(map(res => res.json()));
    }
}
