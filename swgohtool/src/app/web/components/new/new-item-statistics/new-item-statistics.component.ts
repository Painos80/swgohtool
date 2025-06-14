import { Component, Input } from '@angular/core';
import { Calculations } from 'src/app/core/classes/calculations';
import { Fetchnewservice } from 'src/app/core/newcore/fetchnewservice';

@Component({
  selector: 'app-new-item-statistics',
  templateUrl: './new-item-statistics.component.html',
  styleUrls: ['./new-item-statistics.component.scss']
})
export class NewItemStatisticsComponent {
  @Input() item: any = undefined;
  @Input() hideitems: boolean = false;

  hideCompletedTable: boolean = false;
  hideCompletedRow: boolean = false;
   calc:Calculations = new Calculations();

  _subs1:any;
  _subs2:any;
constructor(private fetchNew:Fetchnewservice,
){
  this._subs1 = fetchNew.hidecompleted.subscribe(x=>{
  if(x == true){
    //this.hideCompletedTable = true;
  //console.log(x);
  }else if(x==false){
    this.hideCompletedTable = false;
    //console.log(x);
   
  }
});
this._subs2 = fetchNew.hidecompletedItems.subscribe(x=>{
  if(x == true){
    //console.log(x);
    //this.hideCompletedRow = true;
    }else if(x==false){
     // console.log(x);
     this.hideCompletedRow = false;

    }
});

}
 
ngOnInit(){
  for(let i=0;i<=this.item.requirements.length-1;i++){
    this.getBestMods(this.item.requirements[i]);
  }
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

  showTable(): boolean {
    let hasitems = this.item && this.item.hasOwnProperty('requirements') && this.item.requirements && this.item.requirements.length > 0;
    let show = hasitems;// false;
    if (this.hideCompletedTable && this.calc.isItemCompleted(this.item)) {
      if(this.item.hasOwnProperty('nohide') && this.item.nohide){
        return true;
      }
         return false;
    }else{
      return true;
    }
  }

  showRow(item_1:any):boolean{
    let hasitems = this.item && this.item.hasOwnProperty('requirements') && this.item.requirements && this.item.requirements.length > 0;
    if(!hasitems){
      return false;
    }

    if(this.hideCompletedRow){
      if(item_1.hasOwnProperty('nohide') && item_1.nohide){
        return true;
      }
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
        if(this.item.hasOwnProperty('nohide') && this.item.nohide){
          return true;
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

  getText(item:any):string{
    if(!item){
      return 'N/A';
    }
    if(!this.getExtraText()){
      return item.name;
    }
    return `${item.name} ${this.getExtraText()}`;
  }

  async getBestMods(item_1:any){
//this.item. 
/*console.log(item_1);
item_1.props.armor = 70;

item_1.props.damage = 5;
 
item_1.props.health = 5000;
 
item_1.props.protection= 5000;
 
item_1.props.relic= 5000;
 
item_1.props.speed= 5000;*/
let url = 'https:' + item_1.item_from_gg.url + 'best-mods';;
      let data = await this.fetchNew.getDataFromURL(url).catch(error => {
        console.error(error);
      }); 

/*
<ul>
                <li><strong>Relic</strong>: 8.96</li>
                    <li><strong>Health</strong>: 167,974</li>
                    <li><strong>Protection</strong>: 102,779</li>
                    <li><strong>Speed</strong>: 554</li>
                    <li><strong>Physical Damage</strong>: 6,044</li>
                    <li><strong>Special Damage</strong>: 8,181</li>
                    <li><strong>Armor</strong>: 63.6%</li>
                    <li><strong>Potency</strong>: 69.67%</li>
                    <li><strong>Tenacity</strong>: 92.74%</li>
            </ul>
*/
var mySubString = data?.toString().substring(
    data?.toString().indexOf(":") + 1, 
    data?.toString().lastIndexOf(";")
);
try{
  if(item_1 && !item_1.hasOwnProperty('props')){
    item_1.props = {
      relic: "",
      health: "",
      armor: "",
      damage: "",
      protection:"",
      speed: ""
    }
  }
 item_1.props.relic = this.getMatch(item_1,data,"Relic");
 item_1.props.health = this.getMatch(item_1,data,"Health");
 item_1.props.armor = this.getMatch(item_1,data,"Armor");
 item_1.props.damage = this.getMatch(item_1,data,"Physical Damage");;
item_1.props.protection= this.getMatch(item_1,data,"Protection");
item_1.props.speed= this.getMatch(item_1,data,"Speed");
}catch(e){
  console.error(e);
}

//console.log("");

}

getMatch(item_1:any, data:any, str:string):any{
try{
  var tmpStr  = data?.toString().match(`<li><strong>${str}</strong>:(.*)</li>`);
  let str1 = tmpStr[1].trim();//.split(',').join().split('%').join(); 
  str1 = str1.replace(",", "");
  str1 = str1.replace("%", "");
  str1 = str1.split('.')[0];
  return str1;
}catch(e){
  return item_1.props.relic;
}
}

}
