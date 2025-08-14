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
  MID_EVENTS_ON_SLIDE,
  MIN_EVENT_DESCRIPTION_COLUMN_GAP,
  MINIMIZED_EVENTS_ON_SLIDE,
} from "../../const";


type EventsSliderProps = {
  activeEvents: EventName[];
  onSlideChange?: (slideIndex: number) => void;
};

const EventsSlider: React.FC<EventsSliderProps> = ({
  activeEvents,
  onSlideChange,
}) => {
  console.log(activeEvents);
  return (
    <Swiper
      spaceBetween={EVENT_DESCRIPTION_COLUMN_GAP}
      slidesPerView={DEFAULT_BIG_SLIDES_QTY}
      onSlideChange={(swiper) => {
        onSlideChange?.(swiper.activeIndex);
      }}
      slidesPerGroup={1}
      pagination={{
        el: ".swiper-pagination",
        enabled: true,
        clickable: true,
      }}
    >
      {activeEvents.map((event, index, activeEvents) => (
        <SwiperSlide
          className="outer-swiper-slide"
          key={index}
          style={{
            width:
              activeEvents.length <= DEFAULT_EVENTS_ON_SLIDE ? "100%" : "auto",
          }}
        >
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
              loop={false}
              slidesPerGroup={1}
              breakpoints={{
                0: {
                  slidesPerView: MINIMIZED_EVENTS_ON_SLIDE,
                  spaceBetween: MIN_EVENT_DESCRIPTION_COLUMN_GAP,
                  centeredSlides: false,
                },
                430: {
                  slidesPerView: MID_EVENTS_ON_SLIDE,
                  spaceBetween: EVENT_DESCRIPTION_COLUMN_GAP,
                },
                1024: {
                  slidesPerView: Math.min(
                    activeEvents.length,
                    DEFAULT_EVENTS_ON_SLIDE
                  ),
                  spaceBetween: EVENT_DESCRIPTION_COLUMN_GAP,
                },
              }}
            >
              {activeEvents.map((event, index) => (
                <SwiperSlide
                  key={index}
                  className="inner-slide"
                  style={{ width: `100%` }}
                >
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
