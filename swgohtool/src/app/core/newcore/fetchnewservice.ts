import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Globals } from "../globals";
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Igllist, IgllistValuesExtented_Item } from "./interfaces/igllist";
import { ClsDefault } from "./classes/cls-default";

@Injectable({
    providedIn: 'root'
})
export class Fetchnewservice {
    proxy_cors = "https://panosweb.se/px/proxy.php?url=";
    api_url = "https://swgoh.gg/api";

    constructor(private http: HttpClient) {
        this.changeLoaded(false);
    }

    private _loaded = new BehaviorSubject<boolean>(false);
    loaded = this._loaded.asObservable();
    changeLoaded(newData: any) {
        this._loaded.next(newData);
    }

    private _error = new BehaviorSubject<any>(null);
    error = this._error.asObservable();
    changeError(newData: any) {
        this._error.next(newData);
    }

    private _defaultvalues = new BehaviorSubject<any>([]);
    defaultvalues_obs$ = this._defaultvalues.asObservable();
    _defaultvaluesobj: any;
    changeDefaults(newData: any) {
        this._defaultvaluesobj = newData;
        this._defaultvalues.next(newData);
    }

    private _datavalues = new BehaviorSubject<any>([]);
    datavalues_obs$ = this._datavalues.asObservable();
    _datavaluesobj: any;
    changeData(newData: any) {
        this._datavaluesobj = newData;
        if(newData && newData.hasOwnProperty('lists')){
            this.changeDataLists(newData.lists);
        }
        this._datavalues.next(newData);
    }

    private _datavaluesList = new BehaviorSubject<any>([]);
    _datavaluesList_obs$ = this._datavaluesList.asObservable();
    _datavaluesListobj: any;
    changeDataLists(newData: any) {
        this._datavaluesListobj = newData;
        this._datavaluesList.next(newData);
    }

    private _guild = new BehaviorSubject<any>([]);
    guild = this._guild.asObservable();
    _guildobj: any;
    changeGuild(newData: any) {
        this._guildobj = newData;
        this._guild.next(newData);
    }
    private _guild1 = new BehaviorSubject<any>([]);
    guild1 = this._guild1.asObservable();
    _guildobj1: any;
    changeGuild1(newData: any) {
        this._guildobj1 = newData;
        this._guild1.next(newData);
    }
    private _playerdata = new BehaviorSubject<any>([]);
    playerdata = this._playerdata.asObservable();
    _playerobj:any;
    changePlayerData(newData:any){
      this._playerobj  = newData;
      this._playerdata.next(newData);
    }
  
    private _player = new BehaviorSubject<any>([]);
    player = this._player.asObservable();
    _playerobj1:any;
    changePlayer(newData:any){
      this._playerobj1  = newData;
      this._player.next(newData);
    }

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

    async getDataForGuild(guild: string) {
        //Feddy: https://swgoh.gg/api/guild-profile/7skNKIClReOBSq8jfL_F0g
        //Dianogas: IbRkVS2bTM-tJ92t92I-Gg
        const url__in = `${this.proxy_cors}${this.api_url}/guild-profile/${guild}/`;
        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.get(url__in, { headers: headers }).toPromise();

    }

    async getDataForPlayer(pid: string) {
        const url__in = `${this.proxy_cors}${this.api_url}/player/${pid}/`;
        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.get(url__in, { headers: headers }).toPromise();

    }


    //Fetch data for ships and units
    async getDataFor(option: string) {
        const url__in = `${this.proxy_cors}${this.api_url}/${option}/`;
        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.get(url__in, { headers: headers }).toPromise();
    }

    private URL = './assets/data/gllist.json';
    async getFromURL() {
        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
        return this.http.get<Igllist>(this.URL, { headers: headers }).toPromise();

    }

