import { Component } from '@angular/core';
import { FetchmeService } from 'src/app/core/utilities/fetchme.service';
import { Observable } from 'rxjs';
import { ClsFrm } from 'src/app/core/classes/cls-frm';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss']
})
export class TabviewComponent {
  //Subscriptions
  ships$:Observable<any> = this.fetch.ships;
  units$:Observable<any> = this.fetch.units;
  playerdata$:Observable<any>= this.fetch.playerdata;
  loaded$:Observable<any>= this.fetch.loaded;
  legends$:Observable<any>= this.fetch.legends;
  events$:Observable<any>= this.fetch.events;
  eventslow$:Observable<any>= this.fetch.eventslow;
  gls$:Observable<any>= this.fetch.gls;
  evnts$:Observable<any>= this.fetch.evnts;
  evntslw$:Observable<any>= this.fetch.evntslw;
  guild$:Observable<any>= this.fetch.guild;
  goodteams$:Observable<any>= this.fetch.goodteams;
  goodteamslw$:Observable<any>= this.fetch.goodteamslw;
  krayt$:Observable<any>= this.fetch.krayt;
  sbp$:Observable<any>= this.fetch.sbp; 
  //cpit$:Observable<any>= this.fetch.cpit;
  //cpitlw$:Observable<any>= this.fetch.cpitlw;
  error$:Observable<any>= this.fetch.error;
  /*cpitready$:Observable<any>= this.fetch.cpitready;
  cpitready_counter$:Observable<any>= this.fetch.cpitready_counter;
  cpitreadyclose$:Observable<any>= this.fetch.cpitreadyclose;
  cpitready_counterclose$:Observable<any>= this.fetch.cpitready_counterclose;
*/
  frmHigh$:Observable<any>= this.fetch.frmHigh;
  frmMedium$:Observable<any>= this.fetch.frmMedium;
  frmLow$:Observable<any>= this.fetch.frmLow;
  farmTBSquads$:Observable<any>= this.fetch.farmTBSquads;
  farmTWSquads$:Observable<any>= this.fetch.farmTWSquads;

  farmGLSquads$:Observable<any>= this.fetch.farmGLSquads;
  farmGLShips$:Observable<any>= this.fetch.farmGLShips;
  farmKeySquads$:Observable<any>= this.fetch.farmKeySquads;
  farmCapitalShips$:Observable<any>= this.fetch.farmCapitalShips;
  farmKeyFleets$:Observable<any>= this.fetch.farmKeyFleets;


  lowOmis$:Observable<any>= this.fetch.lowOmis;
  lowKeySquads$:Observable<any>= this.fetch.lowKeySquads;
  lowKeyShips$:Observable<any>= this.fetch.lowKeyShips;
  lowKeyCharsCapitalShipsShips$:Observable<any>= this.fetch.lowKeyCharsCapitalShipsShips;
  
  
  guild_total$:Observable<any>= this.fetch.guild_total;
  


  tab1_active:boolean=false;
  tab2_active:boolean=false;
  tab3_active:boolean=false;
  tab4_active:boolean=false;
  tab5_active:boolean=false;

  public constructor(
    private fetch: FetchmeService
    ) {
     
      
  }

  ngOnInit(){
    this.getStatic();
    if(!this.tab1_active &&
      !this.tab2_active &&
      !this.tab3_active &&
      !this.tab4_active&&
      !this.tab5_active){
        this.tab1_active=true;
      }
      this.updateStatic();
  }

  tab1(){
    this.tab1_active = true;
    this.tab2_active = false;
    this.tab3_active = false;
    this.tab4_active = false;
    this.tab5_active = false;
    this.updateStatic();
  }

  tab2(){
    this.tab1_active = false;
    this.tab2_active = true;
    this.tab3_active = false;
    this.tab4_active = false;
    this.tab5_active = false;
    this.updateStatic();
  }

  tab3(){
    this.tab1_active = false;
    this.tab2_active = false;
    this.tab3_active =true ;
    this.tab4_active = false;
    this.tab5_active = false;
    this.updateStatic();
  }
  tab4(){
    this.tab1_active = false;
    this.tab2_active = false;
    this.tab3_active =false;
    this.tab4_active = true;
    this.tab5_active = false;
    this.updateStatic();
  }
  tab5(){
    this.tab1_active = false;
    this.tab2_active = false;
    this.tab3_active =false;
    this.tab4_active = false;
    this.tab5_active = true ;
    this.updateStatic();
  }

  updateStatic(){
    ClsFrm.tab1_active= this.tab1_active  ;
    ClsFrm.tab2_active=this.tab2_active  ;
    ClsFrm.tab3_active=this.tab3_active  ;
    ClsFrm.tab4_active=this.tab4_active  ;
    ClsFrm.tab5_active=this.tab5_active  ;
  }

  getStatic(){
    this.tab1_active = ClsFrm.tab1_active;
    this.tab2_active = ClsFrm.tab2_active;
    this.tab3_active = ClsFrm.tab3_active;
    this.tab4_active = ClsFrm.tab4_active;
    this.tab5_active =  ClsFrm.tab5_active;
  }

  isLoading:boolean = false;
  async generate_Guild(){
    try{
      this.isLoading = true;
    await this.fetch.generateGuildReport();
    this.isLoading = false;
    }catch(e){
      this.isLoading=false;
    }
  }
}
