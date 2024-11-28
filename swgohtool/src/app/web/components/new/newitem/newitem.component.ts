import { Component, Input } from '@angular/core';
import { Calculations } from 'src/app/core/classes/calculations';
import { Fetchnewservice } from 'src/app/core/newcore/fetchnewservice';

@Component({
  selector: 'app-newitem',
  templateUrl: './newitem.component.html',
  styleUrls: ['./newitem.component.scss']
})
export class NewitemComponent {
  @Input() item: any = undefined;
  hideCompletedTable: boolean = false;
  hideCompletedRow: boolean = false;
   calc:Calculations = new Calculations();

  _subs1:any;
  _subs2:any;
constructor(private fetchNew:Fetchnewservice,
){
  this._subs1 = fetchNew.hidecompleted.subscribe(x=>{
  if(x == true){
    this.hideCompletedTable = true;
  //console.log(x);
  }else if(x==false){
    this.hideCompletedTable = false;
    //console.log(x);
   
  }
});
this._subs2 = fetchNew.hidecompletedItems.subscribe(x=>{
  if(x == true){
    //console.log(x);
    this.hideCompletedRow = true;
    }else if(x==false){
     // console.log(x);
     this.hideCompletedRow = false;

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
 

 

  /*
  <div *ngIf="item_1.player_item">
        <span class="px-2">{{item_1.player_item.data.rarity}}</span>
        <span class="px-2">{{item_1.player_item.data.relic_tier-2}}</span>
        <span class="px-2">{{item_1.player_item.data.gear_level}}</span>
    </div>
    <div>
        <span class="px-2">{{item_1.stars}}</span>
        <span class="px-2">{{item_1.relic_level}}</span>
        <span class="px-2">{{item_1.gear_level}}</span>
    </div>
  
  */

  showTable(): boolean {
    let hasitems = this.item && this.item.hasOwnProperty('requirements') && this.item.requirements && this.item.requirements.length > 0;
    let show = hasitems;// false;
    if (this.hideCompletedTable && this.calc.isItemCompleted(this.item)) {
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

  getExtraText(): string {
    let item = this.item;
    if (!item) {
      return '';
      //return 'text-white';
    }
    let hasItem = this.calc.hasItem(item);
    if (!hasItem) {
      let index = 0;
      let length = (this.item.hasOwnProperty('requirements') && this.item.requirements) ? this.item.requirements.length : null;
      if (length) {
        for (let i = 0; i <= this.item.requirements.length - 1; i++) {
          if (this.calc.calculateItem(this.item.requirements[i]) == this.calc.class_no_ok) {
            index++;
          }
        }
        let str = (length != null) ? "" : `(${index}/${length})`;
        return `(${index}/${length})`;
      }
      return '';
      //return 'text-white bg-danger'; 
    }
    if (item.hasOwnProperty('has_ultimate') && item.has_ultimate) {
      let has_ultimate = (item.hasOwnProperty('player_item') && item.player_item && item.hasOwnProperty('has_ultimate') && item.has_ultimate && item.player_item.data.has_ultimate);
      if (!has_ultimate) {
        return '(No ultimate)';
      }
    }
    let hasRarity = this.calc.hasRarity(item);
    if (!hasRarity) {
      return `(Stars: ${item.player_item.data.rarity}/${item.stars})`;
    }

    return '';
  }

  showRow(item_1:any):boolean{
    let hasitems = this.item && this.item.hasOwnProperty('requirements') && this.item.requirements && this.item.requirements.length > 0;
    if(!hasitems){
      return false;
    }

    if(this.hideCompletedRow){
      if(this.calc.calculateItem(item_1) == this.calc.class_no_ok){
        return false;
      }
    }
    return true;
  }

  showAll():boolean{
    let hasitems = this.item && this.item.hasOwnProperty('requirements') && this.item.requirements && this.item.requirements.length > 0;
    if(!hasitems){
      return false;
    }


    if(this.hideCompletedRow){
//      let hasitems = this.item && this.item.hasOwnProperty('requirements') && this.item.requirements && this.item.requirements.length > 0;
      
      if(hasitems){
        //show = true;
        for(let i=0;i<=this.item.requirements.length -1; i++){
          let cls = this.calc.calculateItem(this.item.requirements[i]);
          if(cls != this.calc.class_no_ok){
            return true;
            //break;
          }
        }
        return false;
      }else{
        return false;
      }
  


      /*if(this.calculateItem(item_1) == this.class_no_ok){
        return false;
      }*/
    }
    return true;
  }

 
}
