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

  // Default state for PointTitle: hidden
  ${PointTitle} {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    pointer-events: none;
  }

  // Condition 1: Inactive point, on hover - show title
  &.inactive:hover ${PointTitle} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  // Condition 2: Active point, animation finished - show title
  &.active.animation-complete ${PointTitle} {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  // Condition 3: During animation (when .animation-complete is NOT present) - hide title for ALL points
  // This rule overrides the hover/active rules when animation is ongoing
  &:not(.animation-complete) ${PointTitle} {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`;

export const PointNumber = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #42567a;

`;


