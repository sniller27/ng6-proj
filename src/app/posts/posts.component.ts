import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

//animations
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { fadeInAnimation } from '../animations/fadein';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [fadeInAnimation]
})
export class PostsComponent implements OnInit {

  posts$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data 
    );
  }

}
