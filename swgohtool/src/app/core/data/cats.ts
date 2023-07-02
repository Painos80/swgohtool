import { EventsCls } from './evnt'
import { Gls } from './gls'
import { Eventslow } from "./eventslow";
import { Goodteams } from "./goodteams";
import { Cpit } from "./cpit";
import { Farmguild } from './farmguild';
import { Krayt } from './krayt';

export class categories {
    legends = new Gls().renew();
    events = new EventsCls().renew();
    eventslow = new Eventslow().renew();
    goodteams = new Goodteams().renew();
    //cpit = new Cpit().renew();
    player: any;

    farmHigh = new Farmguild().renewHigh();
    farmMedium = new Farmguild().renewMedium();
    farmLow = new Farmguild().renewLow();

    farmTWSquads = new Farmguild().renewTWSquads();
    farmTBSquads = new Farmguild().renewTBSquads();

    farmGLSquads= new Farmguild().renewGLSquads();
    farmGLShips= new Farmguild().renewGLShips();
    farmKeySquads= new Farmguild().renewKeySquads();
    farmCapitalShips= new Farmguild().renewCapitalShips();
    farmKeyFleets= new Farmguild().renewKeyFleets();

    lowOmis= new Farmguild().renewlowOmis();
    lowKeySquads= new Farmguild().renewlowKeySquads();
    lowKeyShips= new Farmguild().renewlowKeyShips();
    lowKeyCharsCapitalShipsShips= new Farmguild().renewlowKeyCharsCapitalShipsShips();
    krayt = new Krayt().renew();
    
    renew() {
        this.legends = new Gls().renew();
        this.events = new EventsCls().renew();
        this.eventslow = new Eventslow().renew();
        this.goodteams = new Goodteams().renew();
        //this.cpit = new Cpit().renew();
        this.krayt = new Krayt().renew();
        this.player = null;
        this.farmHigh = new Farmguild().renewHigh();
        this.farmMedium = new Farmguild().renewMedium();
        this.farmLow = new Farmguild().renewLow();
        this.farmTWSquads = new Farmguild().renewTWSquads();
        this.farmTBSquads = new Farmguild().renewTBSquads();
        this.farmGLSquads= new Farmguild().renewGLSquads();
        this.farmGLShips= new Farmguild().renewGLShips();
        this.farmKeySquads= new Farmguild().renewKeySquads();
        this.farmCapitalShips= new Farmguild().renewCapitalShips();
        this.farmKeyFleets= new Farmguild().renewKeyFleets();
        this.lowOmis= new Farmguild().renewlowOmis();
        this.lowKeySquads= new Farmguild().renewlowKeySquads();
        this.lowKeyShips= new Farmguild().renewlowKeyShips();
        this.lowKeyCharsCapitalShipsShips= new Farmguild().renewlowKeyCharsCapitalShipsShips();


    }
}

export class Cats {

}
