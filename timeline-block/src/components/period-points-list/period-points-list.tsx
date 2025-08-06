import { CIRCLE_RADIUS } from '../../const';
import { TimeSegment } from '../../shared/interfaces/time-segment';
import PeriodPoint from '../period-point/period-point';

type PeriodPointsListProps = {
  sampleData: TimeSegment[];
  activePeriod: number;
  angleStep: number;
  onPeriodChange: (index: number) => void;
};

const PeriodPointsList: React.FC<PeriodPointsListProps> = ({
  sampleData,
  activePeriod,
  angleStep,
  onPeriodChange,
}) => {
  return (
    <>
      {sampleData.map((period, index) => {
        const angle = index * angleStep - 90;
        const isActive = index === activePeriod;
        const x = Math.cos((angle * Math.PI) / 180) * CIRCLE_RADIUS;
        const y = Math.sin((angle * Math.PI) / 180) * CIRCLE_RADIUS;

        return (
          <PeriodPoint
            key={period.id}
            index={index}
            period={period}
            isActive={isActive}
            x={x}
            y={y}
            onClick={() => onPeriodChange(index)}
          />
        );
      })}
    </>
  );
};

export default PeriodPointsList;
