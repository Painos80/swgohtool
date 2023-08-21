import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { categories } from '../data/cats';
import { Cpit } from '../data/cpit';
import { Farm, FarmUnit } from '../classes/cls-frm';
//import legends from '../../core/data/gls'; 
//import  categories from '../../core/data/cats'; 


@Injectable({
  providedIn: 'root'
})
export class FetchmeService {

  //proxy_cors = "https://corsproxy.io/?";
  proxy_cors = "https://panosweb.se/px/proxy.php?url=";
  //              https://panosweb.se/proxy/proxy.php?url=http://api.swgoh.gg/ships/

  private _ships = new BehaviorSubject<any>([]);
  ships = this._ships.asObservable();
  shipsobj:any;
  changeShips(newData:any){
    this.shipsobj = newData;
    this._ships.next(newData);
  }

  private _units = new BehaviorSubject<any>([]);
  units = this._units.asObservable();
  unitsobj:any;
  changeUnits(newData:any){
    this.unitsobj = newData;
        this._units.next(newData);
  }


  private _abilities = new BehaviorSubject<any>([]);
  abilities = this._abilities.asObservable();
  abilitiesobj:any;
  changeAbilities(newData:any){
    this.abilitiesobj = newData;
    this._abilities.next(newData);
  }

  private _playerdata = new BehaviorSubject<any>([]);
  playerdata = this._playerdata.asObservable();
  _playerobj:any;
  changePlayerData(newData:any){
    this._playerobj  = newData;
    this._playerdata.next(newData);
  }

  private _loaded = new BehaviorSubject<boolean>(false);
  loaded = this._loaded.asObservable();
  changeLoaded(newData:any){
    this._loaded.next(newData);
  }

  private _error = new BehaviorSubject<any>(null);
  error = this._error.asObservable();
  changeError(newData:any){
    this._error.next(newData);
  }

  private _legends = new BehaviorSubject<any>([]);
  legends = this._legends.asObservable();
  changeLegends(newData:any){
    this._legends.next(newData);
  }

  private _events = new BehaviorSubject<any>([]);
  events = this._events.asObservable();
  changeEvents(newData:any){
    this._events.next(newData);
  }

  private _gls = new BehaviorSubject<any>([]);
  gls = this._gls.asObservable();
  changeGls(newData:any){
    this._gls.next(newData);
  }

  private _eventslow = new BehaviorSubject<any>([]);
  eventslow = this._eventslow.asObservable();
  changeEventsLow(newData:any){
    this._eventslow.next(newData);
  }
  private _evntslw = new BehaviorSubject<any>([]);
  evntslw = this._evntslw.asObservable();
  changeEvntsLW(newData:any){
    this._evntslw.next(newData);
  }

  private _evnts = new BehaviorSubject<any>([]);
  evnts = this._evnts.asObservable();
  changeEvnts(newData:any){
    this._evnts.next(newData);
  }
  
  
  private _guild = new BehaviorSubject<any>([]);
  guild = this._guild.asObservable();
  _guildobj :any;
  changeGuild(newData:any){
    this._guildobj = newData;
    this._guild.next(newData);
  }

  private _goodteams = new BehaviorSubject<any>([]);
  goodteams = this._goodteams.asObservable();
  changeGoodTeams(newData:any){
    this._goodteams.next(newData);
  }
  private _goodteamslw = new BehaviorSubject<any>([]);
  goodteamslw = this._goodteamslw.asObservable();
  changeGoodTeamsLW(newData:any){
    this._goodteamslw.next(newData);
  }
  
  /*private _cpit = new BehaviorSubject<any>([]);
  cpit = this._cpit.asObservable();
  changeCpit(newData:any){
    this._cpit.next(newData);
  }
  private _cpitlw = new BehaviorSubject<any>([]);
  cpitlw = this._cpitlw.asObservable();
  changeCpitLW(newData:any){
    this._cpitlw.next(newData);
  }

  private _cpitready = new BehaviorSubject<any>([]);
  cpitready = this._cpitready.asObservable();
  changeCpitReady(newData:any){
    this._cpitready.next(newData);
  }

  private _cpitready_counter = new BehaviorSubject<any>([]);
  cpitready_counter = this._cpitready_counter.asObservable();
  changeCpitReadyCounter(newData:any){
    this._cpitready_counter.next(newData);
  }
  
  private _cpitreadyclose = new BehaviorSubject<any>([]);
  cpitreadyclose = this._cpitreadyclose.asObservable();
  changeCpitReadyClose(newData:any){
    this._cpitreadyclose.next(newData);
  }

  private _cpitready_counterclose = new BehaviorSubject<any>([]);
  cpitready_counterclose = this._cpitready_counterclose.asObservable();
  changeCpitReadyCounterClose(newData:any){
    this._cpitready_counterclose.next(newData);
  }*/

