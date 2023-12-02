import { createAction, props } from "@ngrx/store";
import { BlogPost } from "src/app/shared/blogpost.model";

export const addPost = createAction(
    '[Blog] AddPost',
    props<{ post: BlogPost }>() // Dodajemy props z obiektem typu BlogPost
  );
  
  export const editPost = createAction(
    '[Blog] EditPost',
    props<{ id: number; post: BlogPost }>() // Dodajemy props z id posta oraz obiektem typu BlogPost
  );
  
  export const deletePost = createAction(
    '[Blog] DeletePost',
    props<{ id: number | undefined }>() // Dodajemy props z id posta
  );