import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly addBookmarkUrl = 'http://localhost:5000/api/session/set/?repositoryName=';
  private readonly getBookmarksUrl = 'http://localhost:5000/api/session/get';

  constructor(private http: HttpClient) { }

  addBookmark(repository) {
    const options = {responseType: 'text' as 'json'};

    return this.http.get(this.addBookmarkUrl + repository.repositoryName +
      '&avatarUrl=' + repository.avatarUrl, options);
  }

  getBookmarks() {
    const options = {responseType: 'text' as 'json'};
    return this.http.get(this.getBookmarksUrl, options);
  }
}
