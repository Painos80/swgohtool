import { Component } from '@angular/core';
import { Fetchnewservice } from 'src/app/core/newcore/fetchnewservice';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.scss']
})
export class GuildsComponent {
  datavalues_obs$:Observable<any> = this.fetchNew.datavalues_obs$;
  ally_code:any;

  guilds:any[]=[];
  _subs1:any;
  _subs2:any;

public constructor (
  private router: Router,
  private route: ActivatedRoute, 
  private fetchNew: Fetchnewservice

){
this._subs1 = this.datavalues_obs$.subscribe(x=>{
  if(x && x.hasOwnProperty('guilds')){
    //populate the guild
    this.guilds = [];
     x.guilds.values.forEach(async (g:any)=>{
      if(g.enabled){
      let dt = await this.fetchNew.generateGuild(g.id);
      if(this.guilds.filter(x=>x.id != dt.id).length <=0 ){
        this.guilds.push(dt);
      }
    }
    });
  }
});
}
ngOnDestroy(){
  if(this._subs1){
    this._subs1.unsubscribe();
  }
  if(this._subs2){
    this._subs2.unsubscribe();
  }
}
async ngOnInit() {
  if(this._subs2){
    this._subs2.unsubscribe();
  }
  this._subs2 =  this.route.queryParams.subscribe(async params => {
    if (params['playerid']) {
      this.ally_code = params['playerid'];
    }
  });
}
  //Change player from the dropdown
  async changeplayer(lnd:any){
    let lnk = `/?playerid=${lnd.ally_code}`;
    this.router.navigateByUrl(lnk);

  }
}

