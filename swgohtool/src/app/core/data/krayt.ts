import { Farm, FarmCategory, FarmUnit } from "../classes/cls-frm";

export class Krayt {
    public pkfarm: FarmCategory | undefined;

    public constructor() {
        this.renew();
    }

    public renew(): FarmCategory {
        this.pkfarm = new FarmCategory(
            'Krayt',
            [
                new Farm(
                    'Hutt Cartel',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Jabba the Hutt', 5),
                        new FarmUnit('Mob Enforcer', 5),
                        new FarmUnit('Boba Fett', 5),
                        new FarmUnit('Cad Bane', 5),
                        new FarmUnit('Greedo', 5),
                        new FarmUnit('Embo', 5),
                        new FarmUnit('Krrsantan', 5),
                        new FarmUnit('Boushh (Leia Organa)', 5),
                        new FarmUnit('Gamorrean Guard', 5),
                        new FarmUnit('Skiff Guard (Lando Calrissian)', 5),
                    ],
                    [],
                    '',false,false
                ) ,
                new Farm(
                    'Jawas',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Jawa', 5),
                        new FarmUnit('Dathcha', 5),
                        new FarmUnit('Chief Nebit', 5),
                        new FarmUnit('Jawa Scavenger', 5),
                        new FarmUnit('Jawa Engineer', 5),
                    ],
                    [],
                    '',false,false
                ),
                new Farm(
                    'Mandalorians',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Maul', 5),
                        new FarmUnit('The Mandalorian (Beskar Armor)', 5),
                        new FarmUnit('The Mandalorian', 5),
                        new FarmUnit('Jango Fett', 5),
                        new FarmUnit('Sabine Wren', 5),
                        new FarmUnit('Gar Saxon', 5),
                        new FarmUnit('Imperial Super Commando', 5),
                        new FarmUnit('Bo-Katan Kryze', 5),
                        new FarmUnit('The Armorer', 5),
                        new FarmUnit('Canderous Ordo', 5),
                    ],
                    [],
                    '',false,false
                ),
                new Farm(
                    'Old Republic',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Jedi Knight Revan', 5),
                        new FarmUnit('Jolee Bindo', 5),
                        new FarmUnit('Bastila Shan', 5),
                        new FarmUnit('Carth Onasi', 5),
                        new FarmUnit('Zaalbar', 5),
                        new FarmUnit('Mission Vao', 5),
                        new FarmUnit('Canderous Ordo', 5),
                        new FarmUnit('Juhani', 5),
                        new FarmUnit('T3-M4', 5),
                        new FarmUnit('50R-T', 5)
                    ],
                    [],
                    '',false,false
                ),
                new Farm(
                    'Tusken',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Tusken Shaman', 5),
                        new FarmUnit('Tusken Raider', 5),
                        new FarmUnit("URoRRuR'R'R", 5),
                        new FarmUnit('Tusken Chieftain', 5),
                        new FarmUnit('Tusken Warrior', 5),
                    ],
                    [],
                    '',false,false
                ) 
            ]
        )


        return this.pkfarm;
    }
}
