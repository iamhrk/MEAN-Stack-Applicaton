import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {title: 'new post', content: 'dummy text of the post'},
    {title: 'new post', content: 'dummy text of the post'},
    {title: 'new post', content: 'dummy text of the post'},
    {title: 'new post', content: 'dummy text of the post'},
    {title: 'new post', content: 'dummy text of the post'}
  ]
}
