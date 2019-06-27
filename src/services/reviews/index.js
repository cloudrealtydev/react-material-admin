import axios from 'axios';


class ReviewServices {

  static async getBookingReviews() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=booking')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }

  static async getGoogleReviews() {
    return await axios.get('http://localhost:3001/api/combinedReview?source=google')
      .then(response => response.data)
      .catch(error => {
        console.error('Error during get review:', error);
      });
  }


}

export default ReviewServices;