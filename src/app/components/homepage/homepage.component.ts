import { Component,OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostChipComponent } from "../chips/post-chip/post-chip.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatList, MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [PostChipComponent,MatGridListModule,MatListModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
  public posts : Post[] = [
    {
      postId:'1',
      title:'Post 1 ',
      body:"Lorem Ipsum ,.......................",
      attachments:[],
      creator:'string',
      creatorId:'string',
      numberOfLikes:0,
      comments:[]
    },
    {
      postId:'2',
      title:'Post 2 ',
      body:"Lorem Ipsum ,.......................",
      attachments:[],
      creator:'string',
      creatorId:'string',
      numberOfLikes:0,
      comments:[]
    },
    {
      postId:'3',
      title:'Post 3 ',
      body:"Lorem Ipsum ,.......................",
      attachments:[],
      creator:'string',
      creatorId:'string',
      numberOfLikes:0,
      comments:[]
    },

  ];
  constructor(){

  }

  ngOnInit(): void{

  }
}
