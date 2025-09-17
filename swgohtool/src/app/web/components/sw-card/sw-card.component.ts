import { Component, Input } from '@angular/core';
import { ClsFrm } from 'src/app/core/classes/cls-frm';
//import { FetchmeService } from 'src/app/core/utilities/fetchme.service';

@Component({
  selector: 'app-sw-card',
  templateUrl: './sw-card.component.html',
  styleUrls: ['./sw-card.component.scss']
})
export class SwCardComponent {
@Input() lnd:any = undefined;


_subs1:any;
_subs2:any;
//hidecompleted: boolean = ClsFrm.hidecompleted;
//hidecompletedItems: boolean = ClsFrm.hidecompletedItems;
public constructor(
  //private fetch: FetchmeService,

){
/*this._subs1 = fetch.hidecompleted.subscribe(x=>{
  if(x){
  console.log(x);
  }
});
this._subs2 = fetch.hidecompletedItems.subscribe(x=>{
  if(x){
  console.log(x);
  }
});*/

}

ngOnDestroy(){
  if(this._subs1){
    this._subs1.unsubscribe();
  }
  if(this._subs2){
    this._subs2.unsubscribe();
  }
}

  checkCompleted(): boolean {
   // if ( this.fetch.hidecompletedValue) {
      if (this.lnd) {
        if (this.lnd.ok && this.lnd.ultimate && this.lnd.canhide) {
          return false;
        }
      }
      return true;
    
  }

  checkCompletedItem(itm:any):boolean{
       if(this.lnd){
        if(this.lnd.canhide){
          if(itm.allOK() && itm.hasTheToon()){
            return false;

          }else{
            return true;
          }
        }
      }
      return true;
    } 
}
