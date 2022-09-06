export interface countryIf{
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital:string,
    altSpellings: string[],
    subregion: string,
    region: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string[],
    borders: string[],
    nativeName: string,
    numericCode: number,
    flags: {
      svg: string
      png:string
    },
    currencies: [
      {
        code: string
        name: string
        symbol: string
      }
    ],
    languages: [
      {
        iso639_1: string,
        iso639_2: string,
        name: string,
        nativeName: string
      }
    ],
    translations: {
      br: string,
      pt: string,
      nl: string,
      hr: string,
      fa:string,
      de: string,
      es: string,
      fr: string,
      ja: string,
      it: string,
      hu: string
    },
    flag: string,
    regionalBlocs: [
      {
        acronym: string,
        name: string,
        otherNames: [
            string,
            string
        ]
      }
    ],
    cioc: string,
    independent: true
}

// -----------------------------------weather Interface------------------    -------------
export interface weatherIf
  {
    request: {
      type: string,
      query:string,
      language: string,
      unit: string
    },
    location: {
      name: string,
      country: string,
      region: string,
      lat: string,
      lon: string,
      timezone_id: string,
      localtime: string,
      localtime_epoch: number,
      utc_offset: string
    },
    current: {
      observation_time: string,
      temperature: number,
      weather_code: number,
      weather_icons: string[],
      weather_descriptions: string[],
      wind_speed: number,
      wind_degree: number,
      wind_dir: string,
      pressure: number,
      precip: number,
      humidity: number,
      cloudcover: number,
      feelslike: number,
      uv_index: number,
      visibility: number,
      is_day: string
    }
}