import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/shared/models/blogpost.model';
import { AppState } from 'src/app/store/app.reducer';
import { selectAllBlogs } from 'src/app/store/selectors/blog-item.selector';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.blogList$ = this.store.select(selectAllBlogs);
  }

  blogList$: Observable<BlogPost[]>;

  ngOnInit(): void {}
}
