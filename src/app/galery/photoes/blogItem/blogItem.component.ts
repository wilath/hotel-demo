import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { BlogPost } from 'src/app/shared';

@Component({
  selector: 'app-blog-item',
  standalone: false,
  templateUrl: './blogItem.component.html',
  styleUrls: ['./blogItem.component.css',],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogItemComponent implements OnInit {
  @Input() blogItem: BlogPost | undefined;
  likes: number = 0;
  shares: number = 0;
  isLiked: boolean = false;

  ngOnInit(): void {
    this.likes = Math.floor(Math.random() * 50);
    this.shares = Math.floor(Math.random() * 15);
  }
  addLike() {
    if (!this.isLiked) {
      this.likes++;
      this.isLiked = true;
    }
  }
}
