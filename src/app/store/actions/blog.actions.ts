import { createAction, props } from "@ngrx/store";
import { BlogPost } from "src/app/shared/models/blogpost.model";

export const addPost = createAction(
    '[Blog] AddPost',
    props<{ post: BlogPost }>() 
  );
  
  export const editPost = createAction(
    '[Blog] EditPost',
    props<{ id: number; post: BlogPost }>() 
  );
  
  export const deletePost = createAction(
    '[Blog] DeletePost',
    props<{ id: number | undefined }>()
  );