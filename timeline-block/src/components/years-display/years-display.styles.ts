import styled from "styled-components";

export const YearsDisplay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 100px;
  z-index: 1;
`;
export const StartYear = styled.div`
  font-size: 200px;
  font-weight: 700;
  color: #5d7299;
  line-height: 1;
  transition: opacity 0.3s ease;

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

  &.animating {
    opacity: 0.5;
  }
`;
