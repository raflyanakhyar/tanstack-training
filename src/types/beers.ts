export interface Beers {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: Volume
  boil_volume: BoilVolume
  method: Method
  ingredients: Ingredients
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}

export interface Volume {
  value: number
  unit: string
}

export interface BoilVolume {
  value: number
  unit: string
}

export interface Temp {
  value: number
  unit: string
}

export interface MashTempItem {
  temp: Temp
  duration: number
}

export interface Temp1 {
  value: number
  unit: string
}

export interface Fermentation {
  temp: Temp1
}

export interface Method {
  mash_temp: MashTempItem[]
  fermentation: Fermentation
  twist: null
}

export interface Amount {
  value: number
  unit: string
}

export interface MaltItem {
  name: string
  amount: Amount
}

export interface Amount1 {
  value: number
  unit: string
}

export interface HopsItem {
  name: string
  amount: Amount1
  add: string
  attribute: string
}

export interface Ingredients {
  malt: MaltItem[]
  hops: HopsItem[]
  yeast: string
}
