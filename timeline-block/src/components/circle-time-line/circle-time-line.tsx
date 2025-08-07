import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TimeSegment } from "../../shared/interfaces/time-segment";
import {
  CircleContainer,
  Circle,
} from "./circle-time-line.styles";
import PeriodPointsList from "../period-points-list/period-points-list";

import { CIRCLE_DEGREES, HALF_OF_CIRCLE } from "../../const";


type CircleTimelineProps = {
  sampleData: TimeSegment[];
  activePeriod: number;
  angleStep: number;
  onPeriodChange: (newPeriod: number) => void;
};

const CircleTimeline: React.FC<CircleTimelineProps> = ({
  sampleData,
  activePeriod,
  angleStep,
  onPeriodChange,
}) => {
  const circleRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const lastActivePeriod = useRef(activePeriod);

  const [circleRotation, setCircleRotation] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(true);

  useEffect(() => {
    if (activePeriod !== lastActivePeriod.current) {
      setAnimationComplete(false);
      animateToPosition(activePeriod);
    }
  }, [activePeriod]);

  useEffect(() => {
    gsap.set(circleRef.current, { rotation: 0, scale: 1 });
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  const animateToPosition = (targetIndex: number) => {
    if (!circleRef.current) {
      console.warn("circleRef.current is null");
      return;
    }
    const dotCount = sampleData.length;

    const currentAngle = (lastActivePeriod.current * CIRCLE_DEGREES) / dotCount;
    const targetAngle = (targetIndex * CIRCLE_DEGREES) / dotCount;

    let angleDiff = targetAngle - currentAngle;
    if (angleDiff > HALF_OF_CIRCLE) angleDiff -= CIRCLE_DEGREES;
    else if (angleDiff < -HALF_OF_CIRCLE) angleDiff += CIRCLE_DEGREES;

    if (timelineRef.current) timelineRef.current.kill();
    const tl = gsap.timeline();
    timelineRef.current = tl;

    tl.to(circleRef.current, {
      rotation: `+=${angleDiff}`,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: () => {
        if (circleRef.current) {
          setCircleRotation(
            gsap.getProperty(circleRef.current, "rotation") as number
          );
        }
      },
      onComplete: () => {
        setAnimationComplete(true); 
      },
    });

    tl.to(
      circleRef.current,
      {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      circleRef.current,
      {
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0.2
    );

    dotsRef.current.forEach((dot, index) => {
      if (!dot) return;
      if (dot && index === targetIndex) {
        tl.to(
          dot,
          {
            scale: 1.3,
            duration: 0.3,
            ease: "back.out(1.7)",
          },
          0.4
        );

        tl.to(
          dot,
          {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0.7
        );
      }
    });

    lastActivePeriod.current = targetIndex;
  };

  return (
    <CircleContainer>
      <Circle ref={circleRef}>
        <PeriodPointsList
          sampleData={sampleData}
          activePeriod={activePeriod}
          angleStep={angleStep}
          dotsRef={dotsRef}
          onPeriodChange={onPeriodChange}
          circleRotation={circleRotation}
          animationComplete={animationComplete}
        />
      </Circle>
    </CircleContainer>
  );
};

export default CircleTimeline;
