import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  posts : Post[] = [];
  isLoading = false;
  private postsSub : Subscription;

  constructor(public postsService: PostsService){
    this.postsService = postsService;
  }

  onDelete(postId: string){
    this.postsService.deletePost(postId);
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostsUpdatedListener().subscribe((posts: Post[]) => {
      this.isLoading =false;
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }
}
