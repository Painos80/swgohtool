import { Component } from '@angular/core';
//import { FetchmeService } from 'src/app/core/utilities/fetchme.service';
import { Observable } from 'rxjs';
import { Calculations } from 'src/app/core/classes/calculations';
import { ClsFrm } from 'src/app/core/classes/cls-frm';
import { Fetchnewservice } from 'src/app/core/newcore/fetchnewservice';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.scss']
})
export class TabviewComponent {
  new$:Observable<any> = this.fetchNew._datavaluesList_obs$;
  datavalues_obs$:Observable<any> = this.fetchNew.datavalues_obs$;
  calc:Calculations = new Calculations();



  //Subscriptions
  ships$:Observable<any> = this.fetchNew.ships;
  units$:Observable<any> = this.fetchNew.units;
  playerdata$:Observable<any>= this.fetchNew.playerdata;
  loaded$:Observable<any>= this.fetchNew.loaded;
  //legends$:Observable<any>= this.fetch.legends;
  //events$:Observable<any>= this.fetch.events;
  //eventslow$:Observable<any>= this.fetch.eventslow;
  //gls$:Observable<any>= this.fetch.gls;
  //evnts$:Observable<any>= this.fetch.evnts;
  //evntslw$:Observable<any>= this.fetch.evntslw;
  //guild$:Observable<any>= this.fetch.guild;
  //goodteams$:Observable<any>= this.fetch.goodteams;
  //goodteamslw$:Observable<any>= this.fetch.goodteamslw;
  //krayt$:Observable<any>= this.fetch.krayt;
  //sbp$:Observable<any>= this.fetch.sbp; 
  //naboo$:Observable<any>= this.fetch.naboo; 
  //cpit$:Observable<any>= this.fetch.cpit;
  //cpitlw$:Observable<any>= this.fetch.cpitlw;
  error$:Observable<any>= this.fetchNew.error; 
  /*cpitready$:Observable<any>= this.fetch.cpitready;
  cpitready_counter$:Observable<any>= this.fetch.cpitready_counter;
  cpitreadyclose$:Observable<any>= this.fetch.cpitreadyclose;
  cpitready_counterclose$:Observable<any>= this.fetch.cpitready_counterclose;
*/
  //frmHigh$:Observable<any>= this.fetch.frmHigh;
  //frmMedium$:Observable<any>= this.fetch.frmMedium;
  //frmLow$:Observable<any>= this.fetch.frmLow;
  //farmTBSquads$:Observable<any>= this.fetch.farmTBSquads;
  //farmTWSquads$:Observable<any>= this.fetch.farmTWSquads;

  //farmGLSquads$:Observable<any>= this.fetch.farmGLSquads;
  //farmGLShips$:Observable<any>= this.fetch.farmGLShips;
  //farmKeySquads$:Observable<any>= this.fetch.farmKeySquads;
  //farmCapitalShips$:Observable<any>= this.fetch.farmCapitalShips;
  //farmKeyFleets$:Observable<any>= this.fetch.farmKeyFleets;


  //lowOmis$:Observable<any>= this.fetch.lowOmis;
  //lowKeySquads$:Observable<any>= this.fetch.lowKeySquads;
  //lowKeyShips$:Observable<any>= this.fetch.lowKeyShips;
  //lowKeyCharsCapitalShipsShips$:Observable<any>= this.fetch.lowKeyCharsCapitalShipsShips;
  
  
  //guild_total$:Observable<any>= this.fetch.guild_total;
  


  tab1_active:boolean=false;
  tab2_active:boolean=false;
  tab3_active:boolean=false;
  tab4_active:boolean=false;
  tab5_active:boolean=false;
  tab6_active:boolean=false;
  _subs1:any;

  public constructor(
    //private fetch: FetchmeService,
    private fetchNew: Fetchnewservice
    ) {
      this._subs1 = fetchNew.hidecompleted.subscribe(x=>{
        if(x == true){
          this.hideCompletedTable = true;
        //console.log(x);
        }else if(x==false){
          this.hideCompletedTable = false;
          //console.log(x);
         
        }
      });
      
  }


  ngOnDestroy(){
    if(this._subs1){
      this._subs1.unsubscribe();
    }
   
  }
  
  ngOnInit(){
    this.getStatic();
    if(!this.tab1_active &&
      !this.tab2_active &&
      !this.tab3_active &&
      !this.tab4_active&&
      !this.tab6_active&&
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
    this.tab6_active = false;
    this.updateStatic();
  }

  tab2(){
    this.tab1_active = false;
    this.tab2_active = true;
    this.tab3_active = false;
    this.tab4_active = false;
    this.tab5_active = false;
    this.tab6_active = false;
    this.updateStatic();
  }

  tab3(){
    this.tab1_active = false;
    this.tab2_active = false;
    this.tab3_active =true ;
    this.tab4_active = false;
    this.tab5_active = false;
    this.tab6_active = false;
    this.updateStatic();
  }
  tab4(){
    this.tab1_active = false;
    this.tab2_active = false;
    this.tab3_active =false;
    this.tab4_active = true;
    this.tab5_active = false;
    this.tab6_active = false;
    this.updateStatic();
  }
  tab5(){
    this.tab1_active = false;
    this.tab2_active = false;
    this.tab3_active =false;
    this.tab4_active = false;
    this.tab5_active = true ;
    this.tab6_active = false;
    this.updateStatic();
  }
  tab6(){
    this.tab1_active = false;
    this.tab2_active = false;
    this.tab3_active =false; 
    this.tab4_active = false;
    this.tab5_active =false;
    this.tab6_active = true;
    this.updateStatic();
  }

  updateStatic(){
    ClsFrm.tab1_active= this.tab1_active  ;
    ClsFrm.tab2_active=this.tab2_active  ;
    ClsFrm.tab3_active=this.tab3_active  ;
    ClsFrm.tab4_active=this.tab4_active  ;
    ClsFrm.tab5_active=this.tab5_active  ;
    ClsFrm.tab6_active=this.tab6_active  ;
  }

  getStatic(){
    this.tab1_active = ClsFrm.tab1_active;
    this.tab2_active = ClsFrm.tab2_active;
    this.tab3_active = ClsFrm.tab3_active;
    this.tab4_active = ClsFrm.tab4_active;
    this.tab5_active =  ClsFrm.tab5_active;
    this.tab6_active =  ClsFrm.tab6_active;
  }

  isLoading:boolean = false;
  async generate_Guild(){
    try{
      this.isLoading = true;
    //await this.fetch.generateGuildReport();
    this.isLoading = false;
    }catch(e){
      this.isLoading=false;
    }
  }

  hideCompletedTable: boolean = false;

  showTable(item:any): boolean {
    let hasitems = item && item.hasOwnProperty('requirements') && item.requirements && item.requirements.length > 0;
    let show = hasitems;// false;
    if (this.hideCompletedTable && this.calc.isItemCompleted(item)) {
      if(item.hasOwnProperty('nohide') && item.nohide){
        return true;
      }
      return false;
    }else{
      return true;
    }
    /*if(hasitems){
      //show = true;
      for(let i=0;i<=this.item.requirements.length -1; i++){
        if(this.calculateItem(this.item.requirements[i]) != 'text-success'){
          show = true;
          break;
        }
      }
    }*/

    return show;
  }
}
