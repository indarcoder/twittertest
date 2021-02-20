import { Component, OnInit } from '@angular/core';
import {MerchantModel} from '../models/merchant.model';
@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {

  public Merchants : MerchantModel[] = [];
  constructor() { }

  ngOnInit(): void {
    this.Merchants = [
      {"CompanyName":"GETS Carpenter1","Thumbnail":"https://b2b.getslocal.uk/MediaFiles/Client/100227/2F3F6361-3B43-4020-9776-802A2EB5565C/Logos/0f55727f-2e54-410f-b6af-51b51c3d5af4-logo.png"},
      {"CompanyName":"GETS Carpenter2","Thumbnail":"https://b2b.getslocal.uk/MediaFiles/Client/100227/D77EF924-BFD9-4541-B230-446E60981003/Logos/c6ae70dc-a6d9-4e33-9681-988f2394f3d0-logo.png"},
      {"CompanyName":"GETS Carpenter3","Thumbnail":"https://b2b.getslocal.uk/MediaFiles/Client/100227/2F3F6361-3B43-4020-9776-802A2EB5565C/Logos/0f55727f-2e54-410f-b6af-51b51c3d5af4-logo.png"},
      {"CompanyName":"GETS Carpenter4","Thumbnail":"https://b2b.getslocal.uk/MediaFiles/Client/100227/2F3F6361-3B43-4020-9776-802A2EB5565C/Logos/0f55727f-2e54-410f-b6af-51b51c3d5af4-logo.png"},
      {"CompanyName":"GETS Carpenter5","Thumbnail":"https://b2b.getslocal.uk/MediaFiles/Client/100227/2F3F6361-3B43-4020-9776-802A2EB5565C/Logos/0f55727f-2e54-410f-b6af-51b51c3d5af4-logo.png"}
    ];
  }

}
