import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: #f4f5f9;
  font-family: "PT Sans", sans-serif;
  position: relative;
  overflow: hidden;
 
`;

export const InnerContainer = styled.div`
  position: relative;
  max-width: 1440px;

  padding: 170px 40px 104px 80px;
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(66, 86, 122, 0.1);
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(66, 86, 122, 0.1);
  }
`;

export const Title = styled.h2`
  font-size: 56px;
  font-weight: 700;
  color: #42567a;
  max-width: 350px;
  line-height: 1;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -75px; 
    transform: translateX(-50%);
    width: 5px;
    background: linear-gradient(
      to bottom,
      rgb(56, 119, 238),
      rgb(239, 93, 168)
    );
  }
`;

export const VerticalLine = styled.div`
  position: absolute;
  left: calc(50% + 20px);
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(66, 86, 122, 0.2);
  transform: translateX(-50% )
  ;
`;

export const  CenterLine = styled.div`
  position: absolute;
  top: 45%  ;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(66, 86, 122, 0.2);
  transform: translateY(-50%) ;
`;
