import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;
  posts = [];
  private userId: any;

  constructor(
    private userService: UserService,
    private router: ActivatedRoute,
    private postService: PostService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  async getUser(): Promise<any> {
    this.router.params.subscribe(res => this.userId = res.id);
    await this.userService.getUserById(this.userId).subscribe(res => {
      this.user = res;
      console.log(this.user);
    });
    await this.postService.getAll().subscribe((res) => {
      this.posts.push(res.find(x => x.userId === +this.userId));
      console.log(this.posts);
    });
  }

  back(): void {
    this.location.back();
  }
}

