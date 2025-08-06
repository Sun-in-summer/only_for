import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import gsap from "gsap";
import {getSampleData} from "../../../mocks/mock-data"
import {
  EventDescription,
  YearsDisplay,
  StartYear,
  EndYear,
  Navigation,
  NavButton,
  NavInfo,
  NavButtons,
  SliderContainer,
  SliderNav,
  Slider,
  SliderButton,
  SliderTrack,
  Slide,
  EventYear,

} from "./time-line-block.styes";
import { CIRCLE_DEGREES } from '../../const';
import CircleTimeline from '../circle-time-line/circle-time-line';




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
  
    const nextSlide = () => {
      const maxSlides = sampleData[activePeriod].events.length;
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    };
  
    const prevSlide = () => {
      const maxSlides = sampleData[activePeriod].events.length;
      setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    };
  
 
  return (
    <div>
      <CircleTimeline
        sampleData={sampleData}
        activePeriod={activePeriod}
        onPeriodChange={handlePeriodChange}
        angleStep= {angleStep}
      />
        

        <YearsDisplay>
          <StartYear className={isAnimating ? "animating" : ""}>
            {sampleData[activePeriod].startYear}
          </StartYear>
          <EndYear className={isAnimating ? "animating" : ""}>
            {sampleData[activePeriod].endYear}
          </EndYear>
        </YearsDisplay>
    

      <Navigation>
        <NavInfo>
          0{activePeriod + 1}/0{totalPeriods}
        </NavInfo>
        <NavButtons>
          <NavButton
            onClick={() =>
              handlePeriodChange(
                (activePeriod - 1 + totalPeriods) % totalPeriods
              )
            }
            disabled={isAnimating}
          >
            ←
          </NavButton>
          <NavButton
            onClick={() =>
              handlePeriodChange((activePeriod + 1) % totalPeriods)
            }
            disabled={isAnimating}
          >
            →
          </NavButton>
        </NavButtons>
      </Navigation>

      <SliderContainer>
        <SliderNav>
          <SliderButton onClick={prevSlide}>‹</SliderButton>
          <SliderButton onClick={nextSlide}>›</SliderButton>
        </SliderNav>

        <Slider>
          <SliderTrack
            style={{
              transform: `translateX(-${currentSlide * 320}px)`,
            }}
          >
            {sampleData[activePeriod].events.map((event, index) => (
              <Slide key={`${activePeriod}-${index}`}>
                <EventYear>{event.year}</EventYear>
                <EventDescription>{event.year}</EventDescription>
              </Slide>
            ))}
          </SliderTrack>
        </Slider>
      </SliderContainer>
    </div>
  );
};

export default TimelineBlock;
