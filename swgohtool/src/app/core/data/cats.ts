import { EventsCls } from './evnt'
import { Gls } from './gls'
import { Eventslow } from "./eventslow";
import { Goodteams } from "./goodteams";
import { Cpit } from "./cpit";
import { Farmguild } from './farmguild';

export class categories {
    legends = new Gls().renew();
    events = new EventsCls().renew();
    eventslow = new Eventslow().renew();
    goodteams = new Goodteams().renew();
    cpit = new Cpit().renew();
    player: any;

    farmHigh = new Farmguild().renewHigh();
    farmMedium = new Farmguild().renewMedium();
    farmLow = new Farmguild().renewLow();


    renew() {
        this.legends = new Gls().renew();
        this.events = new EventsCls().renew();
        this.eventslow = new Eventslow().renew();
        this.goodteams = new Goodteams().renew();
        this.cpit = new Cpit().renew();
        this.player = null;
        this.farmHigh = new Farmguild().renewHigh();
        this.farmMedium = new Farmguild().renewMedium();
        this.farmLow = new Farmguild().renewLow();
    
    }
}

export class Cats {

}
