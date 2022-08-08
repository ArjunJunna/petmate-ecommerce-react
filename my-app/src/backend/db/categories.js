import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: 'Dog-Food',
    src: 'https://petmate-shop.netlify.app/images/dog-food.jpg',
  },
  {
    _id: uuid(),
    categoryName: 'Toys',
    src: 'https://petmate-shop.netlify.app/images/toy.png',
  },
  {
    _id: uuid(),
    categoryName: 'Cat-Food',
    src: 'https://petmate-shop.netlify.app/images/cat-food.jpg',
  },
];
