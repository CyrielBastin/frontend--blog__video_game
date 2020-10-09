import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { VideoGame } from '../model/video-game'

@Injectable()
export class VideoGameService
{
    private port = 8080
    private video_game_url = `http://localhost:${this.port}/REST/video-games`

    constructor (
        private http: HttpClient
    ) {}

    public getAll (): Observable<Array<VideoGame>>
    {
        return this.http
                   .get<Array<VideoGame>>(this.video_game_url)
    }

    public getOneById (id: number): Observable<VideoGame>
    {
        return this.http
                   .get<VideoGame>(`${this.video_game_url}/${id}`)
    }
}
