import React, { useState } from "react";
import "swiper/css";
import {getSampleData} from "../../../mocks/mock-data"
import { CIRCLE_DEGREES } from '../../const';
import CircleTimeline from '../circle-time-line/circle-time-line';
import YearsDisplay from '../years-display/years-display';
import Navigation from '../navigation/navigation';
import EventsSlider from '../events-slider/events-slider';
import { CenterLine, Container, InnerContainer, SliderNavigationWrapper, Title, VerticalLine } from './time-line-block.styes';
import OuterPagination from '../outer-pagination/outer-pagination';


const TimelineBlock: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  
  const sampleData = getSampleData();
  const totalPeriods = sampleData.length;
  const angleStep = CIRCLE_DEGREES / totalPeriods;
 
  
  const handlePeriodChange = (index : number) => {
      if (index === activePeriod || isAnimating) return;
  
      setIsAnimating(true);
      setActivePeriod(index);
      setCurrentSlide(0);
      setTimeout(() => setIsAnimating(false), 300);
    };
  
  const handleOuterPaginationClick = (periodIndex: number) => {
    handlePeriodChange(periodIndex);
  };
 
  return (
    <Container>
      <InnerContainer>
        <CenterLine />
        <VerticalLine />
        <Title>Исторические даты</Title>

        <CircleTimeline
          sampleData={sampleData}
          activePeriod={activePeriod}
          onPeriodChange={handlePeriodChange}
          angleStep={angleStep}
        />

        <YearsDisplay
          isAnimating={isAnimating}
          sampleData={sampleData}
          activePeriod={activePeriod}
        />
        <SliderNavigationWrapper>
          <Navigation
            totalPeriods={totalPeriods}
            activePeriod={activePeriod}
            handlePeriodChange={handlePeriodChange}
            isAnimating={isAnimating}
          />
          <div>
            <EventsSlider
              activeEvents={sampleData[activePeriod].events}
              onSlideChange={setCurrentSlide}
            />
          </div>
        </SliderNavigationWrapper>
        <OuterPagination
          totalPeriods={totalPeriods}
          activePeriod={activePeriod}
          onPaginationClick={handleOuterPaginationClick}
        />
      </InnerContainer>
    </Container>
  );
};

export default TimelineBlock;
