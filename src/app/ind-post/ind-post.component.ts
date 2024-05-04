import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-ind-post',
  standalone: true,
  imports: [RouterLink, RouterOutlet,MatCardModule,MatButtonModule],
  templateUrl: './ind-post.component.html',
  styleUrl: './ind-post.component.css'
})
export class IndPostComponent {
  @Input()
  post!: Post;

}
