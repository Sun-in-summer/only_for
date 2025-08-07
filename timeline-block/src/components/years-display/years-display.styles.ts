import styled from "styled-components";

export const YearsDisplay = styled.div`
  position: absolute;
  left: calc(50% - 10px);
  top: calc(50% - 55px);
  transform: translate(calc(-50% + 25px), calc(-50% - 40px));
  display: flex;
  gap: 100px;
  z-index: 1;
`;
export const StartYear = styled.div`
  font-size: 200px;
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
  font-size: 200px;
  font-weight: 700;
  color: #ef5da8;
  line-height: 1;
  transition: opacity 0.3s ease;
  z-index: 1;
  &.animating {
    opacity: 0.5;
  }
`;
