import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/shared';
import { AppState } from 'src/app/store/app.reducer';
import { selectAllBlogs } from 'src/app/store/selectors/blog-item.selector';

@Component({
  selector: 'app-photoes',
  templateUrl: './photoes.component.html',
  styleUrls: ['./photoes.component.css']
})
export class PhotoesComponent implements OnInit {

  constructor(private store: Store<AppState>) { 

    this.blogList$ = this.store.select(selectAllBlogs)

  }

  blogList$: Observable<BlogPost[]>;

  ngOnInit(): void {
    console.log(this.blogList$)
  }

}
