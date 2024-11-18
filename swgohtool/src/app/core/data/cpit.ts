import { Farm, FarmCategory, FarmUnit } from "../classes/cls-frm";

export class Cpit {
    public pkfarm: FarmCategory | undefined;

    public constructor() {
        this.renew();
    }

    public renew(): FarmCategory {
        this.pkfarm = new FarmCategory(
            'Cpit',
            [
                new Farm(
                    'Supreme Leader Kylo Ren',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Supreme Leader Kylo Ren', 7, 13, 7),
                        new FarmUnit('Kylo Ren (Unmasked)', 7, 13, 7),
                        new FarmUnit('General Hux', 7, 13, 5),
                        new FarmUnit('Wat Tambor', 7, 13, 5),
                        new FarmUnit('Grand Admiral Thrawn', 7, 13, 6),


                    ],
                    [],
                    'Phase(1) 22%',false,false
                ) ,
                new Farm(
                    'Jedi Master Kenobi',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Jedi Master Kenobi', 7, 13, 7),
                        new FarmUnit('Commander Ahsoka Tano (Snips)', 7, 13, 5),
                        new FarmUnit('C-3PO', 7, 13, 5),
                        new FarmUnit('Ahsoka Tano (Snips)', 7, 13, 5),
                        new FarmUnit('General Kenobi', 7, 13, 5),


                    ],
                    [],
                    'Phase(1) 20%',false,false
                ),
                new Farm(
                    'Supreme Leader Kylo Ren',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Supreme Leader Kylo Ren', 7, 13, 7),
                        new FarmUnit('Old Daka', 7, 13, 7),
                        new FarmUnit('General Hux', 7, 13, 5),
                        new FarmUnit('Nightsister Zombie', 7, 13, 5),
                        new FarmUnit('Grand Admiral Thrawn', 7, 13, 6),


                    ],
                    [],
                    'Phase(1) 17%',false,false
                ),
                new Farm(
                    'Supreme Leader Kylo Ren',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Supreme Leader Kylo Ren', 7, 13, 7),
                        new FarmUnit('Old Daka', 7, 13, 7),
                        new FarmUnit('General Hux', 7, 13, 5),
                        new FarmUnit('Nightsister Zombie', 7, 13, 5),
                        new FarmUnit('First Order Officer', 7, 13, 5),


                    ],
                    [],
                    'Phase(2-3) 15%',false,false
                ),
                new Farm(
                    'Supreme Leader Kylo Ren',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Supreme Leader Kylo Ren', 7, 13, 7),
                        new FarmUnit('Old Daka', 7, 13, 7),
                        new FarmUnit('General Hux', 7, 13, 5),
                        new FarmUnit('Nightsister Zombie', 7, 13, 5),
                        new FarmUnit('Grand Admiral Thrawn', 7, 13, 6),


                    ],
                    [],
                    'Phase(2-3) 10%',false,false
                ),
                new Farm(
                    'Jedi Master Kenobi',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Jedi Master Kenobi', 7, 13, 7),
                        new FarmUnit('Commander Ahsoka Tano', 7, 13, 5),
                        new FarmUnit('Ki-Adi-Mundi', 7, 13, 5),
                        new FarmUnit('Ahsoka Tano (Snips)', 7, 13, 5),
                        new FarmUnit('General Kenobi', 7, 13, 5),


                    ],
                    [],
                    'Phase(4) 12%',false,false
                ),
            ]
        )


        return this.pkfarm;
    }
}
