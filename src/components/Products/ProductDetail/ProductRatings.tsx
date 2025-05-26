















import React from "react";
import styled from "styled-components";

const RatingsContainer = styled.div`
  width: 800px;
  // margin: auto;
  font-family: Arial, sans-serif;
`;

const RatingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: bold;
`;

const RatingStars = styled.span`
  color: #ff9529;
  font-size: 20px;
`;

const RatingSummary = styled.div`
  font-size: 14px;
  color: gray;
`;

const RatingBreakdown = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding: 5px 0;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
`;

const FilterButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const ReviewList = styled.div`
  margin-top: 10px;
`;

const ReviewItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Ratings = () => {
  const reviews = [
    { user: "A***a", date: "Jan 27, 2025", text: "Great product!" },
    { user: "B***b", date: "Feb 10, 2025", text: "Fast shipping, good quality." },
  ];

  return (
    <RatingsContainer>
      <RatingHeader>
        <span>4.5</span>
        <RatingStars>★★★★★</RatingStars>
        <RatingSummary>(Based on 603 reviews)</RatingSummary>
      </RatingHeader>

      <RatingBreakdown>
        <RatingRow><span>Supplier Service</span><span>4.4</span></RatingRow>
        <RatingRow><span>On-time Shipment</span><span>4.5</span></RatingRow>
        <RatingRow><span>Product Quality</span><span>4.5</span></RatingRow>
      </RatingBreakdown>

      <FilterButtons>
        <FilterButton>All</FilterButton>
        <FilterButton>With Photos</FilterButton>
        <FilterButton>Rating</FilterButton>
      </FilterButtons>

      <ReviewList>
        {reviews.map((review, index) => (
          <ReviewItem key={index}>
            <strong>{review.user}</strong> <span>({review.date})</span>
            <p>{review.text}</p>
          </ReviewItem>
        ))}
      </ReviewList>
    </RatingsContainer>
  );
};

export default Ratings;




 