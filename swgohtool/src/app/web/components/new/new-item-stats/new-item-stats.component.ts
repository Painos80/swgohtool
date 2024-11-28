import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Calculations } from 'src/app/core/classes/calculations';
import { Fetchnewservice } from 'src/app/core/newcore/fetchnewservice';

@Component({
  selector: 'app-new-item-stats',
  templateUrl: './new-item-stats.component.html',
  styleUrls: ['./new-item-stats.component.scss']
})
export class NewItemStatsComponent {
  @Input() item: any = undefined;
  new$:Observable<any> = this.fetchNew._datavaluesList_obs$;
  datavalues_obs$:Observable<any> = this.fetchNew.datavalues_obs$;
  calc:Calculations = new Calculations();



  //Subscriptions
  ships$:Observable<any> = this.fetchNew.ships;
  units$:Observable<any> = this.fetchNew.units;
  playerdata$:Observable<any>= this.fetchNew.playerdata;
  player$:Observable<any>= this.fetchNew.player;
  loaded$:Observable<any>= this.fetchNew.loaded;
 

  public constructor(
    private fetchNew: Fetchnewservice

  ){

  }
  calculate(){
    if(this.fetchNew._playerobj1 && this.item){
      let counter = this.fetchNew._playerobj1.units.filter((x: any)=>x.data[this.item.search.toString()] == this.item.search_value);
      let ddt = counter.sort(this.objectComparisonCallback);
      return ddt;
   }

  
  }

  getImage(item_1:any):any{

    let found_item = this.fetchNew.unitsobj.filter((x: { base_id: any; })=>x.base_id == item_1.data.base_id);
    if(found_item ){
      try{
      return found_item[0].image;
      }catch(e){
        //console.error(e);
      }
    }
    return null;
  }

  
  objectComparisonCallback = (arrayItemA: any, arrayItemB: any) => {
    if (arrayItemA.data.power < arrayItemB.data.power) {
        return 1
    }

    if (arrayItemA.data.power > arrayItemB.data.power) {
        return -1
    }

    return 0
}
}
