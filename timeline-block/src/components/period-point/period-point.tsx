import { TimeSegment } from '../../shared/interfaces/time-segment';
import { PeriodPoint as StyledPeriodPoint, PointNumber, PointTitle } from "./period-point.styles";
import { forwardRef } from 'react';

type PeriodPointProps = {
  index: number;
  period: TimeSegment;
  isActive: boolean;
  x: number;
  y: number;
  onClick: () => void;
  circleRotation: number;
};

const PeriodPoint = forwardRef<HTMLButtonElement, PeriodPointProps>(
  ({ index, period, isActive, x, y, onClick , circleRotation}, ref) => {
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
        {isActive && (
          <PointNumber style={{ transform: `rotate(${inverseRotation}deg)` }}>
            {index + 1}
          </PointNumber>
        )}
        {isActive && (
          <PointTitle style={{ transform: `rotate(${inverseRotation}deg)` }}>
            {period.title}
          </PointTitle>
        )}
      </StyledPeriodPoint>
    );
  }
);

PeriodPoint.displayName = "PeriodPoint";

export default PeriodPoint;


