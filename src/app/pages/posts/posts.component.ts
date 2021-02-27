import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<any>;


  constructor(private postService: PostService, private location: Location) { }

  ngOnInit(): void {
    this.getPosts();
  }

  async getPosts(): Promise<void> {
    await this.postService.getAll().subscribe((res) => {
       this.posts = res;
    });
  }
}
