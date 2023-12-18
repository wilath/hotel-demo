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
        'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg',
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
      'World of Sauna',
      'Anna',
      new Date(),
      [
        'https://homegarden.com.pl/media/cache/original/c2977f93f7937b51fb95d49c92272ff9086b39cd.jpeg',
      ],
      [
        'Saunas have long been hailed as sanctuaries of relaxation and well-being. Originating from Finnish traditions, these heated rooms offer more than just a place to unwind. Stepping into a sauna, you enter a world where the soothing warmth not only melts away stress but also brings about a range of health benefits.',
        'One of the key advantages of sauna sessions is the promotion of cardiovascular health. The heat stimulates blood circulation, causing blood vessels to dilate and improving overall cardiovascular function. This not only helps in reducing blood pressure but also enhances the efficiency of the heart, contributing to a healthier circulatory system.',
        'Additionally, saunas are celebrated for their detoxifying properties. As you sweat in the heat, your body releases toxins, promoting a natural cleansing process. Regular sauna sessions can assist in purifying the skin, easing muscle tension, and even supporting the immune system. Embracing the heat in a sauna becomes more than a leisurely escape; it transforms into a holistic approach to well-being.',
      ]
    ),
    new BlogPost(
      2,
      `Culinary Excellence Unveiled: Indulge in the Finest at Doe's Seafood & Steaks`,
      'Rob',
      new Date(),
      [
        'https://www.spoon-restaurant.com/wp-content/uploads/2022/06/Spoon_cLe_Bonbon-1-scaled.jpg',
        'https://images.pexels.com/photos/1352264/pexels-photo-1352264.jpeg',
        'https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg'
      ],
      [
        `Welcome to a gastronomic haven, where every dish tells a story of culinary mastery – Doe's Seafood & Steaks. Nestled within the confines of our world-renowned hotel, this culinary gem stands as a testament to unparalleled excellence. The ambiance is as exquisite as the cuisine, and our renowned chef, John Doe, is the maestro behind the culinary symphony that unfolds in our kitchen. Prepare your palate for an unforgettable journey through the depths of the ocean and the richness of premium steaks.`,
        `Renowned for our dedication to seafood perfection, Doe's Seafood & Steaks offers a delightful array of ocean treasures. From succulent lobster tail to perfectly seared scallops, each seafood dish is a celebration of freshness and flavor. For those with a penchant for the finest cuts, our menu also boasts a selection of premium steaks, meticulously prepared to satisfy the most discerning steak aficionados. Chef John Doe's commitment to culinary excellence is palpable in every dish, making each visit a journey into the heart of fine dining.`,
        `Immerse yourself in a dining experience that transcends the ordinary, where the artistry of Chef John Doe meets the sophistication of our hotel setting. Whether you're indulging in the delicate nuances of our seafood creations or savoring the richness of our premium steaks, each bite is a testament to our unwavering pursuit of culinary perfection. Doe's Seafood & Steaks is not just a restaurant; it's a culinary destination where the world's finest flavors come together to create an unforgettable dining experience.`
      ]
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
