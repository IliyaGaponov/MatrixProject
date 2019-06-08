import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly gitHubUrl = 'https://api.github.com/search/repositories?q=';

  constructor(private http: HttpClient) { }

  searchRepository(repositoryName) {
    return this.http.get(this.gitHubUrl + repositoryName);
  }
}
