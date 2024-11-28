export interface Igllist {
    get_default:IgllistValues,
    lists:Array<IgllistValuesExtented>
}

export interface IgllistValues {
    description:String,
    values:string[],
    guild:string
}

export interface IgllistValuesExtented {
    description:String,
    values:IgllistValuesExtented_Item[]
}

export interface IgllistValuesExtented_Item {
    name:String,
    tab:String,
    sort:Boolean,
    percentage:String,
    item_from_gg:any,
    item_from_gg_player:any,
    requirements: Array<IgllistValuesExtented_Item_Req>
}

export interface IgllistValuesExtented_Item_Req{
    name:String,
    stars:String,
    gear_level:String,
    relic_level:String,
    minimum_power_toon:String,
    minimum_power_ship:String,
    omicron_abilities_req:String,

}
 