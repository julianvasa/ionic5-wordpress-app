import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
@Injectable()
export class WordpressService {
    items: any[];
    categories: any[];
    constructor(private http: HttpClient) {
    }
    
    public getPosts(page: number): any {
        return this.http.get("https://public-api.wordpress.com/rest/v1.2/sites/unegatuaj.com/posts/?status=publish&page="+page);
    }

    public getPostsByCat(categoryName: string, page: number): any {
        return this.http.get("https://public-api.wordpress.com/rest/v1.2/sites/unegatuaj.com/posts/?status=publish&category="+categoryName+"&page="+page);
    }

    public getCategories(): any {
        return this.http.get("https://public-api.wordpress.com/rest/v1.1/sites/unegatuaj.com/categories?order_by=count&order=DESC");
    }

    public search(searchStr: string, page: number): any {
        return this.http.get("https://public-api.wordpress.com/rest/v1.2/sites/unegatuaj.com/posts/?status=publish&search="+searchStr+"&page="+page);
    }

    public getPost(recipeId: string): any {
        return this.http.get("https://public-api.wordpress.com/rest/v1.1/sites/unegatuaj.com/posts/"+recipeId);
    }
}