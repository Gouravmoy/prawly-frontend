import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { IndPostComponent } from '../ind-post/ind-post.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, IndPostComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  postList: Post[] = [];
  postService: PostService = inject(PostService);

  constructor() {
    this.postService.getAllPosts().then((postList: Post[]) => {
      this.postList = postList;
    });
  }

}
