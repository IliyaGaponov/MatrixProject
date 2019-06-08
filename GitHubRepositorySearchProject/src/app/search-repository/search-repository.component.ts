import { Component } from '@angular/core';
import { SessionService } from '../servises/session.service';
import { GithubService } from '../servises/github.service';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';

@Component({
  selector: 'app-search-repository',
  templateUrl: './search-repository.component.html',
  styleUrls: ['./search-repository.component.css'],
  providers: [BookmarksComponent]
})
export class SearchRepositoryComponent {
    repositoryName = '';
    gitHubResponse: any;
    showRepositoryFrame: boolean;
    repository: any = {};
    avatarIndex = 0;
    readonly incorrectRepoMsg = 'There is no repository with the same name, you should try again:)';

  constructor(private gitHubServise: GithubService, private sessionServise: SessionService,
    private bookmarksComp: BookmarksComponent) { }

  searchRepository() {
    this.gitHubServise.searchRepository(this.repositoryName).subscribe(
        (response: any) => {
          if (response.total_count > 0) {
            this.gitHubResponse = response;
            this.showRepositoryFrame = true;
            this.repository.repositoryName = this.repositoryName;
            this.setAvatarUrl();
            document.getElementById('incorectRepositoryMsg').innerHTML = '';
          } else {
            this.showRepositoryFrame = false;
            document.getElementById('incorectRepositoryMsg').innerHTML = this.incorrectRepoMsg;
          }

          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  nextPicture() {
    if (this.avatarIndex < this.gitHubResponse.total_count - 1) {
      this.avatarIndex++;
    } else {
      this.avatarIndex = 0;
    }

    this.setAvatarUrl();
  }

  prevPicture() {
    if (this.avatarIndex > 0) {
      this.avatarIndex--;
    } else {
      this.avatarIndex = this.gitHubResponse.total_count - 1;
    }

    this.setAvatarUrl();
  }

  setAvatarUrl() {
    this.repository.avatarUrl = this.gitHubResponse.items[this.avatarIndex].owner.avatar_url;
  }

  addBookmark() {
    this.sessionServise.addBookmark(this.repository).subscribe(
          response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  getBookmarks() {
    this.showRepositoryFrame = false;
    this.bookmarksComp.getBookmarks();
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.searchRepository();
    }
  }
}
