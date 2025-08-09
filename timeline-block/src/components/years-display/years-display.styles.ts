import styled from "styled-components";

export const YearsDisplay = styled.div`
  position: absolute;
  left: calc(50% - 10px);
  top: 45%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 100px;
  z-index: 1;
  transition: all 0.3s ease;
  @media (max-width: 1100px) {
    left: calc(50% + 10px);
  }
  @media (max-width: 900px) {
    top: 41%;
    left: 50%;
    gap: 35px;
  }
  @media (max-width: 780px) {
    top: 35%;
  }
`;
export const StartYear = styled.div`
  font-size: clamp(56px, 12vw, 200px);
  font-weight: 700;
  color: #5d5fef;
  line-height: 1;
  transition: opacity 0.3s ease;
  z-index: 1;

  &.animating {
    opacity: 0.5;
  }

`;
export const EndYear = styled.div`
  font-size: clamp(56px, 12vw, 200px);
  font-weight: 700;
  color: #ef5da8;
  line-height: 1;
  transition: opacity 0.3s ease;
  z-index: 1;
  &.animating {
    opacity: 0.5;
  }
`;
