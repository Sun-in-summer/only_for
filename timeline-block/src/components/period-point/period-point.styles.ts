import styled from "styled-components";

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
    height: 6px;
    background: #42567a;
  }

  &:hover.inactive {
    background: #5d7299;
  }
`;

export const PointNumber = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #42567a;
`;

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
