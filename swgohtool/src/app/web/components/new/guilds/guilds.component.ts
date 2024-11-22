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

public constructor (
  private router: Router,
  private route: ActivatedRoute, 
  private fetchNew: Fetchnewservice

){
this.datavalues_obs$.subscribe(x=>{
  if(x){
    //populate the guild
    this.guilds = [];
    x.guilds.values.forEach(async (g: { id: string; })=>{
      let dt = await this.fetchNew.generateGuild(g.id);
      this.guilds.push(dt);
    });
  }
});
}

async ngOnInit() {
   this.route.queryParams.subscribe(async params => {
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

