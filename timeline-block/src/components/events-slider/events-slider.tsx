import { Swiper, SwiperSlide } from "swiper/react";
import { EventName } from '../../shared/interfaces/event-name';
import { EventDescription, EventYear, Slide, SliderTrack } from './events-slider.styles';


type EventsSliderProps = {
  activeEvents: EventName[];
};

const EventsSlider: React.FC<EventsSliderProps> = ({ activeEvents }) => {
    return (
      <Swiper spaceBetween={20} slidesPerView={1} navigation>
        {activeEvents.map((event, index) => (
          <SwiperSlide key={index}>
            <SliderTrack>
              {activeEvents.map((event, index) => (
                <div  key={index}>
                  <div>
                    <EventYear>{event.year}</EventYear>
                    <EventDescription>{event.description}</EventDescription>
                  </div>
                </div>
              ))}
            </SliderTrack>
          </SwiperSlide>
        ))}
      </Swiper>
    );
 
}

export default EventsSlider;
