import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {WordpressService} from '../services/wordpress.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers:[WordpressService]
})
export class Tab1Page implements OnInit {
  items: any[];
  attachs: any[];
  thumbs =  new Map();
  thumbsArr: any[];
  page: number;
  loaded:boolean;
  loading:boolean;
  constructor(public navCtrl: NavController,public wordpressService: WordpressService) {
  }

  getKeys(map){
    return Array.from(map.keys());
  }

  loadPosts(){
    this.loading = true;
    this.wordpressService.getPosts(this.page).subscribe(data => {
      this.items = data.posts;
      for (let res of data.posts) {
        if(!this.thumbs.has(res.ID)){
          this.thumbs.set(res.ID, {id: res.ID, title: res.title, content: res.content.replace('<li class="jetpack-recipe-print"><a href="#">Print</a></li>','')});
        }        
      }
      this.loading = false;
      this.loaded = true;
    });
  }

  next() {
    this.page++;
    this.loadPosts();
  }

  ngOnInit() {
    this.loading = false;
    this.page = 1;
    this.loadPosts();
  }

}

