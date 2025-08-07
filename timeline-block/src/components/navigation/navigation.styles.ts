import styled from "styled-components";

export const Navigation = styled.div`
  // margin-top: -56px;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // margin-bottom: 56px;
`;

export const NavInfo =  styled.div`
  font-size: 14px;
  color: #42567A;
  margin-bottom: 20px;
`
export const NavButtons =  styled.div`
  display: flex;
  gap: 20px;
`

export const NavButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  background: #f4f5f9;
  color: #42567a;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: white;
    color: #42567a;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;