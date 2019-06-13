import axios from 'axios';

export const getReviews = (limit = 6) => {
  return new Promise(resolve => {
    setTimeout(() => {
      let reviews;
      axios.get('http://localhost:3001/api/bookingReview',{headers:{}})
          .then(res => {
              console.log(res.data[0].data.reviews);
            reviews = res.data[0].data.reviews;
            resolve({
              reviews: reviews.slice(0, limit),
              reviewsTotal: reviews.length
            });
          });

    }, 1000);
  });
};
