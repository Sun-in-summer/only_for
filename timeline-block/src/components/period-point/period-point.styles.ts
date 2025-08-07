import styled from "styled-components";


export const PointTitle = styled.div`
  position: absolute;
  left: 65px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  font-weight: 700;
  color: #42567a;
  white-space: nowrap;
`;

export const PointNumber = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #42567a;
`;

export const InnerContentWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const PeriodPoint = styled.button`
  position: absolute;
  border-radius: 50%;
  border: none;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px; /* увеличенная зона */
    height: 40px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: transparent;
    pointer-events: auto;
  }

  &.active {
    width: 56px;
    height: 56px;
    background: #f4f5f9;
    border: 1px solid rgba(66, 86, 122, 0.2);
  }

  &.inactive {
    width: 6px;
    height: 12px;
    background: #42567a;
  }

  &:hover.inactive {
    background: #5d5fef;
    width: 56px;
    height: 56px;
    background: #f4f5f9;
    border: 1px solid rgba(66, 86, 122, 0.2);
  }

  ${PointTitle} {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: none;
  }

  ${PointNumber} {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  &.inactive:hover ${PointTitle} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  &.active ${PointTitle} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transition: opacity 0.3s ease, visibility 3s ease;
  }

  &.inactive:hover ${PointNumber} {
    opacity: 1;
    visibility: visible;
  }

  &.active ${PointNumber} {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, visibility 3s ease;
  }
`;




