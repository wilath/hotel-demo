import { createSelector } from "@ngrx/store"
import { BlogPost } from "src/app/shared/blogpost.model"
import { AppState } from "../app.reducer";
import { BlogState } from "../reducers/blog.reducer";


export const selectAppState = (state: AppState) => state.blog;

export const selectAllBlogs = createSelector(
  selectAppState, 
  (state: BlogState) => state.blogPosts
);

// określony postID
export const selectBlogItemById = (postId: number) =>
  createSelector(
    selectAppState, (blogItems: BlogState) =>
    blogItems.blogPosts.find((item) => item.postID === postId)
  );


// weź następny post id

export const selectBiggestId = createSelector(
  selectAppState,
  (blogItems: BlogState) => {
    let highestId = 0;
    let highestIdPost: BlogPost | null = null;

    for (const post of blogItems.blogPosts) {
      if (post.postID > highestId) {
        highestId = post.postID;
        highestIdPost = post;
      }
    }
    return highestIdPost;
  }
);