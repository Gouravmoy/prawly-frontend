import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000/posts';

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  async getAllPosts(): Promise<Post[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];

  }

  async getPostById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}
