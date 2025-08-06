import { TimeSegment } from '../../shared/interfaces/time-segment';
import { PeriodPoint as StyledPeriodPoint, PointNumber, PointTitle } from "./period-point.styles"

type PeriodPointProps = {
  index: number;
  period: TimeSegment;
  isActive: boolean;
  x: number;
  y: number;
  onClick: () => void;
};

const PeriodPoint: React.FC<PeriodPointProps> = ({
  index,
  period,
  isActive,
  x,
  y,
  onClick,
}) => {
  return (
    <StyledPeriodPoint
      className={isActive ? "active" : "inactive"}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      onClick={onClick}
    >
      {isActive && <PointNumber>{index + 1}</PointNumber>}
      {isActive && <PointTitle>{period.title}</PointTitle>}
    </StyledPeriodPoint>
  );
};

export default PeriodPoint;