    async populateJSON() {
        let data = await this.getFromURL();
        if (data) {
            //this.populateGuild(data.get_default.guild);
            let list: Array<ClsDefault> = [];
            for (let i = 0; i <= data.get_default.values.length - 1; i++) {
                let label = data.get_default.values[i];
                let data_1 = await this.getDataFor(label);
                let d_v = new ClsDefault();
                d_v.label = label;
                d_v.changeValues(data_1);
                list.push(d_v);
            }
            this.changeDefaults(list);
            for (let i = 0; i <= data.lists.length - 1; i++) {
                let dt = data.lists[i];
                this.generateItemFromGG(dt.values, list);
                for (let y = 0; y <= dt.values.length - 1; y++) {
                    let dt_reqs = dt.values[y];
                    if (dt_reqs.hasOwnProperty("requirements") && dt_reqs.requirements) {
                        if(dt_reqs.sort){
                           dt_reqs.requirements.sort(this.objectComparisonCallbackRelic)
                
                        }
                        this.generateItemFromGG(dt_reqs.requirements, list);

                    }
                    console.log(dt.values);
                }
                console.log(dt);
            }
        }
        this.changeData(data);
        console.log(this._datavaluesobj);
        console.log(this._defaultvaluesobj);
        return data;
    }

    async populatePlayer(pid: string) {
        try {
            if (!pid) {
                return;
            }
            if (!this.shipsobj) {
                await this.populateShips();
              }
              if (!this.unitsobj) {
                await this.populateUnits();
              }
              if (!this.abilitiesobj) {
                await this.populateAbilities();
              }

            if (!this._defaultvaluesobj || !this._datavaluesobj) {
                await this.populateJSON();
            }

            let data = await this.getDataForPlayer(pid);

            let jsonstr = JSON.stringify(data);
            let player = JSON.parse(jsonstr);
            console.log(pid);

            let json_copy = JSON.stringify(this._datavaluesobj);
            let item_json = JSON.parse(json_copy);

            let mods_1519 = player.mods.filter((x: { secondary_stats: any[]; })=> x.secondary_stats.find((y: { name: string; value: number; })=>y.name == 'Speed' && (y.value >= 150000 && y.value <= 190000)));
            let mods_2024 = player.mods.filter((x: { secondary_stats: any[]; })=> x.secondary_stats.find((y: { name: string; value: number; })=>y.name == 'Speed' && (y.value >= 200000 && y.value <= 240000)));
            let mods_25 = player.mods.filter((x: { secondary_stats: any[]; })=> x.secondary_stats.find((y: { name: string; value: number; })=>y.name == 'Speed' && (y.value >= 250000)));

            let modscore = ((mods_1519.length * 0.8) + (mods_2024.length) + (mods_25.length * 1.6))/ (player.data.character_galactic_power / 100000); 
            let hotutils = Math.round((modscore + Number.EPSILON) * 100) / 100;
/*
*Mod Quality: ((# of 15-19 Speed * 0.8) + (# of 20-24 Speed) + (# of 25+ Speed * 1.6)) / (squadGP / 100,000)
*Gear Quality: (Number of G12+ + G13 + Relic Score) / (Total GP / 100000) | Relic score: 1 + (0.2 bonus per relic tier) (ex: r0 = 1, r1 = 1.2, ..., r8 = 2.8, r9 = 3.2)
*Total Quality: Mod Quality + Gear Quality
*/
let mods_1519_2 = player.mods.filter((x: { secondary_stats: any[]; })=> x.secondary_stats.find((y: { name: string; value: number; })=>y.name == 'Speed' && (y.value >= 150000 )));
let modscore2 = (mods_1519_2.length)/ (player.data.character_galactic_power / 100000); 
let omega = Math.round((modscore2 + Number.EPSILON) * 100) / 100;

let g12 = player.units.filter((x: { data: { gear_level: number; }; })=> x.data.gear_level == 12).length;
let g13 = player.units.filter((x: { data: { gear_level: number; }; })=> x.data.gear_level == 13).length;
let b0 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 0+2).length;
let b1 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 1+2).length * 1.2;
let b2 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 2+2).length * 1.4;
let b3 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 3+2).length * 1.6;
let b4 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 4+2).length * 1.8;
let b5 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 5+2).length * 2;
let b6 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 6+2).length * 2.2;
let b7 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 7+2).length * 2.4;
let b8 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 8+2).length * 2.8;
let b9 = player.units.filter((x: { data: { gear_level: number; relic_tier: number; }; })=> x.data.gear_level == 13 && x.data.relic_tier == 9+2).length * 3.2;
let relic_score = 1 + b0 + b1+b2+b3+b4+b5+b6+b7+b8+b9;
let gear_score = (g12+g13+ relic_score)/ (player.data.galactic_power  / 100000); 
let g_score = Math.round((gear_score + Number.EPSILON) * 100) / 100;
//


