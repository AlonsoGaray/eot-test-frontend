export interface Ability {
  name: string;
  text: string;
  type: string;
 }

export interface Attack {
  convertedEnergyCost: number;
  cost: string[];
  damage: string;
  name: string;
  text: string;
 }

export interface Cardmarket {
  prices: { [key: string]: number };
  updatedAt: string;
  url: string;
 }

export interface DatumImages {
  large: string;
  small: string;
 }

export interface Legalities {
  unlimited: string;
 }

export interface Resistance {
  type: string;
  value: string;
 }

export interface SetImages {
  logo: string;
  symbol: string;
}

export interface Set {
  id: string;
  images: SetImages;
  legalities: Legalities;
  name: string;
  printedTotal: number;
  ptcgoCode: string;
  releaseDate: string;
  series: string;
  total: number;
  updatedAt: string;
 }

export interface Holofoil {
  directLow: number | null;
  high: number;
  low: number;
  market: number;
  mid: number;
 }

export interface Prices {
  '1stEditionHolofoil'?: Holofoil;
  holofoil?: Holofoil;
  reverseHolofoil?: Holofoil;
  unlimitedHolofoil?: Holofoil;
 }

export interface Tcgplayer {
  prices: Prices;
  updatedAt: string;
  url: string;
 }

export interface CardInfo {
  abilities?: Ability[];
  artist: string;
  attacks: Attack[];
  cardmarket: Cardmarket;
  convertedRetreatCost: number;
  evolvesFrom: string;
  flavorText?: string;
  hp: string;
  id: string;
  images: DatumImages;
  legalities: Legalities;
  level: string;
  name: string;
  nationalPokedexNumbers: number[];
  number: string;
  rarity: string;
  resistances: Resistance[];
  retreatCost: string[];
  set: Set;
  subtypes: string[];
  supertype: string;
  tcgplayer: Tcgplayer;
  types: string[];
  weaknesses: Resistance[];
 }

export interface CardListObject {
  count: number;
  data: CardInfo[];
  page: number;
  pageSize: number;
  totalCount: number;
 }
