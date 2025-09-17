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
  @Input() username: string = '';

  public constructor(
    private fetchNew: Fetchnewservice

  ){

  }
  calculate(){
    if(this.fetchNew._playerobj1 && this.item){
      let counter = this.fetchNew._playerobj1.units.filter((x: any)=>x.data[this.item.search.toString()] == this.item.search_value);
      if(this.item.type == "unit"){
        counter = counter.filter((x: { data: { combat_type: number; }; })=>x.data.combat_type == 1);

      }else if(this.item.type == "ship"){
        counter = counter.filter((x: { data: { combat_type: number; }; })=>x.data.combat_type == 2);
      }
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
    found_item = this.fetchNew.shipsobj.filter((x: { base_id: any; })=>x.base_id == item_1.data.base_id);
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


getText(item:any):string{
  if(!item){
    return 'N/A';
  }
  
  return `${item.name} (${this.calculate().length})`;
}

generatevisibility(item_1:any):boolean{
if(this.username == null || this.username == ""){
  return true;
}else{
  return item_1.name.toLowerCase().includes(this.username.toLowerCase());
}
}
}
