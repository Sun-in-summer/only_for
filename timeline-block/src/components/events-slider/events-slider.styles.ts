import styled from "styled-components";


export const SliderTrack = styled.div`
  display: flex;
  gap: 80px;
  transition: transform 0.3s ease;
  padding: 56px 80px 0px 80px;
  height: 135px;
  max-width: 1200px;
  padding-left: 80px;
  overflow: visible;
  position: relative;
  @media (max-width: 430px) {
    padding: 0rem;
    gap: 25px;
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
  @media (max-width: 430px) {
    line-height: 1.45;
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
  &:after {
    content: "";
  }
  @media (max-width: 430px) {
    display: none;
  }
`;

export const StyledSwiper = styled.div`
  .swiper-pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 24px;
    z-index: 10;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background-color: #42567a;
    opacity: 0.3;
    margin: 0;
    border-radius: 50%;
    transition: opacity 0.2s;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
`;


