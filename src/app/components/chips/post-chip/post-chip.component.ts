import { Component, Input } from '@angular/core';
import { Post } from '../../../interfaces/post';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'post-chip',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './post-chip.component.html',
  styleUrl: './post-chip.component.css'
})
export class PostChipComponent {
@Input() post !: Post ;
}
