import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from "rxjs";
import { take, map } from 'rxjs/operators';
import { Photo } from "../models/photo.model";

@Injectable()
export class PhotoService
{
    constructor(private httpClient: HttpClient){
    }

    getDynamicData(){
        let url = `https://jsonplaceholder.typicode.com/photos`;
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.httpClient.get<Photo[]>(url, {headers}).pipe(map(x => x.slice(0, 50))) as Observable<Photo[]>;
    }
}
