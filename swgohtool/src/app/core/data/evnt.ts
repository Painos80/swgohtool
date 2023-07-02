import { Farm, FarmCategory, FarmUnit } from "../classes/cls-frm";
export class EventsCls {
    public pkfarm: FarmCategory | undefined;

    public constructor() {
        this.renew();
    }

    public renew(): FarmCategory {
        this.pkfarm = new FarmCategory(
            'Events',
            [
                
                new Farm(
                    'Profundity',
                    'event',
                    'light',
                    [
                        new FarmUnit('Admiral Raddus', 7, 13, 9),
                        new FarmUnit('Cassian Andor', 7, 13, 8),
                        new FarmUnit('Dash Rendar', 7, 13, 7),
                        new FarmUnit('Mon Mothma', 7, 13, 5),
                        new FarmUnit('Bistan', 7, 13, 5),
                        new FarmUnit('Jyn Erso', 7, 13, 5),
                        new FarmUnit('Hera Syndulla', 7, 13, 5),
                        //spacer,

                    ],
                    [new FarmUnit('Outrider', 7),
                    new FarmUnit(`Cassian's U-wing`, 7),
                    new FarmUnit(`Bistan's U-wing`, 7),
                    new FarmUnit(`Wedge Antilles's X-wing`, 7),
                    new FarmUnit(`Biggs Darklighter's X-wing`, 7),
                    new FarmUnit('Rebel Y-wing', 7),
                    new FarmUnit('Ghost', 7),],
                ),
                new Farm(
                    'Executor',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Darth Vader', 7, 13, 7),
                        new FarmUnit('Admiral Piett', 7, 13, 8),
                        new FarmUnit('Boba Fett', 7, 13, 8),
                        new FarmUnit('TIE Fighter Pilot', 7, 13, 5),
                        new FarmUnit('Bossk', 7, 13, 5),
                        new FarmUnit('IG-88', 7, 13, 5),
                        new FarmUnit('Dengar', 7, 13, 5),
                        // spacer,

                    ],
                    [new FarmUnit('Razor Crest', 7),
                    new FarmUnit('Slave I', 7),
                    new FarmUnit('IG-2000', 7),
                    new FarmUnit('Hound\'s Tooth', 7),
                    new FarmUnit('TIE Advanced x1', 7),
                    new FarmUnit('Imperial TIE Bomber', 7),
                    new FarmUnit('Imperial TIE Fighter', 7),],
                ),
                new Farm(
                    'Leviathan',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Darth Revan', 7, 13, 9),
                        new FarmUnit('Darth Malak', 7, 13, 9),
                        new FarmUnit('Sith Empire Trooper', 7, 13, 7),
                        new FarmUnit('Sith Trooper', 7, 13, 7),
                        new FarmUnit('Darth Maul', 7, 13, 7),
                        new FarmUnit('HK-47', 7, 13, 7),
                        new FarmUnit('Bastila Shan', 7, 13, 7),
                        new FarmUnit('Sith Assassin', 7, 13, 5),
                        new FarmUnit('50R-T', 7, 13, 5),
                        // spacer,

                    ],
                    [
                        new FarmUnit('Fury-class Interceptor', 4),
                        new FarmUnit('Mark VI Interceptor', 4),
                        new FarmUnit('TIE Dagger', 4),
                        new FarmUnit('B-28 Extinction-class Bomber', 4),
                        new FarmUnit('Scimitar', 4),
                        new FarmUnit('Sith Fighter', 4),
                        new FarmUnit('Ebon Hawk', 4),
 
                ],
                ),
                new Farm(
                    'Doctor Aphra',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Hondo Ohnaka', 7, 13, 5),
                        new FarmUnit('0-0-0', 7, 13, 5),
                        new FarmUnit('BT-1', 7, 13, 5),
                        new FarmUnit('Sana Starros', 7, 13, 5),
                    ],
                    [],
                ),

