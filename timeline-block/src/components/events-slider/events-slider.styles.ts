import styled from "styled-components";

// export const SliderContainer = styled.div`
//   position: relative;
// `;

// export const SliderNav = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-bottom: 20px;
// `;
// export const SliderButton = styled.button`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   border: 1px solid rgba(66, 86, 122, 0.3);
//   background: white;
//   color: #42567a;
//   font-size: 18px;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     background: #42567a;
//     color: white;
//   }
// `;
// export const Slider = styled.div`
//   width: 100%;
//   overflow: hidden;
// `;
export const SliderTrack = styled.div`
  display: flex;
  gap: 80px;
  transition: transform 0.3s ease;
  padding-top: 56px;
  height: 191px;
  max-width: 1200px;
  padding-left: 60px;
`;
export const SingleSlide = styled.div`
  min-width: 300px;
  padding: 0;
`;
export const EventYear = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 25px;
  font-weight: 700;
  color: #5d5fef;
  margin-bottom: 15px;
`;

export const EventDescription = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #42567a;
  line-height: 1.5;
`;
   


export const InnerNavButton = styled.button`
  position: absolute;
  top: 50%;
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

  &:after {
    content: "";
 
  }

  &.swiper-button-prev {
    left: 0px;
  }

  &.swiper-button-next {
    right: 10px;
  }

  // &:hover {
  //   background: rgba(0, 0, 0, 0.6);
  // }
`;
