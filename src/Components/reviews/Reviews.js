import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/api-service';
import { ReviewsContainer } from './ReviewsStyled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieAPI.fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>{content}</p>
                <span className="authorReview">{author} </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="noComment">We don't have any reviews for this movie</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
