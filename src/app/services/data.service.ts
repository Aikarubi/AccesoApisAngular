import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, MemeResponse } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public githubUrl: string = 'https://api.github.com/search/users?q=';
  public memeUrl: string = 'https://api.imgflip.com/get_memes';

  public getGithubResponse(searchTerm: string): Observable<Response> {
    return this.http.get<Response>(this.githubUrl + searchTerm);
  }

  public getMemeResponse(): Observable<MemeResponse> {
    return this.http.get<MemeResponse>(this.memeUrl);
  }
}
