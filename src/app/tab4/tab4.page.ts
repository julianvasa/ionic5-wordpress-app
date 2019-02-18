import { Component, OnInit } from '@angular/core';
import {WordpressService} from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  providers:[WordpressService]

})
export class Tab4Page implements OnInit {
  items: any[];
  attachs: any[];
  thumbs =  new Map();
  thumbsArr: any[];
  categoryName: string;
  page: number;
  loaded: boolean;
  loading: boolean;

  constructor(public wordpressService: WordpressService, private route: ActivatedRoute, private router: Router) {
  }

  getKeys(map){
    return Array.from(map.keys());
  }

  escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }
  
  replaceAll(str, find, replace) {
    return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
  }

  capitalizeFirstLetter(str)   {
    str = this.replaceAll(str, "-"," ");
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  goTo(str: string){
    this.router.navigate([ '/tabs/receta/'+ str ]);
  }

  loadPosts(){
    this.loading = true;
    this.categoryName = this.route.snapshot.paramMap.get('id');
    this.wordpressService.getPostsByCat(this.categoryName, this.page).subscribe(data => {
      this.items = data.posts;
      for (let res of data.posts) {
        for (var k in res.attachments) {
          if(!this.thumbs.has(res.ID)){
            this.thumbs.set(res.ID, {id: res.ID, imageUrl: res.attachments[k].URL,//+"?resize=219%2C219", 
            title: res.title, content: res.content.replace('<li class="jetpack-recipe-print"><a href="#">Print</a></li>','')});
          }
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
