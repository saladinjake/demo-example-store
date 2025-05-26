import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const ReviewsContainer = styled.div`
  max-width: 800px;
  
  font-family: Arial, sans-serif;
`;

const ReviewCard = styled.div`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ccc;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const ReviewDate = styled.span`
  font-size: 14px;
  color: #999;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const Stars = styled.div`
  color: #f8b400;
  margin-right: 8px;
`;

const CommentText = styled.p`
  margin: 8px 0;
  line-height: 1.4;
`;

const ReviewImage = styled.img`
  width: 100px;
  height: auto;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CommentSection = () => {
  // Example review data
  const reviews = [
    {
      userName: "N****n",
      date: "Feb 10, 2025",
      rating: 5,
      text: "I'm so happy with the goods because it has the quality I wanted. Thank you very much for the confidence!",
      image: "https://via.placeholder.com/100"
    },
    {
      userName: "A****a",
      date: "Feb 12, 2025",
      rating: 4,
      text: "Good product overall. Shipping was fast, and I'm satisfied with the quality.",
      image: ""
    }
  ];

  return (
    <ReviewsContainer>
      {reviews.map((review, index) => (
        <ReviewCard key={index}>
          <UserInfo>
            <Avatar />
            <div>
              <UserName>{review.userName}</UserName>
              <ReviewDate>{review.date}</ReviewDate>
            </div>
          </UserInfo>
          <RatingRow>
            <Stars>
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </Stars>
            <span>{review.rating}.0</span>
          </RatingRow>
          <CommentText>{review.text}</CommentText>
          {review.image && <ReviewImage src={review.image} alt="Review Upload" />}
        </ReviewCard>
      ))}
    </ReviewsContainer>
  );
};

export default CommentSection;
