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
        this._datavalues.next(newData);
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
            this.populateGuild(data.get_default.guild);
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
                        this.generateItemFromGG(dt_reqs.requirements, list);

                    }

                }
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

            if (!this._defaultvaluesobj || !this._datavaluesobj) {
                await this.populateJSON();
            }

            let data = await this.getDataForPlayer(pid);

            let jsonstr = JSON.stringify(data);
            let player = JSON.parse(jsonstr);
            console.log(pid);

            let json_copy = JSON.stringify(this._datavaluesobj);
            let item_json = JSON.parse(json_copy);

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

            console.log(this._datavaluesobj);
            console.log(this._defaultvaluesobj);

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

}
