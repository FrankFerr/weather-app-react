export class CurrentWeatherRequest{
    latitude: number
    longitude: number
    city: string
    apiKey: string
    language: string = 'it'

    public constructor(apiKey: string){
        this.apiKey = apiKey
    }
}