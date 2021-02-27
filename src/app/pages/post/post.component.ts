import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any;
  commentsOfPost: Array<any>;
  private postId: any;

  constructor(private postService: PostService, private router: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getPost();
  }

  async getPost(): Promise<any> {
    this.router.params.subscribe(res => this.postId = res.id);
    await this.postService.getById(this.postId).subscribe(res => {
      this.post = res;
      console.log(this.post);
    });
    await this.postService.getCommentsByPostId(this.postId).subscribe(res => {
      this.commentsOfPost = res;
      console.log(this.commentsOfPost);
    });
  }

  back(): void {
    this.location.back();
  }
}
