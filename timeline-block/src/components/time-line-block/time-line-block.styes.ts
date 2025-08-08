import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: #f4f5f9;
  font-family: "PT Sans", sans-serif;
  position: relative;
  overflow: hidden;
  @media (max-width: 1300px) {
    max-width: 1024px;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  max-width: 1440px;

  padding: 170px 40px 104px 80px;

  @media (max-width: 1300px) {
    padding: 5rem 1rem 1rem 3rem;
    max-width: 1024px;
  }
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
  @media (max-width: 430px) {
    padding: 59px 0 13px 20px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.25rem, 6vw, 56px);
  font-weight: 700;
  color: #42567a;
  margin: 0;
  max-width: clamp(20vw, 35vw, 350px);
  line-height: 1;
  position: relative;
  white-space: normal; 
  transition: all 0.5s ease;

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

  @media (max-width: 1300px) {
   line-height: 1.2;
    &::before {
    content: "";
    position: absolute;
    left: -45px;
  }
`;

export const VerticalLine = styled.div`
  position: absolute;
  left: calc(50% + 20px);
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(66, 86, 122, 0.2);
  transform: translateX(-50%);
  @media (max-width: 1300px) {
    left: calc(50% + 16px);
  }
  @media (max-width: 780px) {
    opacity: 0;
    transform: scaleY(0);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.3s;
    animation: hideAndDisplayNone 0.3s forwards;
  }

  @keyframes hideAndDisplayNone {
    to {
      display: none;
    }
  }
`;

export const CenterLine = styled.div`
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(66, 86, 122, 0.2);
  transform: translateY(-50%);
  @media (max-width: 900px) {
    top: 41%;
  }
  @media (max-width: 430px) {
    top: 50%;
  }
`;


export const SliderNavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 430px) {
    flex-direction: column-reverse;
  }
`;