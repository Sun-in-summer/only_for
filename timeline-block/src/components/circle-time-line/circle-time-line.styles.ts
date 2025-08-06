import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 170px 80px 104px;
  background: #f4f5f9;
  font-family: "PT Sans", sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 80px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(66, 86, 122, 0.1);
  }
`;



export const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 530px;
  height: 530px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(66, 86, 122, 0.2);
  border-radius: 50%;
`;

export const CenterLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(66, 86, 122, 0.2);
  transform: translateX(-50%);
`;

export const VerticalLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(66, 86, 122, 0.2);
  transform: translateY(-50%);
`;