/*
Mod Quality: Number of +15 Speeds / (squad GP / 100000)
  Gear Quality: (Number of G12+ + G13 Bonus Score) / (Total GP / 100000)
  G13 Bonus score: 1 + (0.2 bonus per relic tier) (ex: r0 = 1, r1 = 1.2, ..., r7 = 2.4)
  Total Quality: Mod Quality + Gear Quality
*/
item_json.modscores.values[0].value = hotutils;
item_json.modscores.values[1].value = omega;
item_json.modscores.values[2].value = g_score;
item_json.modscores.values[3].value = Math.round(((hotutils + g_score) + Number.EPSILON) * 100) / 100;//hotutils + g_score;
item_json.modscores.values[4].value = Math.round(((omega + g_score) + Number.EPSILON) * 100) / 100;//omega + g_score;
/*"modscores":{
    "description": "Mod scores",
    "values":[
        {"hotutilities": ""},
        {"omega": ""}
    ]
}*/

            for (let i = 0; i <= item_json.lists.length - 1; i++) {
                let dt = item_json.lists[i];
                //dt.player_item = player.units.find((x: { data: { name: any; }; } )=>x.data.name == dt.name);
                //this.generateItemFromGG(dt.values, this._defaultvaluesobj);
                for (let y = 0; y <= dt.values.length - 1; y++) {
                    let dt_reqs = dt.values[y];
                    dt_reqs.player_item = player.units.find((x: { data: { name: any; }; } )=>x.data.name == dt_reqs.name);
                    if (dt_reqs.hasOwnProperty("requirements") && dt_reqs.requirements) {
                        for (let z = 0; z <= dt_reqs.requirements.length - 1; z++) {
                            let dt_reqs1 = dt_reqs.requirements[z];
                            dt_reqs1.player_item = player.units.find((x: { data: { name: any; }; } )=>x.data.name == dt_reqs1.name);
                        }        
                        //this.generateItemFromGG(dt_reqs.requirements, this._defaultvaluesobj);

                    }

                }
            }
            this.changeData(item_json);
this.changePlayerData(player.data);
this.changePlayer(player);
            console.log(this._datavaluesobj);
            console.log(this._defaultvaluesobj);
            this.changeLoaded(true);

        } catch (e) {
            console.error(e);
        }
    }
    async populateGuild(guid: string) {
        let data = await this.getDataForGuild(guid);
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
        this.changeGuild1(guild.data.name);
    }

    async generateGuild(guid: string){
        let data = await this.getDataForGuild(guid);
        let jsonstr = JSON.stringify(data);
        let guild = JSON.parse(jsonstr);
        /*
    members.
      player_name
      ally_code
      galactic_power
    */
        let ddt = guild.data.members.sort(this.objectComparisonCallback);
        guild.members = ddt;
        return guild;
    }

    generateItemFromGG(list_in: any, list: Array<ClsDefault>) {
        for (let i = 0; i <= list_in.length - 1; i++) {
            let char_name = list_in[i].name;
     
            for (let x = 0; x <= list.length - 1; x++) {
                try {
                    let values = list[x].valuesobj;
                    let found = values.find((x: any) => x.name == char_name);
                    if (found) {
                        list_in[i].item_from_gg = found;
                    }
                 
                } catch (e) {
                    console.error(e);
                }
            }
        }
       
    }


    objectComparisonCallback = (arrayItemA: any, arrayItemB: any) => {
        if (arrayItemA.galactic_power < arrayItemB.galactic_power) {
            return 1
        }

        if (arrayItemA.galactic_power > arrayItemB.galactic_power) {
            return -1
        }

        return 0
    }
    
    objectComparisonCallbackRelic = (arrayItemA: any, arrayItemB: any) => {
        if (arrayItemA.relic_level < arrayItemB.relic_level) {
            return 1
        }

        if (arrayItemA.relic_level > arrayItemB.relic_level) {
            return -1
        }

        return 0
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

  private _hidecompleted = new BehaviorSubject<any>(false);
  hidecompleted = this._hidecompleted.asObservable();
  hidecompletedValue = false;
  changeHideCompleted(newData:any){
    this.hidecompletedValue = newData;
    this._hidecompleted.next(newData);
  }
  
  private _hidecompletedItems = new BehaviorSubject<any>(false);
  hidecompletedItems = this._hidecompletedItems.asObservable();
  hidecompletedItemsValue = false;
  changeHideCompletedItems(newData:any){
    this.hidecompletedItemsValue = newData;
    this._hidecompletedItems.next(newData);
  }

}
