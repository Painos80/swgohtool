import { Farm, FarmCategory, FarmUnit } from "../classes/cls-frm";

export class Sbp {
    public pkfarm: FarmCategory | undefined;

    public constructor() {
        this.renew();
    }

    public renew(): FarmCategory {
        this.pkfarm = new FarmCategory(
            'Krayt',
            [
                new Farm(
                    'Ewoks',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Chief Chirpa', 5),
                        new FarmUnit('Ewok Elder', 5),
                        new FarmUnit('Ewok Scout', 5),
                        new FarmUnit('Logray', 5),
                        new FarmUnit('Paploo', 5),
                        new FarmUnit('Teebo', 5),
                        new FarmUnit('Wicket', 5),
                     //  new FarmUnit('Teebo', 5),
                    //    new FarmUnit('Ewok Scout', 5),
                        new FarmUnit('Princess Kneesaa', 5),
                    ],
                    [],
                    '',false,false
                ) , 
                new Farm(
                    'Rebels',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Captain Rex', 5),
                        new FarmUnit('Admiral Ackbar', 5),
                        new FarmUnit('C-3PO', 5),
                        new FarmUnit('Chewbacca', 5),
                        new FarmUnit('Han Solo', 5),
                        new FarmUnit('Wedge Antilles', 5),
                        new FarmUnit('Hera Syndulla', 5),
                        new FarmUnit('Lando Calrissian', 5),
                        new FarmUnit('Jedi Knight Luke Skywalker', 5),
                      ],
                    [],
                    '',false,false
                ) ,
                new Farm(
                    'Imps',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Scout Trooper', 5),
                        new FarmUnit('General Veers', 5),
                        new FarmUnit('Admiral Piett', 5),
                        new FarmUnit('Colonel Starck', 5),
                        new FarmUnit('Moff Gideon', 5),
                        new FarmUnit('Stormtrooper', 5),
                        new FarmUnit('Iden Versio', 5),
                        new FarmUnit('Range Trooper', 5),
                        new FarmUnit('Magmatrooper', 5),
                        new FarmUnit('Death Trooper', 5),
                        new FarmUnit('Shoretrooper', 5),
                      ],
                    [],
                    '',false,false
                ) 
            ]
        )


        return this.pkfarm;
    }
}
