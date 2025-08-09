import { Swiper, SwiperSlide } from "swiper/react";
import { EventName } from "../../shared/interfaces/event-name";
import {
  EventDescription,
  EventYear,
  SliderTrack,
  InnerNavButton,
  InnerSlideContainer,

} from "./events-slider.styles";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  DEFAULT_BIG_SLIDES_QTY,
  DEFAULT_EVENTS_ON_SLIDE,
  EVENT_DESCRIPTION_COLUMN_GAP,
  MIN_EVENT_DESCRIPTION_COLUMN_GAP,
  MINIMIZED_EVENTS_ON_SLIDE,
} from "../../const";
import { useImperativeHandle, useRef, forwardRef } from "react";

type EventsSliderProps = {
  activeEvents: EventName[];
  onSlideChange?: (slideIndex: number) => void;
};

const EventsSlider: React.FC<EventsSliderProps> = ({
  activeEvents,
  onSlideChange,
}) => {
  return (
    <Swiper
      spaceBetween={EVENT_DESCRIPTION_COLUMN_GAP}
      slidesPerView={DEFAULT_BIG_SLIDES_QTY}
      onSlideChange={(swiper) => {
        onSlideChange?.(swiper.activeIndex);
      }}
      pagination={{
        el: ".swiper-pagination",
        enabled: true,
        clickable: true,
      }}
    >
      {activeEvents.map((event, index) => (
        <SwiperSlide className="outer-swiper-slide" key={index}>
          <SliderTrack>
            <InnerNavButton className="inner-swiper-button-prev">
              {"<"}
            </InnerNavButton>
            <InnerNavButton className="inner-swiper-button-next">
              {">"}
            </InnerNavButton>
            <Swiper
              className="inner-swiper"
              modules={[Navigation]}
              spaceBetween={EVENT_DESCRIPTION_COLUMN_GAP}
              
              navigation={{
                prevEl: ".inner-swiper-button-prev",
                nextEl: ".inner-swiper-button-next",
              }}
              nested={true}
              allowTouchMove={true}
              touchStartPreventDefault={false}
              breakpoints={{
                0: {
                  slidesPerView: MINIMIZED_EVENTS_ON_SLIDE,
                  spaceBetween: MIN_EVENT_DESCRIPTION_COLUMN_GAP,
                  centeredSlides: false,
                },
                430: {
                  slidesPerView: DEFAULT_EVENTS_ON_SLIDE,
                  spaceBetween: EVENT_DESCRIPTION_COLUMN_GAP,
                },
              }}
            >
              {activeEvents.map((event, index) => (
                <SwiperSlide key={index} className="inner-slide">
                  <InnerSlideContainer>
                    <EventYear>{event.year}</EventYear>
                    <EventDescription>{event.description}</EventDescription>
                  </InnerSlideContainer>
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderTrack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventsSlider;
