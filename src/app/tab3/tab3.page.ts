import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers: [WordpressService]

})
export class Tab3Page implements OnInit {
  items: any[];
  attachs: any[];
  thumbs = new Map();
  thumbsArr: any[];
  categoryName: string;
  searchStr: string;
  page: number;
  loaded: boolean;
  searching: boolean;

  constructor(public wordpressService: WordpressService, private route: ActivatedRoute) {
  }

  search() {
    this.searching = true;
    this.thumbs = new Map();
    this.loadPosts();
  }

  loadPosts() {
    this.categoryName = this.route.snapshot.paramMap.get('id');
    if (this.wordpressService.wp_org) {
      if (this.searchStr != undefined) {
        this.wordpressService.search(this.searchStr, this.page).subscribe(data => {
          this.items = data;
          for (let res of data) {
            if (!this.thumbs.has(res.id)) {
              this.thumbs.set(res.id, { id: res.id, title: res.title.rendered, content: res.content.rendered });
            }
          }
          this.searching = false;
          this.loaded = true;
        });
      }
    }
    else {
      if (this.searchStr != undefined) {
        this.wordpressService.search(this.searchStr, this.page).subscribe(data => {
          this.items = data.posts;
          for (let res of data.posts) {
            if (!this.thumbs.has(res.ID)) {
              this.thumbs.set(res.ID, { id: res.ID, title: res.title, content: res.content.replace('<li class="jetpack-recipe-print"><a href="#">Print</a></li>', '') });
            }
          }
          this.searching = false;
          this.loaded = true;
        });
      }
    }
  }

  getKeys(map) {
    return Array.from(map.keys());
  }

  next() {
    this.page++;
    this.loadPosts();
  }

  ngOnInit() {
    this.searching = false;
    this.page = 1;
    this.loadPosts();
  }
}