                new Farm(
                    'Grand Inquisitor',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Second Sister', 7, 13, 5),
                        new FarmUnit('Ninth Sister', 7, 13, 5),
                        new FarmUnit('Seventh Sister', 7, 13, 5),
                        new FarmUnit('Eighth Brother', 7, 13, 5),
                        new FarmUnit('Fifth Brother', 7, 13, 5),
                    ],
                    [],
                ),
                new Farm(
                    'Starkiller',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Darth Talon', 7, 13, 5),
                        new FarmUnit('Dash Rendar', 7, 13, 5),
                        new FarmUnit('Kyle Katarn', 7, 13, 5),
                        new FarmUnit('Mara Jade, The Emperor\'s Hand', 7, 13, 5),
                    ],
                    [],
                ),
                new Farm(
                    'Jedi Knight Luke Skywalker',
                    'event',
                    'light',
                    [
                        new FarmUnit('C-3PO', 7, 13, 3),
                        new FarmUnit('Captain Han Solo', 7, 13, 3),
                        new FarmUnit('Chewbacca', 7, 13, 3),
                        new FarmUnit('Commander Luke Skywalker', 7, 13, 3),
                        new FarmUnit('Darth Vader', 7, 13, 3),
                        new FarmUnit('Hermit Yoda', 7, 13, 3),
                        new FarmUnit('Lando Calrissian', 7, 13, 3),
                        new FarmUnit('Rebel Officer Leia Organa', 7, 13, 3),
                        new FarmUnit('Wampa', 7, 13, 3),
                    ],
                    [
                        new FarmUnit('Han\'s Millennium Falcon', 7),
                        new FarmUnit('Wedge Antilles\'s X-wing', 7),
                    ],
                ),
                new Farm(
                    'General Skywalker',
                    'event',
                    'light',
                    [
                        new FarmUnit('Ahsoka Tano', 7, 12, undefined, 17700),
                        new FarmUnit('C-3PO', 7, 12, undefined, 17700),
                        new FarmUnit('General Kenobi', 7, 12, undefined, 17700),
                        new FarmUnit('Padmé Amidala', 7, 12, undefined, 17700),
                        new FarmUnit('Shaak Ti', 7, 12, undefined, 17700),
                        // spacer,
                        new FarmUnit('Asajj Ventress', 7, 12, undefined, 17700),
                        new FarmUnit('B1 Battle Droid', 7, 12, undefined, 17700),
                        new FarmUnit('B2 Super Battle Droid', 7, 12, undefined, 17700),
                        new FarmUnit('Droideka', 7, 12, undefined, 17700),
                        new FarmUnit('IG-100 MagnaGuard', 7, 12, undefined, 17700),
                    ],
                    [
                        new FarmUnit('Endurance', 7, undefined, undefined, undefined, 40000),
                        new FarmUnit('Anakin\'s Eta-2 Starfighter', 7, undefined, undefined, undefined, 40000),
                        new FarmUnit("Ahsoka Tano's Jedi Starfighter", 7, undefined, undefined, undefined, 40000),
                        new FarmUnit('Umbaran Starfighter', 7, undefined, undefined, undefined, 40000),
                        new FarmUnit("Clone Sergeant's ARC-170", 7, undefined, undefined, undefined, 40000),
                        new FarmUnit("Jedi Consular's Starfighter", 7, undefined, undefined, undefined, 40000),
                        new FarmUnit("Plo Koon's Jedi Starfighter", 7, undefined, undefined, undefined, 40000),
                        new FarmUnit("Rex's ARC-170", 7, undefined, undefined, undefined, 40000),
                    ], null, true
                ),
                new Farm(
                    'Darth Malak',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Bastila Shan', 7, undefined, undefined, 17500),
                        new FarmUnit('Jolee Bindo', 7, undefined, undefined, 17500),
                        new FarmUnit('Mission Vao', 7, undefined, undefined, 17500),
                        new FarmUnit('T3-M4', 7, undefined, undefined, 17500),
                        new FarmUnit('Zaalbar', 7, undefined, undefined, 17500),
                        new FarmUnit('Jedi Knight Revan', 7, undefined, undefined, 17500),
                        //spacer,
                        new FarmUnit('Bastila Shan (Fallen)', 7, undefined, undefined, 17500),
                        new FarmUnit('Carth Onasi', 7, undefined, undefined, 17500),
                        new FarmUnit('Canderous Ordo', 7, undefined, undefined, 17500),
                        new FarmUnit('HK-47', 7, undefined, undefined, 17500),
                        new FarmUnit('Juhani', 7, undefined, undefined, 17500),
                        new FarmUnit('Darth Revan', 7, undefined, undefined, 17500),
                    ],
                    [], null, true
                ),
                new Farm(
                    'Jedi Knight Cal Kestis',
                    'event',
                    'dark',
                    [
                        new FarmUnit('Cal Kestis', 7, 12),
                        new FarmUnit('Cere Junda', 7, 12),
                        new FarmUnit('Merrin', 7, 12),
                        new FarmUnit('Tarfful', 7, 12),
                        new FarmUnit('Saw Gerrera', 7,12),
                        
                    ],
                    []
                )
            ]
        )


        return this.pkfarm;
    }
}