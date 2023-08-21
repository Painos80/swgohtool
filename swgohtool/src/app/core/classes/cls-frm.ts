export class ClsFrm{
  //static hidecompleted:boolean = true;
  //static hidecompletedItems:boolean = true;
  static tab1_active:boolean=false;
  static tab2_active:boolean=false;
  static tab3_active:boolean=false;
  static tab4_active:boolean=false;

}

export class Farm {
  name: string;
  type: string;
  side: string;
  units: FarmUnit[];
  ships: FarmUnit[];
  image: any = null;
  ok: boolean = false;
  ultimate: boolean = false;
  found: any;
  foundText: any = null;
  description: string;
  hasminimumpower: boolean = false;
  url:any=null;
  canhide:boolean=true;

  constructor(name: string, type: string, side: string, units: FarmUnit[], ships: FarmUnit[], desc: any = null, hasminimumpower: boolean = false,canhide:boolean=true) {
    this.name = name
    this.side = side
    this.units = units
    this.ships = ships
    this.type = type;
    this.foundText = null;
    this.description = desc;
    this.hasminimumpower = hasminimumpower;
    this.canhide=canhide;
  }

  setFound(found: any) {
    this.found = found;
    if (found.data.rarity != 7) {
      this.foundText = `Stars:${found.data.rarity}/7`;
    } else {
      this.foundText = null;
    }

    if(found && found.hasOwnProperty('data') && found.data && found.data.hasOwnProperty('url') && found.data.url){
      this.url = `https://swgoh.gg${found.data.url}`;
    }else if(found && found.hasOwnProperty('url') && found.url){
      this.url = `${found.url}`;
    } else{
      this.url=null;
    }
  }

  setFound2(found: any) {
    

    if(found && found.hasOwnProperty('data') && found.data && found.data.hasOwnProperty('url') && found.data.url){
      this.url = `https://swgoh.gg${found.data.url}`;
    }else if(found && found.hasOwnProperty('url') && found.url){
      this.url = `${found.url}`;
    } else{
      this.url=null;
    }
  }
}

export class FarmUnit {
  name: string
  stars: number
  gear_level?: number
  relic_level?: number
  minimum_power_toon?: number = 0;
  minimum_power_ship?: number = 0;
  player_itm: any;
  player_itm_orig: any;

  rarityOK: boolean = false;
  gearOK: boolean = false;
  relicOK: boolean = false;
  minimumpowerok: boolean = false;

  stars_on: number = 0;
  gear_level_on: number = 0;
  relic_level_on: number = 0;
  power: number = 0;

  image: any = null;
  url:any=null;

  omicron_abilities:any=[];
  omicron_abilities_obj:any=[];
  omicron_abilities_req:any=[];

  constructor(name: string, stars: number, gear_level?: number, relic_level?: number, minimum_power_toon?: number, minimum_power_ship?: number, omicron_abilities_req?:any) {
    this.name = name;
    this.stars = stars;
    this.gear_level = gear_level;
    this.relic_level = relic_level;
    this.minimum_power_toon = minimum_power_toon;
    this.minimum_power_ship = minimum_power_ship;
    if(omicron_abilities_req){
      this.omicron_abilities_req = omicron_abilities_req;
    }else{
      this.omicron_abilities_req = [];
    }
  }

  allOK() {
    return this.gearOK && this.relicOK && this.rarityOK && this.minimumpowerok;
  }

  hasTheToon() {
    return this.stars_on > 0;
  }

