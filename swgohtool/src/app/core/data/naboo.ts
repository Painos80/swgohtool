import { Farm, FarmCategory, FarmUnit } from "../classes/cls-frm";

export class Naboo {
    public pkfarm: FarmCategory | undefined;

    public constructor() {
        this.renew();
    }

    public renew(): FarmCategory {
        this.pkfarm = new FarmCategory(
            'Krayt',
            [
                new Farm(
                    'Bonus +25%',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Jar Jar Binks', 7, 12),
                        new FarmUnit('Master Qui-Gon', 7, 12),
                        new FarmUnit('Padawan Obi-Wan', 7, 12),
                        new FarmUnit('Darth Maul', 7, 12),
                        new FarmUnit('STAP', 7, 12),             
                    ],
                    [],
                    '',false,false
                ) , 
                new Farm(
                    '1st',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Boss Nass', 7, 12),             
                        new FarmUnit('Captain Tarpals', 7, 12),             
                        new FarmUnit('Gungan Boomadier', 7, 12),             
                        new FarmUnit('Gungan Phalanx', 7, 12),             
                        new FarmUnit('Queen Amidala', 7, 12),             
                        new FarmUnit('R2-D2', 7, 12),             
                        new FarmUnit('B1 Battle Droid', 7, 12),             
                        new FarmUnit('Nute Gunray', 7, 12),             
                        new FarmUnit('B2 Battle Droid', 7, 12),             
                        new FarmUnit('Droideka', 7, 12),             
                        new FarmUnit('IG-100 MagnaGuard', 7, 12),             
                        new FarmUnit('Darth Sidious', 7, 12),             
  
                      ],
                    [],
                    '',false,false
                ) ,
                new Farm(
                    'Imps',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Mace Windu', 7, 12),             
                        new FarmUnit('Jedi Consular', 7, 12),             
                        new FarmUnit('Jedi Knight Guardian', 7, 12),             
                        new FarmUnit('Kelleran Beq', 7, 12),             
                        new FarmUnit('Eeth Koth', 7, 12),             
                        new FarmUnit('Grand Master Yoda', 7, 12),             
                        new FarmUnit('Plo Koon', 7, 12),             
                        new FarmUnit('Ki-Adi-Mundi', 7, 12),             
                        new FarmUnit('Aayla Secura', 7, 12),             
                        new FarmUnit('Shaak Ti', 7, 12),             
                        new FarmUnit('Luminara Unduli', 7, 12),             
                        new FarmUnit('Kit Fisto', 7, 12),             
                        new FarmUnit('Qui-Gon Jinn', 7, 12),             
                       
                      ],
                    [],
                    '',false,false
                ) 
            ]
        )


        return this.pkfarm;
    }
}

/*




*/