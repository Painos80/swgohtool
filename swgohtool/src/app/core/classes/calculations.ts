export class Calculations {
    
  class_header_no_ultimate = "text-dark bg-warning";
  class_header_no_rarity = "text-dark bg-warning";
  class_header_no_item = "text-danger";
  class_header_no_ok = "text-success";
  class_header_no_na = "text-white";

  class_no_rarity = "text-warning";
  class_no_gear = "text-warning";
  class_no_relic = "text-success-2 bg-dark";
  class_no_power_toon = "text-warning";
  class_no_power_ship = "text-warning";
  class_no_item = "text-danger";
  class_no_ok = "text-muted text-white bg-dark";
  class_no_na = "text-white";

  calculateLeadItem(item: any): string {
    if (!item) {
      return this.class_header_no_na;
    }
    let hasItem = this.hasItem(item);
    if (!hasItem) {
      if(!this.calculateURL(item)){
        return this.class_header_no_ok;
      }
      return this.class_header_no_item;
    }
    if (item.hasOwnProperty('has_ultimate') && item.has_ultimate) {
      let has_ultimate = (item.hasOwnProperty('player_item') && item.player_item && item.hasOwnProperty('has_ultimate') && item.has_ultimate && item.player_item.data.has_ultimate);
      if (!has_ultimate) {
        return this.class_header_no_ultimate;
      }
    }
    let hasRarity = this.hasRarity(item);
    if (!hasRarity) {
      return this.class_header_no_rarity;
    }

    return this.class_header_no_ok;

  }
  calculateItem(item_1: any): string {
    if (!item_1) {
      return this.class_no_na;
    }
    let hasItem = this.hasItem(item_1);
    let hasRarity = this.hasRarity(item_1);
    let hasRelic = this.hasRelic(item_1);
    let hasGear = this.hasGear(item_1);
    if (!hasItem) {
      return this.class_no_item;
    }
    if (!hasRarity) {
      if(item_1 && item_1.player_item.data.gear_level < 12 && item_1.player_item.data.relic_tier < 3){
        return `text-g${item_1.player_item.data.gear_level} `;
      }
      let hasPowerToon = this.hasPowerToon(item_1);
      if (!hasPowerToon) {
        return this.class_no_power_toon;
      }
      let hasPowerShip = this.hasPowerShip(item_1);
      if (!hasPowerShip) {
        return this.class_no_power_ship;
      }
      return this.class_no_rarity ;
    }
    if (!hasGear) {
      //return "text-danger";
      //player_item.data.gear_level
      if(item_1 && item_1.player_item.data.gear_level < 12 && item_1.player_item.data.relic_tier < 3){
        return `text-g${item_1.player_item.data.gear_level} `;
      }else{
      return this.class_no_gear;
      }
    }
    if (!hasRelic) {
      if(item_1 && item_1.player_item.data.gear_level < 12 && item_1.player_item.data.relic_tier < 3){
        return `text-g${item_1.player_item.data.gear_level} `;
      }
      return this.class_no_relic;
    }

    let hasPowerToon = this.hasPowerToon(item_1);
    if (!hasPowerToon) {
      return this.class_no_power_toon;
    }
    let hasPowerShip = this.hasPowerShip(item_1);
    if (!hasPowerShip) {
      return this.class_no_power_ship;
    }
    return this.class_no_ok;
  }
  calculateURL(item:any):any{
    try{
    if(this.hasItem(item)){
      return 'https://swgoh.gg' + item.player_item.data.url;
    }else{
      return 'https://' + item.item_from_gg.url;
    }
  }catch(e){
    //console.error(e);
  }
    return null;
  }
  hasItem(item: any): boolean {
    return (item.hasOwnProperty('player_item') && item.player_item);
  }
  hasRarity(item_1: any): boolean {
    if (!item_1.stars) {
      return true;
    }
    return (item_1.hasOwnProperty('player_item') && item_1.player_item && item_1.player_item.data.rarity >= item_1.stars);
  }
  hasRelic(item_1: any): boolean {
    if (!item_1.relic_level) {
      return true;
    }
    if (item_1.hasOwnProperty('player_item') && item_1.player_item && item_1.player_item.data.relic_tier - 2 < 0) {
      return false;
    }
    return (item_1.hasOwnProperty('player_item') && item_1.player_item && item_1.player_item.data.relic_tier - 2 >= item_1.relic_level);
  }
  hasGear(item_1: any): boolean {
    if (!item_1.gear_level) {
      return true;
    }
    return (item_1.hasOwnProperty('player_item') && item_1.player_item && item_1.player_item.data.gear_level >= item_1.gear_level);
  }

  hasPowerToon(item_1: any): boolean {
    if (!item_1.minimum_power_toon) {
      return true;
    }
    return (item_1.hasOwnProperty('player_item') && item_1.player_item && item_1.player_item.data.power >= item_1.minimum_power_toon);
  }

  hasPowerShip(item_1: any): boolean {
    if (!item_1.minimum_power_ship) {
      return true;
    }
    return (item_1.hasOwnProperty('player_item') && item_1.player_item && item_1.player_item.data.power >= item_1.minimum_power_ship);
  }

  isItemCompleted(item: any) {
    //let result = false;
    if (!item) {
      return false;
      //return 'text-white';
    }
    let hasItem = this.hasItem(item);
    if (!hasItem) {
      return false;
      //return 'text-white bg-danger';
    }
    if (item.hasOwnProperty('has_ultimate') && item.has_ultimate) {
      let has_ultimate = (item.hasOwnProperty('player_item') && item.player_item && item.hasOwnProperty('has_ultimate') && item.has_ultimate && item.player_item.data.has_ultimate);
      if (!has_ultimate) {
        return true;
      }
    }
    let hasRarity = this.hasRarity(item);
    if (!hasRarity) {
      return true;
    }

    return true;
  }

}