  setPlayerItem(item: any, item_orig: any, abilities:any) {
/*
"base_id":"uniqueskill_MACEWINDU02",
"name":"Sense Weakness",
"image":"https://game-assets.swgoh.gg/tex.abilityui_passive_senseweakness.png",
"url":"//swgoh.gg/characters/mace-windu/#sense-weakness",
"tier_max":9,
"is_zeta":true,
"is_omega":false,
"is_omicron":true,
"description":"Mace gains 30% Offense. At the start of Mace's turn, dispel Stealth on all enemies and a random enemy (excluding raid bosses and Galactic Legends) is inflicted with Speed Down for 1 turn and Shatterpoint, which can't be evaded or resisted. Shatterpoint is dispelled at the end of each ally's turn. When an ally damages an enemy with Shatterpoint, all allies recover 10% Protection, and all Galactic Republic Jedi allies gain Foresight for 1 turn.\n\nShatterpoint: Receiving damage dispels Shatterpoint and reduces Defense, Max Health, and Offense by 10% for the rest of the encounter; enemies can ignore Taunt to target this unit\n\n[E7E7E7]While in Territory Wars: At the start of each other Light Side ally's turn, a random enemy (excluding Galactic Legends) is inflicted with Speed Down for 1 turn and Shatterpoint, which can't be evaded or resisted. When an ally damages an enemy with Shatterpoint, all allies gain 5% Turn Meter.",
"combat_type":1,
"omicron_mode":8,
"type":4,
"character_base_id":"MACEWINDU",
"ship_base_id":null,
"omicron_battle_types":["TERRITORY_WAR_BATTLE"]},

TW: TERRITORY_WAR_BATTLE
TB: TERRITORY_TOURNAMENT_BATTLE
*/

    if (item_orig && item_orig.hasOwnProperty('image') && item_orig.image) {
      this.image = item_orig.image;
      
    }
    if(item && item.hasOwnProperty('data') && item.data && item.data.hasOwnProperty('url') && item.data.url){
      this.url = `https://swgoh.gg${item.data.url}`;
    }else if(item_orig && item_orig.hasOwnProperty('url') && item_orig.url){
      this.url = `${item_orig.url}`;
    }else{
      this.url=null;
    }
    this.player_itm = item;
    this.player_itm_orig = item_orig;
    try{
    /*  if (this.name == "Rebel Officer Leia Organa") {
        console.log('fafa');
        console.log(abilities.filter((x: { character_base_id: any; is_omicron: boolean }) => x.character_base_id == this.player_itm_orig.base_id ));
        console.log(abilities.filter((x: { character_base_id: any; is_omicron: boolean }) => x.is_omicron ));
      }*/
     /* if (this.name == "Second Sister") {
        console.log('fafa');
        console.log(abilities.filter((x: { character_base_id: any; is_omicron: boolean }) => x.character_base_id == this.player_itm_orig.base_id ));
      }*/
    this.omicron_abilities = abilities.filter((x: { character_base_id: any; is_omicron: boolean }) => x.character_base_id == this.player_itm_orig.base_id && x.is_omicron);
    if (this.omicron_abilities.length > 0) {
      this.omicron_abilities.forEach((element: {
        base_id: any; info: any; "": any;
      }) => {
        this.omicron_abilities_obj.push({
          label: element.base_id, equiped: (!this.player_itm)?false:
            this.player_itm.data.omicron_abilities.filter((x: any) => x == element.base_id).length > 0, info: element, required_farm: this.omicron_abilities_req.filter((x: any)=>x == element.base_id).length > 0
        });

      });

    }
  }catch(e){
    console.error(e);
  }

    if (item && item.hasOwnProperty('data') && item.data) {
      this.stars_on = item.data.rarity;
      this.power = item.data.power;
      this.gear_level_on = item.data.gear_level;
      this.relic_level_on = item.data.relic_tier - 2;
      if (this.relic_level_on < 0) {
        this.relic_level_on = 0;
      }

     

      this.rarityOK = (this.stars_on >= this.stars);
      if (this.gear_level) {
        this.gearOK = (this.gear_level_on >= this.gear_level);
      } else {
        this.gearOK = true;
      }
      if (this.relic_level) {
        this.relicOK = (this.relic_level_on >= this.relic_level);
      } else {
        this.relicOK = true;
      }
      

 

    } else {
      this.gearOK = false;
      this.relicOK = false;
      this.rarityOK = false;
    }

    if (this.minimum_power_ship) {
      if (this.minimum_power_ship && item && item.hasOwnProperty('data') && item.data) {
        if (this.minimum_power_ship > item.data.power) {
          this.minimumpowerok = false;
        } else {
          this.minimumpowerok = true;
        }
       } else {
        this.minimumpowerok = true;
        if (this.minimum_power_ship) {
          this.minimumpowerok = false;
        }
      }
    }
    if (this.minimum_power_toon) {
      if (this.minimum_power_toon && item && item.hasOwnProperty('data') && item.data) {
        if (this.minimum_power_toon > item.data.power) {
          this.minimumpowerok = false;
        } else {
          this.minimumpowerok = true;
        }
       } else {
        this.minimumpowerok = true;
        if (this.minimum_power_toon) {
          this.minimumpowerok = false;
        }
      }
    }

    if (!this.minimum_power_ship && !this.minimum_power_toon) {
      this.minimumpowerok = true;
    }
 

    
  }
}

export const spacer = new FarmUnit('Darth Revan', 0)

export class FarmCategory {
  name: string
  farms: Farm[]

  public constructor(name: string, farms: Farm[]) {
    this.name = name
    this.farms = farms
  }
}