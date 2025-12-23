export class CoordinatesRequest{
    city: string
    stateCode: string
    countryCode: string
    limit: number = 1
    appId: string

    public constructor(city: string, appId: string){
        this.city = city
        this.appId = appId
    }
}