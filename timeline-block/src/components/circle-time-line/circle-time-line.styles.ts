import styled from "styled-components";


export const CircleContainer = styled.div`
  position: relative;
  height: 530px;
 `;



export const Circle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 530px;
  height: 530px;
  transform: translate(-50% , -50% );
  border: 1px solid rgba(66, 86, 122, 0.2);
  border-radius: 50%;
`;

export const VerticalLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: rgba(66, 86, 122, 0.2);
  // transform: translateX(calc(-50% - 30px));
`;

export const CenterLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(66, 86, 122, 0.2);
  transform: translateY(-50%);
`;

