import { TimeSegment } from "../../shared/interfaces/time-segment";
import {
  YearsDisplay as StyledYearsDisplay,
  EndYear,
  StartYear,
} from "./years-display.styles";

type YearsDisplayProps = {
  isAnimating: boolean;
  sampleData: TimeSegment[];
  activePeriod: number;
};

const YearsDisplay: React.FC<YearsDisplayProps> = ({ isAnimating, sampleData, activePeriod }) => {
  return (
    <StyledYearsDisplay>
      <StartYear className={isAnimating ? "animating" : ""}>
        {sampleData[activePeriod].startYear}
      </StartYear>
      <EndYear className={isAnimating ? "animating" : ""}>
        {sampleData[activePeriod].endYear}
      </EndYear>
    </StyledYearsDisplay>
  );
};

export default YearsDisplay;
