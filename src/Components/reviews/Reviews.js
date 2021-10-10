import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as movieAPI from '../../services/api-service';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieAPI.fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  // console.log(reviews);
  // console.log(reviews.results);
  // console.log(reviews.results.length);
  // console.log(reviews.results.content);

  return (
    <>
      {reviews.results && reviews.results.length > 0 ? (
        <ul>
          {reviews.results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>{content}</p>
                <span>{author} </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
