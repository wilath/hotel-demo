import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, pipe, take } from 'rxjs';
import { BlogPost } from 'src/app/shared/blogpost.model';
import {
  addPost,
  deletePost,
  editPost,
} from 'src/app/store/actions/blog.actions';
import { AppState } from 'src/app/store/app.reducer';
import {
  selectBlogItemById,
  selectBiggestId,
} from 'src/app/store/selectors/blog-item.selector';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.route.params.subscribe((params: Params) => {
      if (params['id'] === 'new') {
        this.isNewPostMode = true;
        this.initializeForm();
      } else {
        this.id = +params['id'];
        this.store
          .select(selectBlogItemById(this.id))
          .pipe(take(1))
          .subscribe((item) => {
            this.blogItem = item;
          });
        this.isNewPostMode = false;
        this.initializeForm();
      }
    });
  }

  blogItem!: BlogPost | undefined;
  id!: number;
  isNewPostMode: boolean = false;
  registerForm!: FormGroup;

  public ngOnInit(): void {}

  public initializeForm() {
    let pTitle = '';
    const pContent = new FormArray<FormControl>([]);
    const pPhotos = new FormArray<FormControl>([]);
    let pDate = new Date();

    if (!this.isNewPostMode && this.blogItem) {
      pTitle = this.blogItem.title;
      pDate = this.blogItem.date;
      for (const para of this.blogItem.content) {
        pContent.push(this.fb.control(para));
      }
      for (const photo of this.blogItem.photos) {
        pPhotos.push(this.fb.control(photo));
      }
    }

    this.registerForm = this.fb.group({
      title: pTitle,
      content: pContent,
      photos: pPhotos,
      date: pDate,
    });

    if (this.isNewPostMode) {
      this.registerForm.reset({
        title: 'New Title',
        content: ['Paragraph 1', 'Paragraph 2'], // Assuming 'content' is a FormArray
        photos: [],
        date: new Date(),
      });
    }
  }

  getControls(type: string) {
    if (type === 'content') {
      return this.registerForm.get('content') as FormArray;
    } else {
      return this.registerForm.get('photos') as FormArray;
    }
  }

  addElement(type: string) {
    const newElement = this.fb.control(null);
    this.getControls(type).push(newElement);
  }

  removeParagraph(index: number) {
    const contentArray = this.registerForm.get('content') as FormArray;
    contentArray.removeAt(index);
  }
  removePhoto(index: number) {
    const photoArray = this.registerForm.get('photos') as FormArray;
    photoArray.removeAt(index);
  }

  onSubmit(): void {
    let newId: number = this.blogItem?.postID!;
    if (this.isNewPostMode) {
      this.store
        .select(selectBiggestId)
        .pipe(take(1))
        .subscribe((id) => {
          newId = id!.postID + 1;
        });
    }

    const newPost = new BlogPost(
      newId,
      this.registerForm.value.title,
      'John',
      this.registerForm.value.date,
      this.registerForm.value.photos,
      this.registerForm.value.content
    );

    if (this.isNewPostMode) {
      this.store.dispatch(addPost({ post: newPost }));
    } else {
      this.store.dispatch(editPost({ id: newId, post: newPost }));
    }
  }
  deletePost() {
    this.store.dispatch(deletePost({ id: this.blogItem?.postID }));
  }
}
