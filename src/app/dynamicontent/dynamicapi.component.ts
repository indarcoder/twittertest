import { Component, OnInit } from '@angular/core';
import { MerchantModel } from '../models/merchant.model';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-dynamicapi',
  templateUrl: './dynamicapi.component.html',
  styleUrls: ['./dynamicapi.component.css']
})
export class DynamicapiComponent implements OnInit {
  public PhotoList : Photo[] = [];
  constructor(private dynamicService: PhotoService) { }
  loading: boolean  = false;
  ngOnInit(): void {
    this.loading = true;
    this.dynamicService.getDynamicData().subscribe(
      photos => {
        this.PhotoList = photos;
        this.loading = false;
      }
    );
  }

}