  private _krayt = new BehaviorSubject<any>([]);
  krayt = this._krayt.asObservable();
  changeKrayt(newData:any){
    this._krayt.next(newData);
  }

  private _sbp = new BehaviorSubject<any>([]);
  sbp = this._sbp.asObservable();
  changeSbp(newData:any){
    this._sbp.next(newData);
  }

  private _hidecompleted = new BehaviorSubject<any>([]);
  hidecompleted = this._hidecompleted.asObservable();
  hidecompletedValue = false;
  changeHideCompleted(newData:any){
    this.hidecompletedValue = newData;
    this._hidecompleted.next(newData);
  }
  
  private _hidecompletedItems = new BehaviorSubject<any>([]);
  hidecompletedItems = this._hidecompletedItems.asObservable();
  hidecompletedItemsValue = false;
  changeHideCompletedItems(newData:any){
    this.hidecompletedItemsValue = newData;
    this._hidecompletedItems.next(newData);
  }




  private _frmHigh = new BehaviorSubject<any>([]);
  frmHigh = this._frmHigh.asObservable();
  changefrmHigh(newData:any){
    this._frmHigh.next(newData);
  }
  private _frmMedium = new BehaviorSubject<any>([]);
  frmMedium = this._frmMedium.asObservable();
  changefrmMedium(newData:any){
    this._frmMedium.next(newData);
  }
  private _frmLow = new BehaviorSubject<any>([]);
  frmLow = this._frmLow.asObservable();
  changefrmLow(newData:any){
    this._frmLow.next(newData);
  }

  private _farmTWSquads = new BehaviorSubject<any>([]);
  farmTWSquads = this._farmTWSquads.asObservable();
  changefarmTWSquads(newData:any){
    this._farmTWSquads.next(newData);
  }

  private _farmTBSquads = new BehaviorSubject<any>([]);
  farmTBSquads = this._farmTBSquads.asObservable();
  changefarmTBSquads(newData:any){
    this._farmTBSquads.next(newData);
  }

  private _farmGLSquads = new BehaviorSubject<any>([]);
  farmGLSquads = this._farmGLSquads.asObservable();
  change_farmGLSquads(newData:any){
    this._farmGLSquads.next(newData);
  }
  private _farmGLShips = new BehaviorSubject<any>([]);
  farmGLShips = this._farmGLShips.asObservable();
  change_farmGLShips(newData:any){
    this._farmGLShips.next(newData);
  }
  private _farmKeySquads = new BehaviorSubject<any>([]);
  farmKeySquads = this._farmKeySquads.asObservable();
  change_farmKeySquads(newData:any){
    this._farmKeySquads.next(newData);
  }

  private _farmCapitalShips = new BehaviorSubject<any>([]);
  farmCapitalShips = this._farmCapitalShips.asObservable();
  change_farmCapitalShips(newData:any){
    this._farmCapitalShips.next(newData);
  }
  private _farmKeyFleets = new BehaviorSubject<any>([]);
  farmKeyFleets = this._farmKeyFleets.asObservable();
  change_farmKeyFleets(newData:any){
    this._farmKeyFleets.next(newData);
  }
   
  private _lowOmis = new BehaviorSubject<any>([]);
  lowOmis = this._lowOmis.asObservable();
  change_lowOmis(newData:any){
    this._lowOmis.next(newData);
  }
  private _lowKeySquads = new BehaviorSubject<any>([]);
  lowKeySquads = this._lowKeySquads.asObservable();
  change_lowKeySquads(newData:any){
    this._lowKeySquads.next(newData);
  } 

  private _lowKeyShips = new BehaviorSubject<any>([]);
  lowKeyShips = this._lowKeyShips.asObservable();
  change_lowKeyShips(newData:any){
    this._lowKeyShips.next(newData);
  } 
  private _lowKeyCharsCapitalShipsShips = new BehaviorSubject<any>([]);
  lowKeyCharsCapitalShipsShips = this._lowKeyCharsCapitalShipsShips.asObservable();
  change_lowKeyCharsCapitalShipsShips(newData:any){
    this._lowKeyCharsCapitalShipsShips.next(newData);
  } 
 
