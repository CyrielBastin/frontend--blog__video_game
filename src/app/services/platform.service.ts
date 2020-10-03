import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Platform } from '../model/platform'

@Injectable()
export class PlatformService
{
    private port = 8080
    private platform_url = `http://localhost:${this.port}/REST/platforms/`

    constructor (
        private http: HttpClient
    ) {}

    public findAll (): Observable<Array<Platform>>
    {
        return this.http
                   .get<Array<Platform>>(this.platform_url)
    }
}
