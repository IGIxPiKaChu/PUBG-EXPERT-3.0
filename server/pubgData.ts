export interface PubgUpdate {
  id: number;
  versionName: string;
  releaseDate: string;
  year: string;
  majorFeatures: string[];
  weaponChanges: string[] | null;
  mapChanges: string[] | null;
  vehicleChanges: string[] | null;
  metaSummary: string | null;
}

export const pubgUpdatesData: PubgUpdate[] = [
  {
    id: 1,
    versionName: "3.2.0",
    releaseDate: "2024-03",
    year: "2024",
    majorFeatures: ["New Season 32", "Ranked improvements", "UI updates"],
    weaponChanges: ["M416 recoil slightly adjusted", "Kar98k damage tweaked"],
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "Minor adjustments focusing on competitive balance"
  },
  {
    id: 2,
    versionName: "2.9.0",
    releaseDate: "2023-11",
    year: "2023",
    majorFeatures: ["New game mode", "Performance optimizations"],
    weaponChanges: ["Vector fire rate increased"],
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "Quality of life improvements"
  },
  {
    id: 3,
    versionName: "2.3.0",
    releaseDate: "2022-11",
    year: "2022",
    majorFeatures: ["New Map: Nusa", "New Mode: Titan Strikes"],
    weaponChanges: ["LYNX AMR added (supply drop)", "ACE32 assault rifle added"],
    mapChanges: ["Nusa 1x1km map for intense battles"],
    vehicleChanges: ["Airboat added to Nusa"],
    metaSummary: "Introduction of smallest competitive map with fast-paced gameplay"
  },
  {
    id: 4,
    versionName: "2.1.0",
    releaseDate: "2022-07",
    year: "2022",
    majorFeatures: ["Livik Revamp", "New weapons"],
    weaponChanges: ["LYNX AMR anti-materiel rifle", "ACE32 assault rifle"],
    mapChanges: ["Livik visual updates"],
    vehicleChanges: null,
    metaSummary: "Major weapon additions changing long-range meta"
  },
  {
    id: 5,
    versionName: "1.8.0",
    releaseDate: "2022-01",
    year: "2022",
    majorFeatures: ["Spider-Man Collaboration", "Web Launcher item"],
    weaponChanges: null,
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "Major crossover event with unique traversal mechanics"
  },
  {
    id: 6,
    versionName: "1.7.0",
    releaseDate: "2021-12",
    year: "2021",
    majorFeatures: ["Arcane Collaboration", "Mirror World mode"],
    weaponChanges: ["DMR buff across all DMRs", "7.62mm ammo weight reduced"],
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "DMRs became more viable with range and velocity improvements"
  },
  {
    id: 7,
    versionName: "1.5.0",
    releaseDate: "2021-07",
    year: "2021",
    majorFeatures: ["New LMG: MG3", "Payload 2.0"],
    weaponChanges: ["MG3 with dual fire rate 660/990 RPM"],
    mapChanges: null,
    vehicleChanges: ["Helicopters in Payload mode"],
    metaSummary: "MG3 introduction as powerful airdrop LMG"
  },
  {
    id: 8,
    versionName: "1.4.0",
    releaseDate: "2021-05",
    year: "2021",
    majorFeatures: ["Godzilla vs Kong Collaboration", "Coupe RB vehicle"],
    weaponChanges: ["M249 rework: magazine 75→150"],
    mapChanges: ["Easter eggs on Erangel, Sanhok, Miramar"],
    vehicleChanges: ["Coupe RB fastest 4-wheel at 150km/h"],
    metaSummary: "Major crossover with unique monster encounters"
  },
  {
    id: 9,
    versionName: "1.3.5",
    releaseDate: "2021-04",
    year: "2021",
    majorFeatures: ["New Map: Karakin", "Sticky Bomb", "Panzerfaust"],
    weaponChanges: ["Panzerfaust rocket launcher (Karakin-only)"],
    mapChanges: ["Karakin 2x2km 64 players", "Black Zone destruction mechanic"],
    vehicleChanges: null,
    metaSummary: "Smallest competitive map with destructible environments"
  },
  {
    id: 10,
    versionName: "1.3.0",
    releaseDate: "2021-03",
    year: "2021",
    majorFeatures: ["3rd Anniversary", "Motor Glider", "Mosin-Nagant"],
    weaponChanges: ["Mosin-Nagant bolt-action sniper"],
    mapChanges: null,
    vehicleChanges: ["Motor Glider 2-seater aircraft"],
    metaSummary: "Anniversary update with flyable vehicle"
  },
  {
    id: 11,
    versionName: "1.2.0",
    releaseDate: "2021-01",
    year: "2021",
    majorFeatures: ["FAMAS assault rifle", "Rune Theme Mode"],
    weaponChanges: ["FAMAS fastest AR fire rate with bipod (Livik-only)", "Kar98k/M24 damage increase"],
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "FAMAS becomes top-tier Livik weapon"
  },
  {
    id: 12,
    versionName: "1.1.0",
    releaseDate: "2020-11",
    year: "2020",
    majorFeatures: ["Metro Royale mode", "Erangel Snow Festival"],
    weaponChanges: null,
    mapChanges: ["Winter theme with icebergs and ice castles"],
    vehicleChanges: null,
    metaSummary: "New extraction-based game mode"
  },
  {
    id: 13,
    versionName: "1.0.0",
    releaseDate: "2020-09",
    year: "2020",
    majorFeatures: ["Erangel 2.0", "M1014 shotgun", "90FPS support"],
    weaponChanges: ["M1014 semi-auto shotgun (Livik)", "DBS moved to field spawn"],
    mapChanges: ["Erangel complete visual overhaul"],
    vehicleChanges: null,
    metaSummary: "Major graphics and performance upgrade"
  },
  {
    id: 14,
    versionName: "0.19.0",
    releaseDate: "2020-07",
    year: "2020",
    majorFeatures: ["New Map: Livik", "P90 SMG", "MK12 DMR"],
    weaponChanges: ["P90 50-round SMG", "MK12 5.56mm DMR (Livik-only)"],
    mapChanges: ["Livik 2x2km 52 players"],
    vehicleChanges: ["Monster Truck"],
    metaSummary: "Fast-paced small map with exclusive weapons"
  },
  {
    id: 15,
    versionName: "0.18.0",
    releaseDate: "2020-05",
    year: "2020",
    majorFeatures: ["Miramar 2.0", "Canted Sight", "Win94 scope"],
    weaponChanges: ["Win94 built-in 2.7x scope", "Shotgun major buff"],
    mapChanges: ["Miramar visual overhaul with Oasis, Ruins, Racetrack"],
    vehicleChanges: null,
    metaSummary: "Shotguns become viable with range and damage improvements"
  },
  {
    id: 16,
    versionName: "0.17.0",
    releaseDate: "2020-03",
    year: "2020",
    majorFeatures: ["DBS shotgun", "Death Cam", "Colorblind mode"],
    weaponChanges: ["DBS airdrop shotgun", "Uzi red dot/holo sights", "MK47 damage 40→47"],
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "Quality of life improvements with DBS introduction"
  },
  {
    id: 17,
    versionName: "0.16.0",
    releaseDate: "2019-12",
    year: "2019",
    majorFeatures: ["Erangel Winter", "Healing while moving", "TPP/FPP toggle"],
    weaponChanges: ["AWM nerf", "SMG/Crossbow buff", "Shotgun buff"],
    mapChanges: ["Erangel snow theme with cable cars"],
    vehicleChanges: ["Snowboard", "Cable cars"],
    metaSummary: "Major quality of life with mobile healing"
  },
  {
    id: 18,
    versionName: "0.15.0",
    releaseDate: "2019-10",
    year: "2019",
    majorFeatures: ["Ledge grab", "Deagle pistol", "MP5K SMG"],
    weaponChanges: ["M16A4 buff", "Vector 9mm conversion", "UMP9→UMP45", "Deagle .45 pistol", "MP5K SMG"],
    mapChanges: null,
    vehicleChanges: ["BRDM-2 amphibious vehicle"],
    metaSummary: "Major weapon balance overhaul with category changes"
  },
  {
    id: 19,
    versionName: "0.13.0",
    releaseDate: "2019-07",
    year: "2019",
    majorFeatures: ["PP-19 SMG", "4v4 TDM", "Vikendi Cave"],
    weaponChanges: ["PP-19 high-capacity SMG"],
    mapChanges: ["Vikendi secret cave with special loot"],
    vehicleChanges: null,
    metaSummary: "Introduction of structured team deathmatch mode"
  },
  {
    id: 20,
    versionName: "0.12.0",
    releaseDate: "2019-05",
    year: "2019",
    majorFeatures: ["Scorpion pistol", "Twilight Escape zombie mode"],
    weaponChanges: ["Scorpion machine pistol"],
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "Close-range weapon expansion"
  },
  {
    id: 21,
    versionName: "0.11.0",
    releaseDate: "2019-02",
    year: "2019",
    majorFeatures: ["Resident Evil 2 Collaboration", "G36C rifle"],
    weaponChanges: ["G36C Vikendi-exclusive AR"],
    mapChanges: ["Vikendi Moonlight with aurora"],
    vehicleChanges: ["Tukshai three-wheeled vehicle"],
    metaSummary: "Major crossover event with zombie mode"
  },
  {
    id: 22,
    versionName: "0.10.5",
    releaseDate: "2019-01",
    year: "2019",
    majorFeatures: ["Mk47 Mutant rifle", "Laser Sight"],
    weaponChanges: ["Mk47 Mutant 7.62mm burst AR", "Laser Sight attachment"],
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "Burst fire rifle introduction"
  },
  {
    id: 23,
    versionName: "0.10.0",
    releaseDate: "2018-12",
    year: "2018",
    majorFeatures: ["Vikendi snow map"],
    weaponChanges: null,
    mapChanges: ["Vikendi 6x6km snow map"],
    vehicleChanges: ["Snowmobile winter vehicle"],
    metaSummary: "Third major map introduction"
  },
  {
    id: 24,
    versionName: "0.9.5",
    releaseDate: "2018-11",
    year: "2018",
    majorFeatures: ["M762 Beryl", "Arena Mode"],
    weaponChanges: ["M762 Beryl 7.62mm assault rifle"],
    mapChanges: null,
    vehicleChanges: ["Scooter Sanhok motorcycle"],
    metaSummary: "High-damage AR introduction"
  },
  {
    id: 25,
    versionName: "0.9.0",
    releaseDate: "2018-10",
    year: "2018",
    majorFeatures: ["Night Mode", "QBU sniper"],
    weaponChanges: ["QBU Sanhok-exclusive DMR"],
    mapChanges: ["Erangel night mode with NVG"],
    vehicleChanges: ["Roni Sanhok vehicle"],
    metaSummary: "Stealth gameplay with night vision"
  },
  {
    id: 26,
    versionName: "0.8.0",
    releaseDate: "2018-09",
    year: "2018",
    majorFeatures: ["Sanhok map", "QBZ rifle"],
    weaponChanges: ["QBZ Sanhok-exclusive AR"],
    mapChanges: ["Sanhok 4x4km jungle map"],
    vehicleChanges: ["Mirado high-speed sedan"],
    metaSummary: "Fast-paced smaller map introduction"
  },
  {
    id: 27,
    versionName: "0.7.0",
    releaseDate: "2018-07",
    year: "2018",
    majorFeatures: ["SLR DMR", "War Mode"],
    weaponChanges: ["SLR 7.62mm designated marksman rifle"],
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "Team deathmatch mode and precision rifle"
  },
  {
    id: 28,
    versionName: "0.6.0",
    releaseDate: "2018-06",
    year: "2018",
    majorFeatures: ["FPP mode", "Royal Pass", "Gun skins"],
    weaponChanges: null,
    mapChanges: null,
    vehicleChanges: null,
    metaSummary: "First-person perspective and progression system"
  },
  {
    id: 29,
    versionName: "0.5.0",
    releaseDate: "2018-05",
    year: "2018",
    majorFeatures: ["Miramar desert map", "Win94 rifle"],
    weaponChanges: ["Win94 lever-action", "Sawed-Off shotgun", "R45 revolver"],
    mapChanges: ["Miramar 8x8km desert map"],
    vehicleChanges: ["Pickup truck", "Minibus"],
    metaSummary: "Second major map with western theme"
  },
  {
    id: 30,
    versionName: "0.4.0",
    releaseDate: "2018-04",
    year: "2018",
    majorFeatures: ["Arcade Mode", "Training Ground", "Auto-door opening"],
    weaponChanges: null,
    mapChanges: ["Training Ground added"],
    vehicleChanges: null,
    metaSummary: "Casual gameplay modes introduction"
  },
];
