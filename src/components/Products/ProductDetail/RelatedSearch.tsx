import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  overflow-x: auto;
  padding: 10px 0;
`;

const Pill = styled.button`
  background-color: #f3f3f3;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #ddd;
  }
`;

// Related Search Tags
const relatedSearches = [
  "handbags",
  "pu leather handbag",
  "prada handbag",
  "handbag leather",
  "pure leather handbags",
  "genuine leather handbag",
  "italian leather handbag",
  "faux leather handbag",
  "fossil leather handbags",
  "ostrich leather handbag",
  "mk handbag",
  "soft leather handbags",
  "women leather handbag",
  "lv handbag",
  "tuscany leather handbags"
];

const RelatedSearches = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter related searches based on user input
  const filteredSearches = relatedSearches.filter((search) =>
    search.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Title>Related Searches</Title>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PillContainer>
        {filteredSearches.length > 0 ? (
          filteredSearches.map((search, index) => (
            <Pill key={index} onClick={() => alert(`Searching for: ${search}`)}>
              {search}
            </Pill>
          ))
        ) : (
          <p>No results found</p>
        )}
      </PillContainer>
    </Container>
  );
};

export default RelatedSearches;
