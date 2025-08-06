import styled from "styled-components";



export const Title =  styled.h2`
  font-size: 56px;
  font-weight: 700;
  color: #42567A;
  margin: 0 0 56px 0;
  max-width: 350px;
  line-height: 1.2;
`


export const CircleContainer =  styled.div`
  position: relative;
  height: 530px;
  margin-bottom: 56px;
`



export const YearsDisplay =  styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 100px;
  z-index: 1;
`
export const StartYear =  styled.div`
  font-size: 200px;
  font-weight: 700;
  color: #5D7299;
  line-height: 1;
  transition: opacity 0.3s ease;
  
  &.animating {
    opacity: 0.5;
  }
`
export const EndYear =  styled.div`
  font-size: 200px;
  font-weight: 700;
  color: #EF5DA8;
  line-height: 1;
  transition: opacity 0.3s ease;
  
  &.animating {
    opacity: 0.5;
  }
`
export const Navigation =  styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
`

export const NavInfo =  styled.div`
  font-size: 14px;
  color: #42567A;
`
export const NavButtons =  styled.div`
  display: flex;
  gap: 20px;
`

export const NavButton =  styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  background: white;
  color: #42567A;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: #42567A;
    color: white;
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

export const SliderContainer =  styled.div`
  position: relative;
`

export const SliderNav =  styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`
export const SliderButton =  styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.3);
  background: white;
  color: #42567A;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #42567A;
    color: white;
  }
`
export const Slider =  styled.div`
  width: 100%;
  overflow: hidden;
`
export const SliderTrack =  styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease;
`
export const Slide =  styled.div`
  min-width: 300px;
  padding: 0;
`
export const EventYear =  styled.div`

  font-size: 25px;
  font-weight: 400;
  color: #5D7299;
  margin-bottom: 15px;
`

export const EventDescription =  styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #42567A;
  line-height: 1.5;
`


