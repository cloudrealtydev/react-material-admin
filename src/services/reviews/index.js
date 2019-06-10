// Mock data
import reviews from '../../data/reviews.js';

export const getReviews = (limit = 6) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
          products: reviews.slice(0, limit),
          productsTotal: reviews.length
      });
    }, 700);
  });
};
