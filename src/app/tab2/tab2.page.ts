import { Component, OnInit } from '@angular/core';
import {WordpressService} from '../services/wordpress.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[WordpressService]

})
export class Tab2Page implements OnInit {
  items: any[];
  attachs: any[];
  cats =  new Map();
  catsArr: any[];
  loading:boolean;

  constructor(public wordpressService: WordpressService) {
  }

  getKeys(map){
    return Array.from(map.keys());
  }

  ngOnInit() {
        this.loading = true;
        if(this.wordpressService.wp_org){
            this.wordpressService.getCategories().subscribe(data => {
              this.items = data;
              console.log(data);
              for (let res of data) {
                  if(!this.cats.has(res.id) && res.parent == 0 && res.name !="Uncategorized" && res.count>0){
                    var image = "https://icon2.kisspng.com/20180516/vgq/kisspng-wordpress-com-computer-icons-blog-5afbe758a90bf2.5548964515264582006924.jpg";
                    this.cats.set(res.id, {id: res.id, slug: res.slug, post_count: res.count, imageUrl: image, name: res.name});
                  }
              }
              this.loading = false;
          });
        }
        else {
          this.wordpressService.getCategories().subscribe(data => {
              this.items = data.categories;
              for (let res of data.categories) {
                  if(!this.cats.has(res.ID) && res.parent == 0 && res.name !="Uncategorized" && res.post_count>0){
                    var image = "https://icon2.kisspng.com/20180516/vgq/kisspng-wordpress-com-computer-icons-blog-5afbe758a90bf2.5548964515264582006924.jpg";
                    switch(res.name){
                    case "Ëmbëlsira": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/cake.png?resize=160%2C160"; break;
                    case "Receta për fëmijë": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/gingerbread.png?resize=160%2C160"; break;
                    case "Pjata të dyta": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/steak.png?resize=160%2C160"; break;
                    case "Pjata të para": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/spaguetti.png?resize=160%2C160"; break;
                    case "Kuzhina vegjetariane": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/vegetables.png?resize=160%2C160"; break;
                    case "Antipasta": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/starter.png?resize=160%2C160"; break;
                    case "Receta Verore": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/fruit_salad.png?resize=160%2C160"; break;
                    case "Supa": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/soup.png?resize=160%2C160"; break;
                    case "Torta": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/cake.png?resize=160%2C160"; break;
                    case "Garnitura": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/salad.png?resize=160%2C160"; break;
                    case "Këshilla kuzhine": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/food.png?resize=160%2C160"; break;
                    case "Krishtlindje dhe Viti i Ri": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/cake.png?resize=160%2C160"; break;
                    case "Sallatë": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/salad.png?resize=160%2C160"; break;
                    case "Receta të shëndetshme": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/healthy.png?resize=160%2C160"; break;
                    case "Biskota": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/gingerbread.png?resize=160%2C160"; break;
                    case "Vezë": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/food.png?resize=160%2C160"; break;
                    case "Ëmbëlsira për Krishtlindje dhe Vitin e Ri": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/basket.png?resize=160%2C160"; break;
                    case "Pica dhe torta të kripura": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/pizza.png?resize=160%2C160"; break;
                    case "Koha për një kafe/çaj": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/food.png?resize=160%2C160"; break;
                    case "Bukë": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/bread.png?resize=160%2C160"; break;
                    case "Rizoto": image = "https://unegatuaj960568913.files.wordpress.com/2019/02/rice.png?resize=160%2C160"; break;
                    default: image = "https://icon2.kisspng.com/20180516/vgq/kisspng-wordpress-com-computer-icons-blog-5afbe758a90bf2.5548964515264582006924.jpg";
                    }
                    this.cats.set(res.ID, {id: res.ID, slug: res.slug, post_count: res.post_count, imageUrl: image, name: res.name});
                  }
              }
              this.loading = false;
          });
      }
    }

}
