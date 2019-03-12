import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';

export default function StarRating(rating) {
  if (!rating) {
    return <p>No reviews</p>;
  } else {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <FontAwesomeIcon
          icon={rating < 0.5 ? regStar : solidStar}
          color='gold'
        />
        <FontAwesomeIcon
          icon={rating < 1.5 ? regStar : solidStar}
          color='gold'
        />
        <FontAwesomeIcon
          icon={rating < 2.5 ? regStar : solidStar}
          color='gold'
        />
        <FontAwesomeIcon
          icon={rating < 3.5 ? regStar : solidStar}
          color='gold'
        />
        <FontAwesomeIcon
          icon={rating < 4.6 ? regStar : solidStar}
          color='gold'
        />
      
      </div>
    );
  }
}