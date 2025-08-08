import styled from "styled-components";
interface PaginationDotProps {
  $active: boolean; 
}


export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; 
  position: absolute;
  left: 0;
  right: 0;
  bottom: 19px; 
  z-index: 50;
  pointer-events: auto;
  @media (min-width: 430px) { 
    display: none;
  }
`;


export const PaginationDot = styled.span<PaginationDotProps>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #42567a;
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  transition: opacity 0.2s;
  display: inline-block;
  pointer-events: auto;
`;
