import { Component, OnInit } from '@angular/core';
import {WordpressService} from '../services/wordpress.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  providers:[WordpressService]

})
export class Tab5Page implements OnInit {
  items: any[];
  recipeId;
  content;
  title;
  
  constructor(public wordpressService: WordpressService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    this.wordpressService.getPost(this.recipeId).subscribe(data => {
          this.content = data.content;
          this.title=data.title;
    });  
  }
}
