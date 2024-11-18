import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Fetchnewservice } from 'src/app/core/newcore/fetchnewservice';
import { FetchmeService } from 'src/app/core/utilities/fetchme.service';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.scss']
})
export class PlayerinfoComponent {
  loaded$:Observable<any>= this.fetch.loaded;
  playerdata$:Observable<any>= this.fetch.playerdata;
  gls$:Observable<any>= this.fetch.gls;
  error$:Observable<any>= this.fetch.error;
  datavalues_obs$:Observable<any> = this.fetchNew.datavalues_obs$;

  public constructor(private fetch:FetchmeService,    private fetchNew: Fetchnewservice

     ){
    
 
  }
}
