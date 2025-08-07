import { Swiper, SwiperSlide } from "swiper/react";
import { EventName } from '../../shared/interfaces/event-name';
import {
  EventDescription,
  EventYear,
  SingleSlide,
  SliderTrack,
  InnerNavButton,
} from "./events-slider.styles";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


type EventsSliderProps = {
  activeEvents: EventName[];
};

const EventsSlider: React.FC<EventsSliderProps> = ({ activeEvents }) => {
    return (
      <Swiper spaceBetween={80} slidesPerView={1}>
        {activeEvents.map((event, index) => (
          <SwiperSlide key={index}>
            <SliderTrack>
              {/* {activeEvents.map((event, index) => (
                  <SingleSlide key={index}>
                    <EventYear>{event.year}</EventYear>
                    <EventDescription>{event.description}</EventDescription>
                  </SingleSlide>
                ))} */}
              {/* <SwiperResetStyles /> */}
              <InnerNavButton className="swiper-button-prev">
                { "<"}
              </InnerNavButton>
              <InnerNavButton className="swiper-button-next">
                {">"}
              </InnerNavButton>
              {/* <InnerNavButton>{">"}</InnerNavButton>
              <InnerNavButton>{"<"}</InnerNavButton> */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={20} // расстояние между слайдами
                slidesPerView={3} // показывать по 3 элемента на слайде
                pagination={{ clickable: true }} // точки пагинации (по желанию)
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
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
 
}

export default EventsSlider;