  constructor(private http: HttpClient) { 

    this.changeLoaded(false);
  }

   getData(url:string){
    const url__in = `${this.proxy_cors}${url}`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers});
   }
   getDataForPlayerSub(pid:string){
    const url__in = `${this.proxy_cors}http://api.swgoh.gg/player/${pid}/`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers});
     
   }

   async getDataForGuild(){
    //http://api.swgoh.gg/guild-profile/7skNKIClReOBSq8jfL_F0g
    const url__in = `${this.proxy_cors}http://api.swgoh.gg/guild-profile/7skNKIClReOBSq8jfL_F0g/`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers}).toPromise();

   }

   async getDataForPlayer(pid:string){
    const url__in = `${this.proxy_cors}http://api.swgoh.gg/player/${pid}/`;
    const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, {headers:headers}).toPromise();
     
   }

   objectComparisonCallback = (arrayItemA:any, arrayItemB:any) => {
    if (arrayItemA.galactic_power < arrayItemB.galactic_power) {
      return 1
    }
  
    if (arrayItemA.galactic_power > arrayItemB.galactic_power) {
      return -1
    }
  
    return 0
  }


  objectComparisonCallback_Power = (arrayItemA:any, arrayItemB:any) => {
    if (arrayItemA.data.power < arrayItemB.data.power) {
      return 1
    }
  
    if (arrayItemA.data.power > arrayItemB.data.power) {
      return -1
    }
  
    return 0
  }

  objectComparisonCallback_OK = (arrayItemA:any, arrayItemB:any) => {
    if(arrayItemA.ok === arrayItemB.ok
      && arrayItemA.ultimate === arrayItemB.ultimate
      && arrayItemA.foundText === arrayItemB.foundText
      ){
      return 0;
    }
    if(
      arrayItemA.ok
      && arrayItemA.ultimate
    ){
      return -1;
    }
    if(
      arrayItemA.ok
      && !arrayItemA.ultimate
    ){
      if(arrayItemB.ok && arrayItemB.ultimate){
        return 1;
      }
      return -1;
    }
    if(
      !arrayItemA.ok
      && arrayItemA.foundText
      && arrayItemA.ultimate
      ){
        if(arrayItemB.ok && arrayItemB.ultimate  ){
          return 1;
        }
      return -1;
    }

    return 1;
    if(arrayItemA.ok === arrayItemB.ok){
      return 0;
    }
    if(arrayItemA.ok){
      return -1;
    }
    if(arrayItemA.foundText === arrayItemB.foundText){
      return 0;
    }
    if(arrayItemA.foundText){
      return -1;
    }
    if(arrayItemA.ultimate === arrayItemB.ultimate){
      return 0;
    }
    if(arrayItemA.ultimate){
      return -1;
    }
    return 1;

    //foundText
    return ((arrayItemA.ok || arrayItemA.has_ultimate) === (arrayItemB.ok || arrayItemB.has_ultimate) ) ?0:arrayItemA?-1:1;
   /* if (arrayItemA.data.power < arrayItemB.data.power) {
      return 1asdasd
    }
  
    if (arrayItemA.data.power > arrayItemB.data.power) {
      return -1
    }
  
    return 0*/
  }

   async populateGuild(){
    let data = await this.getDataForGuild();
    let jsonstr = JSON.stringify(data);
    let guild = JSON.parse(jsonstr);
    /*
members.
  player_name
  ally_code
  galactic_power
*/
     let ddt = guild.data.members.sort(this.objectComparisonCallback);
    this.changeGuild(ddt);
   }

  //Populate player from given id
  async populatePlayer(pid: string) {
    try {
      if (!pid) {
        return;
      }
      this.changeError(null);
      this.changeLoaded(false);
      if (!this.shipsobj) {
        await this.populateShips();
      }
      if (!this.unitsobj) {
        await this.populateUnits();
      }
      if (!this.abilitiesobj) {
        await this.populateAbilities();
      }

      let data = await this.getDataForPlayer(pid);

      let jsonstr = JSON.stringify(data);
      let player = JSON.parse(jsonstr);
      let gls_with_ultimate = player.units.filter((x: { data: any; }) => x.data.is_galactic_legend);

     

      this.changeGls(gls_with_ultimate);

      let cats = new categories();
      cats.renew();
      
      this.populateCpitReady(player);
      this.populateCpitReadyClose(player);

      cats.player = player.data;
      this.Loop(cats.legends, player, true, gls_with_ultimate);

       cats.legends.farms.sort(this.objectComparisonCallback_OK);


      this.Loop(cats.events, player);
      cats.events.farms.sort(this.objectComparisonCallback_OK);


      this.Loop(cats.eventslow, player);
      cats.eventslow.farms.sort(this.objectComparisonCallback_OK);
      this.Loop(cats.goodteams, player);

      //this.Loop(cats.cpit, player);
      //this.changeCpit(cats.cpit.farms);
      //let cpitlw = cats.cpit.farms.filter(x => x.ok);
      //this.changeCpitLW(cpitlw);

      this.Loop(cats.krayt,player);
      cats.krayt.farms.forEach(x=>x.units.sort((a,b)=>b.power-a.power));
      this.changeKrayt(cats.krayt.farms);

      this.Loop(cats.sbp,player);
      cats.sbp.farms.forEach(x=>x.units.sort((a,b)=>b.power-a.power));
      this.changeSbp(cats.sbp.farms);



      let events = cats.events.farms.filter(x => x.ok);
      this.changeEvnts(events);
      this.changeEventsLow(cats.eventslow.farms);
      let eventslw = cats.eventslow.farms.filter(x => x.ok);
      this.changeEvntsLW(eventslw);

      this.changeGoodTeams(cats.goodteams.farms);
      let gtlw = cats.goodteams.farms.filter(x => x.ok);
      this.changeGoodTeamsLW(gtlw);

      try {
        var d1 = new Date(cats.player.last_updated);
        var d2 = new Date();
        cats.player.last_update_sub = (Math.abs(d2.getTime() - d1.getTime()) / 3600000).toFixed(0);
      } catch (e) {
        console.error(e);
      }
      this.changePlayerData(cats.player);
      this.changeEvents(cats.events.farms);
      this.changeLegends(cats.legends.farms);
      
      this.Loop(cats.farmHigh, player);
      this.loopFarmText(cats.farmHigh, player);
      this.changefrmHigh(cats.farmHigh.farms);
   
      this.Loop(cats.farmTWSquads, player);
      this.loopFarmText(cats.farmTWSquads, player);
      this.changefarmTWSquads(cats.farmTWSquads.farms);

      this.Loop(cats.farmTBSquads, player);
      this.loopFarmText(cats.farmTBSquads, player);
      this.changefarmTBSquads(cats.farmTBSquads.farms);

      this.Loop(cats.farmGLSquads, player);
      this.loopFarmText(cats.farmGLSquads, player);
      this.change_farmGLSquads(cats.farmGLSquads.farms);

      this.Loop(cats.farmGLShips, player);
      this.loopFarmText(cats.farmGLShips, player);
      this.change_farmGLShips(cats.farmGLShips.farms);

      this.Loop(cats.farmKeySquads, player);
      this.loopFarmText(cats.farmKeySquads, player);
      this.change_farmKeySquads(cats.farmKeySquads.farms);

  
      this.Loop(cats.farmCapitalShips, player);
      this.loopFarmText(cats.farmCapitalShips, player);
      this.change_farmCapitalShips(cats.farmCapitalShips.farms);
      
      this.Loop(cats.farmKeyFleets, player);
      this.loopFarmText(cats.farmKeyFleets, player);
      this.change_farmKeyFleets(cats.farmKeyFleets.farms);

      this.Loop(cats.lowKeyCharsCapitalShipsShips, player);
      this.loopFarmText(cats.lowKeyCharsCapitalShipsShips, player);
      this.change_lowKeyCharsCapitalShipsShips(cats.lowKeyCharsCapitalShipsShips.farms);

      this.Loop(cats.lowKeyShips, player);
      this.loopFarmText(cats.lowKeyShips, player);
      this.change_lowKeyShips(cats.lowKeyShips.farms);

      this.Loop(cats.lowKeySquads, player);
      this.loopFarmText(cats.lowKeySquads, player);
      this.change_lowKeySquads(cats.lowKeySquads.farms);

      this.Loop(cats.lowOmis, player);
      this.loopFarmText(cats.lowOmis, player);
      this.change_lowOmis(cats.lowOmis.farms);

      this.Loop(cats.farmMedium, player);
      this.changefrmMedium(cats.farmMedium.farms);
      this.Loop(cats.farmLow, player);
      this.changefrmLow(cats.farmLow.farms);

      this.changeLoaded(true);
      return cats;
    } catch (e) {
      this.changeLoaded(true);
      console.error(e);
      this.changeError(e);
      return null;
    }
  }

  private loopFarmText(eventslow: any, player: any){
    for (let i = 0; i <= eventslow.farms.length - 1; i++) {
      let frm:Farm = eventslow.farms[i];
      let cnt = 0;
      let total = 0;
      for (let j = 0; j <= frm.units.length - 1; j++) {
        let unt = frm.units[j];
        total++;
        if(unt.allOK()){
          cnt++;
        }
      }
      for (let j = 0; j <= frm.ships.length - 1; j++) {
        let unt = frm.ships[j];
        total++;
        if(unt.allOK()){
          cnt++;
        }
       }
       frm.canhide=false;
       frm.foundText = `${cnt} / ${total}`;
       if(cnt == 0){
        frm.ultimate=false;
        frm.ok = false;
       }
       if(cnt == total){
        frm.ultimate=true;
        frm.ok = true;
        frm.foundText = null;
       }
       if(cnt < total){
        frm.ultimate=true;
        frm.ok = false;
       }
    }
  }

  //Main loop of the farms function. This is the core of the code
  private Loop(eventslow: any, player: any, utl: boolean = false, gllist: any = null) {
    //Loop all farms from the specified list
    for (let i = 0; i <= eventslow.farms.length - 1; i++) {
      let frm:Farm = eventslow.farms[i];
      //Try and get the image
      try {
        frm.image = this.unitsobj.find((x: { name: any; }) => x.name == frm.name).image;
      } catch (e) {
        try{
          frm.image = this.shipsobj.find((x: { name: any; }) => x.name == frm.name).image;
        }catch(e){

        }
      }

      //Is ok?
      frm.ok = player.units.find((x: { data: { name: string; }; }) => x.data.name == frm.name) != null;

      //Fing in the unit lists
      let found = player.units.find((x: { data: { name: string; }; }) => x.data.name == frm.name);
      if (found) {
        frm.setFound(found);
        if (found.data.rarity == 7) {
          frm.ok = true;
        } else {
          frm.ok = false;
        }
        //frm.ok = true;
      } else {
        let fnd =  this.unitsobj.find((x: { name: any; }) => x.name == frm.name);
        if(!fnd){
          fnd =  this.shipsobj.find((x: { name: any; }) => x.name == frm.name);
        }
        frm.setFound2(fnd);
        frm.ok = false;
      }


      if (utl && gllist) {
        //if check ultimate and gllist for the player is defined 
        frm.ultimate = gllist.find((x: { data: any; }) => x.data.name == frm.name && x.data.has_ultimate) != null;
      } else {
        frm.ultimate = true;
      }

      //Check units
      for (let j = 0; j <= frm.units.length - 1; j++) {
        let unt = frm.units[j];
        let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
        let itm_all = null;
        try {
          itm_all = this.unitsobj.find((x: { name: any; }) => x.name == itm.data.name);
        } catch (e) {
          itm_all = this.unitsobj.find((x: { name: any; }) => x.name == unt.name);
        }
        unt.setPlayerItem(itm, itm_all,this.abilitiesobj);
      }

      //Check ships
      for (let j = 0; j <= frm.ships.length - 1; j++) {
        let unt = frm.ships[j];
        let itm = player.units.find((x: { data: any; }) => x.data.name == unt.name);
        let itm_all = null;
        try {
          itm_all = this.shipsobj.find((x: { name: any; }) => x.name == itm.data.name);
        } catch (e) {
          itm_all = this.shipsobj.find((x: { name: any; }) => x.name == unt.name);
        }
        unt.setPlayerItem(itm, itm_all,this.abilitiesobj);
      }
    }
  }

  //Fetch data for ships and units
  async getDataFor(option: string) {
    const url__in = `${this.proxy_cors}http://api.swgoh.gg/${option}/`;
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.get(url__in, { headers: headers }).toPromise();
  }


  //Populate abilities
  async populateAbilities() {
    let data = await this.getDataFor('abilities');
    this.changeAbilities(data);
    return data;
  }


  //Populate ships
  async populateShips() {
    let data = await this.getDataFor('ships');
    this.changeShips(data);
    return data;
  }

  //Populate units
  async populateUnits() {
    let data = await this.getDataFor('characters');
    this.changeUnits(data);
    return data;
  }

  populateCpitReady(player:any){
    return;
    /*
    try {
      let relicunits_cpitready = player.units.filter((x: { data: any; }) => (x.data.relic_tier-2) >= 5);
      let relicunits_cpitready_sorted = relicunits_cpitready.sort(this.objectComparisonCallback_Power);
      let indx = 1;
      let frm_list: Farm[] = [];
      this.changeCpitReady(frm_list);
      this.changeCpitReadyCounter(0);
       let frm_cpit = new Farm(
        `Relic 5 toons (${indx})`,
        'list',
        'all',
        [],
        [],
        ''
      );
      frm_cpit.ok = true;
      frm_cpit.ultimate=true;
      frm_cpit.canhide=false;
      frm_cpit.units = [];
      for (let i = 0; i <= relicunits_cpitready_sorted.length - 1; i++) {
        let itm = relicunits_cpitready_sorted[i];
        let frm_unit = new FarmUnit(itm.data.name, 7, 13, 5);
        let itm_all = null;
        try {
          itm_all = this.unitsobj.find((x: { name: any; }) => x.name == itm.data.name);
        } catch (e) {
          itm_all = this.unitsobj.find((x: { name: any; }) => x.name == frm_unit.name);
        }
        frm_unit.setPlayerItem(itm, itm_all,this.abilitiesobj);

        if(frm_cpit.units.length < 5){
          frm_cpit.units.push(frm_unit);
        }else{
          frm_list.push(frm_cpit);
          indx++;
          frm_cpit =  new Farm(
            `Relic 5 toons (${indx})`,
            'list',
            'all',
            [],
            [],
            ''
          );
          frm_cpit.ok = true;
          frm_cpit.ultimate=true;
          frm_cpit.canhide=false;
          frm_cpit.units.push(frm_unit);
        }
      }
      if(!frm_list.find(x=>x.name == frm_cpit.name)){
        frm_list.push(frm_cpit);

      }
      this.changeCpitReady(frm_list);
      this.changeCpitReadyCounter(relicunits_cpitready_sorted.length);
    } catch (e) {
      console.error(e);
    }*/
  }

  populateCpitReadyClose(player:any){
    return;
    /*
    try {
      let relicunits_cpitready = player.units.filter((x: { data: any; }) => (x.data.relic_tier-2) >= 1 && (x.data.relic_tier-2) < 5);
      let relicunits_cpitready_sorted = relicunits_cpitready.sort(this.objectComparisonCallback_Power);
      let indx = 1;
      let frm_list: Farm[] = [];
      this.changeCpitReadyClose(frm_list);
      this.changeCpitReadyCounterClose(0);
       let frm_cpit = new Farm(
        `Close to Relic 5 toons (${indx})`,
        'list',
        'all',
        [],
        [],
        ''
      );
      frm_cpit.ok = true;
      frm_cpit.ultimate=true;
      frm_cpit.canhide=false;
      frm_cpit.units = [];
      for (let i = 0; i <= relicunits_cpitready_sorted.length - 1; i++) {
        let itm = relicunits_cpitready_sorted[i];
        let frm_unit = new FarmUnit(itm.data.name, 7, 13, 5);
        let itm_all = null;
        try {
          itm_all = this.unitsobj.find((x: { name: any; }) => x.name == itm.data.name);
        } catch (e) {
          itm_all = this.unitsobj.find((x: { name: any; }) => x.name == frm_unit.name);
        }
        frm_unit.setPlayerItem(itm, itm_all,this.abilitiesobj);

        if(frm_cpit.units.length < 5){
          frm_cpit.units.push(frm_unit);
        }else{
          frm_list.push(frm_cpit);
          indx++;
          frm_cpit =  new Farm(
            `Close to Relic 5 toons (${indx})`,
            'list',
            'all',
            [],
            [],
            ''
          );
          frm_cpit.ok = true;
          frm_cpit.ultimate=true;
          frm_cpit.canhide=false;
          frm_cpit.units.push(frm_unit);
        }
      }
      if(!frm_list.find(x=>x.name == frm_cpit.name)){
        frm_list.push(frm_cpit);

      }
      this.changeCpitReadyClose(frm_list);
      this.changeCpitReadyCounterClose(relicunits_cpitready_sorted.length);
    } catch (e) {
      console.error(e);
    } */
  }


   
}
