import { Swiper, SwiperSlide } from "swiper/react";
import { EventName } from "../../shared/interfaces/event-name";
import {
  EventDescription,
  EventYear,
  SliderTrack,
  InnerNavButton,
} from "./events-slider.styles";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  DEFAULT_BIG_SLIDES_QTY,
  DEFAULT_EVENTS_ON_SLIDE,
  EVENT_DESCRIPTION_COLUMN_GAP,
  MINIMIZED_EVENTS_ON_SLIDE,
} from "../../const";
import { useImperativeHandle, useRef, forwardRef } from "react";

type EventsSliderProps = {
  activeEvents: EventName[];
  onSlideChange?: (slideIndex: number) => void;
};

const EventsSlider : React.FC<EventsSliderProps>=({ activeEvents, onSlideChange }) => {


  return (
    <Swiper
      // style={{ overflow: "visible" }}
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
              modules={[Navigation]}
              spaceBetween={EVENT_DESCRIPTION_COLUMN_GAP}
              slidesPerView={DEFAULT_EVENTS_ON_SLIDE}
              navigation={{
                prevEl: ".inner-swiper-button-prev",
                nextEl: ".inner-swiper-button-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: MINIMIZED_EVENTS_ON_SLIDE,
                },
                1024: {
                  slidesPerView: DEFAULT_EVENTS_ON_SLIDE,
                },
              }}
            >
              {activeEvents.map((event, index) => (
                <SwiperSlide key={index}>
                  <EventYear>{event.year}</EventYear>
                  <EventDescription>{event.description}</EventDescription>
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
