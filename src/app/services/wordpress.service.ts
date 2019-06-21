import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WordpressService {
    items: any[];
    categories: any[];
    public wp_org: boolean = false;
    mainUrl: String = "https://public-api.wordpress.com/rest/v1.1/sites/unegatuaj.com/";

    constructor(private http: HttpClient) {
        if (this.wp_org == true) {
            this.mainUrl = "http://demo.wp-api.org/wp-json/wp/v2/";
        }
    }

    public getPosts(page: number): any {
        return this.http.get(this.mainUrl + "posts/?status=publish&page=" + page);
    }

    public getPostsByCat(categoryName: string, page: number): any {
        if (this.wp_org) {
            return this.http.get(this.mainUrl + "posts/?status=publish&categories=" + categoryName + "&page=" + page);
        }
        return this.http.get(this.mainUrl + "posts/?status=publish&category=" + categoryName + "&page=" + page);
    }

    public getCategories(): any {
        if (this.wp_org) {
            return this.http.get(this.mainUrl + "categories?order_by=count&order=desc");
        }
        return this.http.get(this.mainUrl + "categories?order_by=count&order=DESC");
    }

    public search(searchStr: string, page: number): any {
        return this.http.get(this.mainUrl + "posts/?status=publish&search=" + searchStr + "&page=" + page);
    }

    public getPost(recipeId: string): any {
        return this.http.get(this.mainUrl + "posts/" + recipeId);
    }
}