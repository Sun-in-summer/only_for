import { TimeSegment } from '../../shared/interfaces/time-segment';
import { PeriodPoint as StyledPeriodPoint, PointNumber, PointTitle, InnerContentWrapper } from "./period-point.styles";
import { forwardRef } from 'react';

type PeriodPointProps = {
  index: number;
  period: TimeSegment;
  isActive: boolean;
  x: number;
  y: number;
  onClick: () => void;
  circleRotation: number;
  animationComplete: boolean;
};

const PeriodPoint = forwardRef<HTMLButtonElement, PeriodPointProps>(
  (
    {
      index,
      period,
      isActive,
      x,
      y,
      onClick,
      circleRotation,
      animationComplete,
    },
    ref
  ) => {
    const inverseRotation = -circleRotation;
    return (
      <StyledPeriodPoint
        ref={ref}
        className={isActive ? "active" : "inactive"}
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
        }}
        onClick={onClick}
      >
        <InnerContentWrapper
          style={{ transform: `rotate(${inverseRotation}deg)` }}
        >
          {isActive && <PointNumber>{index + 1}</PointNumber>}      
          <PointTitle>{period.title}</PointTitle>{" "}
          </InnerContentWrapper>
      </StyledPeriodPoint>
    );
  }
);

PeriodPoint.displayName = "PeriodPoint";

export default PeriodPoint;


