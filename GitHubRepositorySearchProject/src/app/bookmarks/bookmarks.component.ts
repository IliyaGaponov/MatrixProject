import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { SessionService } from '../servises/session.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit, AfterViewInit {

  @ViewChild('gallery') _elem: ElementRef;
  repositoriesArr: any;
  showGallery: boolean;

  constructor(private sessionServise: SessionService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.showGallery = false;
  }

  getBookmarks() {
    this.sessionServise.getBookmarks().subscribe(
      (response: Response) => {
        this.repositoriesArr = JSON.parse(response.toString());
        console.log(response);
      },
      error => {
        console.log(error);
      });

      this.showBookmarks();
  }

  ngAfterViewInit(): void {
    this.repositoriesArr.forEach(function (repos) {
      const wrapperDivElement = this.renderer.createElement('div');
      const imgElement = this.renderer.createElement('img');
      const divElement = this.renderer.createElement('div');
      const repositoryName = this.renderer.createText('repos.repositoryName');

      this.renderer.setAttribute(wrapperDivElement, 'class', 'gallery');
      this.renderer.setAttribute(imgElement, 'src', repos.avatarUrl);
      this.renderer.setAttribute(imgElement, 'width', '600');
      this.renderer.setAttribute(imgElement, 'width', '400');
      this.renderer.setAttribute(divElement, 'class', 'desc');

      this.renderer.appendChild(divElement, repositoryName);
      this.renderer.appendChild(wrapperDivElement, imgElement);
      this.renderer.appendChild(wrapperDivElement, divElement);
      this.renderer.appendChild(this._elem.nativeElement, wrapperDivElement);
    });
  }

  showBookmarks() {
    this.showGallery = true;
  }
}
