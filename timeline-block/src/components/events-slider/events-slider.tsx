import { Swiper, SwiperSlide } from "swiper/react";
import { EventName } from '../../shared/interfaces/event-name';
import { EventDescription, EventYear, Slide } from './events-slider.styles';


type EventsSliderProps = {
  activeEvents: EventName[];
};

const EventsSlider: React.FC<EventsSliderProps> = ({ activeEvents }) => (
  <Swiper spaceBetween={20} slidesPerView={1} navigation>
    {activeEvents.map((event, index) => (
      <SwiperSlide key={index}>
        <Slide>
          <EventYear>{event.year}</EventYear>
          <EventDescription>{event.description}</EventDescription>
        </Slide>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default EventsSlider;
