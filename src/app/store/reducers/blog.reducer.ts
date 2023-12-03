import { createReducer, on } from '@ngrx/store';
import { BlogPost } from 'src/app/shared/blogpost.model';
import * as BlogActions from '../actions/blog.actions';

export interface BlogState {
  blogPosts: Array<BlogPost>;
  editedIngredient: BlogPost | null;
  editedIndex: number;
}

const initialState: BlogState = {
  blogPosts: [
    new BlogPost(
      0,
      'Beachfront Bliss Awaits',
      'Rob',
      new Date(),
      [
        'https://blog.beactivetv.pl/wp-content/uploads/2019/07/sean-o-KMn4VEeEPR8-unsplash-1.jpg',
        'https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg',
      ],
      [
        `Indulge in an unforgettable coastal escape at our exquisite hotel, where the allure of a breathtaking beach awaits just steps away. Picture yourself strolling along the shoreline, mesmerized by the stunning crystal-clear waters gently lapping at the shore. The warm embrace of the sun on your skin and the soothing sound of waves create a symphony of relaxation, making it an ideal spot to unwind and rejuvenate.`,
        `Our beach is a haven of tranquility, adorned with charming beach houses that offer a picturesque view of the azure ocean. Each beach house is meticulously designed to provide the perfect blend of luxury and comfort, ensuring that your stay is nothing short of extraordinary.`,
        `One of the highlights of this paradise is the sand, which is unlike any other. The fine, thick grains are amongst the tiniest in the world, giving the shoreline a velvety touch that's simply enchanting. As you sink your feet into the soft sands, you'll experience a unique connection with nature that is unparalleled.`,
        `As the day comes to a close, gather around beachfront fireplaces and immerse yourself in the warm glow while savoring the mesmerizing sunset. The crackling fire and the company of loved ones create magical moments that will be etched in your heart forever.`,
      ]
    ),
    new BlogPost(
      1,
      'Second Post',
      'Anna',
      new Date(),
      [
        'https://homegarden.com.pl/media/cache/original/c2977f93f7937b51fb95d49c92272ff9086b39cd.jpeg',
      ],
      ['dfsdfsdfdsfsgdf']
    ),
    new BlogPost(
      2,
      'Third Post',
      'Rob',
      new Date(),
      [
        'https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg',
      ],
      ['dfsdfsdfdsfsgdf']
    ),
  ],
  editedIngredient: null,
  editedIndex: -1,
};

export const blogReducer = createReducer(
  initialState,
  on(BlogActions.addPost, (state, { post }) => {
    const updatedPosts = [...state.blogPosts, post]; // Dodaj nowy post na koniec listy
    return { ...state, blogPosts: updatedPosts };
  }),
  on(BlogActions.deletePost, (state, action) => {
    const updatedPosts = state.blogPosts.filter((p) => p.postID !== action.id);
    return { ...state, blogPosts: updatedPosts };
  }),
  on(BlogActions.editPost, (state, { id, post }) => {
    const updatedPosts = state.blogPosts.map((existingPost) => {
      if (existingPost.postID === id) {
        return post;
      }
      return existingPost;
    });

    return { ...state, blogPosts: updatedPosts };
  })
);
