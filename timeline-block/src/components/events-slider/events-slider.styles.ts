import styled from "styled-components";



export const SliderTrack = styled.div`
  display: flex;
  gap: 80px;
  transition: transform 0.3s ease;
  padding: 56px 80px 0px 80px;
  height: 135px;
  max-width: 1200px;
  position: relative;
  overflow: visible;
  @media (max-width: 430px) {
    padding: 0rem;
    margin-bottom: 58px;
    margin-top: 20px;
  }
`;



export const EventYear = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: clamp(16px, 1.1429rem + 0.8036vw, 25px);
  font-weight: 500;
  color: #5d5fef;
  margin-bottom: 15px;
`;

export const EventDescription = styled.div`
  font-size: clamp(14px, 0.875rem + 0.5357vw, 20px);
  font-weight: 400;
  color: #42567a;
  line-height: 1.5;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-wrap: break-word; 
  overflow-wrap: break-word; 
  word-break: normal;
  @media (max-width: 430px) {
    line-height: 1.45;
    -webkit-line-clamp: 4;
    font-size: 14px;
  }
`;
   


export const InnerNavButton = styled.button`
  position: absolute;
  top: 70%;
  z-index: 10;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  color: #3877ee;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  &.inner-swiper-button-prev {
    left: 0px;
  }
  &.inner-swiper-button-next {
    right: 20px;
  }
  &.swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  &.swiper-button-disabled {
    display: none;
  }
  &:after {
    content: "";
  }
  @media (max-width: 430px) {
    display: none;
  }
`;


export const InnerSlideContainer = styled.div`

  @media (max-width: 430px) {
    width: 166px;
    flex-shrink: 2;
    transition: opacity 0.3s ease;

    .inner-slide:not(.swiper-slide-active) & {
      opacity: 0.4;
    }

    .inner-slide.swiper-slide-active & {
      opacity: 1;
    }
  }
`;

