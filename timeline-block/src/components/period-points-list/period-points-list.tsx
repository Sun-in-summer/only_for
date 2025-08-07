import { CIRCLE_QUATER, CIRCLE_RADIUS, HALF_OF_CIRCLE } from '../../const';
import { TimeSegment } from '../../shared/interfaces/time-segment';
import PeriodPoint from '../period-point/period-point';

type PeriodPointsListProps = {
  sampleData: TimeSegment[];
  activePeriod: number;
  angleStep: number;
  onPeriodChange: (index: number) => void;
  dotsRef: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  circleRotation: number;
  animationComplete: boolean;
  animationOngoing: boolean;
};

const PeriodPointsList: React.FC<PeriodPointsListProps> = ({
  sampleData,
  activePeriod,
  angleStep,
  onPeriodChange,
  dotsRef,
  circleRotation,
  animationComplete,
  animationOngoing,
}) => {
  return (
    <>
      {sampleData.map((period, index) => {
        const angle = index * angleStep - CIRCLE_QUATER;
        const isActive = index === activePeriod;
        const x = Math.cos((angle * Math.PI) / HALF_OF_CIRCLE) * CIRCLE_RADIUS;
        const y = Math.sin((angle * Math.PI) / HALF_OF_CIRCLE) * CIRCLE_RADIUS;

        return (
          <PeriodPoint
            key={period.id}
            index={index}
            period={period}
            isActive={isActive}
            x={x}
            y={y}
            ref={(el) => {
              dotsRef.current[index] = el;
            }}
            onClick={() => onPeriodChange(index)}
            circleRotation={circleRotation}
            animationComplete={animationComplete}
            animationOngoing={animationOngoing}
          />
        );
      })}
    </>
  );
};

export default PeriodPointsList;
