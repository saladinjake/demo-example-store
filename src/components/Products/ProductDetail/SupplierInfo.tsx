import React from "react";
import styled from "styled-components";

const SupplierContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const SupplierHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const SupplierLogo = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 15px;
`;

const SupplierDetails = styled.div`
  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }
  p {
    margin: 2px 0;
    font-size: 14px;
    color: #777;
  }
`;

const SectionTitle = styled.h4`
  margin: 15px 0 8px 0;
  font-size: 16px;
  color: #333;
`;

const PerformanceInfo = styled.div`
  margin-bottom: 10px;
  p {
    margin: 3px 0;
    font-size: 14px;
    strong {
      color: #333;
    }
  }
`;

const MarketsList = styled.ul`
  list-style: inside;
  margin: 0;
  padding: 0;
  li {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

const SupplierInfo = () => {
  return (
    <SupplierContainer>
      {/* Header: Logo & Basic Info */}
      <SupplierHeader>
        <SupplierLogo
          src="https://via.placeholder.com/60"
          alt="Supplier Logo"
        />
        <SupplierDetails>
          <h3>Baoding Bateli Luggage Manufacturing Co. Ltd.</h3>
          <p>Verified Manufacturer</p>
          <p>Located in Baoding, Hebei, China</p>
        </SupplierDetails>
      </SupplierHeader>

      {/* Online Store Performance */}
      <SectionTitle>Online Store Performance</SectionTitle>
      <PerformanceInfo>
        <p>
          <strong>On-time delivery rate:</strong> 100%
        </p>
        <p>
          <strong>Online order average:</strong> US$40,000+
        </p>
        <p>
          <strong>Response time:</strong> &lt;2h
        </p>
        <p>
          <strong>Store rating:</strong> 4.5
        </p>
      </PerformanceInfo>

      {/* Main Markets */}
      <SectionTitle>Main Markets</SectionTitle>
      <MarketsList>
        <li>North America 30%</li>
        <li>Western Europe 25%</li>
        <li>Eastern Asia 15%</li>
        <li>Others, 30%</li>
      </MarketsList>
    </SupplierContainer>
  );
};

export default SupplierInfo;
