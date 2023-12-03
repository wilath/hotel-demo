import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BlogPost } from 'src/app/shared';

@Component({
  selector: 'app-blog-item',
  standalone: false,
  templateUrl: './blogItem.component.html',
  styleUrl: './blogItem.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogItemComponent {
  @Input() blogItem: BlogPost | undefined
 }
