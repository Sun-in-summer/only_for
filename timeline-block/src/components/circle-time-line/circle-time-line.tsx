import { TimeSegment } from '../../shared/interfaces/time-segment';
import {
  Container,
  Circle,
  CenterLine,
  VerticalLine,
} from "./circle-time-line.styles";
import PeriodPointsList from '../period-points-list/period-points-list';


type CircleTimelineProps = {
  sampleData: TimeSegment[];
  activePeriod: number;
  angleStep: number;
  onPeriodChange: (newPeriod: number) => void;
};


const CircleTimeline: React.FC<CircleTimelineProps> = ({
  sampleData,
  activePeriod,
  angleStep,
  onPeriodChange,
}) => {

   return (
     <Container>
       <Circle>
         <CenterLine />
         <VerticalLine />
         <PeriodPointsList
           sampleData={sampleData}
           activePeriod={activePeriod}
           angleStep={angleStep}
           onPeriodChange={onPeriodChange}
         />
       </Circle>
     </Container>
   );
};

export default CircleTimeline;
