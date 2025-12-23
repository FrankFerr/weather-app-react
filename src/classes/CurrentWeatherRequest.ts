export class CurrentWeatherRequest{
    latitude: string
    longitude: string
    appId: string
    exclude: string = 'minutely, hourly, daily, alerts'
    units: string = 'standard'
    language: string = 'it'

    public constructor(latitude: string, longitude: string, appId: string){
        this.latitude = latitude
        this.longitude = longitude
        this.appId = appId
    }
}