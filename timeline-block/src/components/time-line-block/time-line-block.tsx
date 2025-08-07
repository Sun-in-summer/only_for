import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import {getSampleData} from "../../../mocks/mock-data"
import { CIRCLE_DEGREES } from '../../const';
import CircleTimeline from '../circle-time-line/circle-time-line';
import YearsDisplay from '../years-display/years-display';
import Navigation from '../navigation/navigation';
import EventsSlider from '../events-slider/events-slider';
import { CenterLine, Container, InnerContainer, Title, VerticalLine } from './time-line-block.styes';




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
  
    // const nextSlide = () => {
    //   const maxSlides = sampleData[activePeriod].events.length;
    //   setCurrentSlide((prev) => (prev + 1) % maxSlides);
    // };
  
    // const prevSlide = () => {
    //   const maxSlides = sampleData[activePeriod].events.length;
    //   setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    // };
  
 
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

        <Navigation
          totalPeriods={totalPeriods}
          activePeriod={activePeriod}
          handlePeriodChange={handlePeriodChange}
          isAnimating={isAnimating}
        />

        <EventsSlider activeEvents={sampleData[activePeriod].events} />
      </InnerContainer>
    </Container>
  );
};

export default TimelineBlock;
