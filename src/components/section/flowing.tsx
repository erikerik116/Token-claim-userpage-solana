import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
} from "framer-motion";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 137px; // Adjust height as needed
  background-color: #f8d467;
`;

const ScrollingText = styled(motion.div)`
  display: inline-block;
  font-size: 60px; // Adjust font size as needed
  color: #252525;
  font-family: BarricadaW01-Regular;
  white-space: nowrap;
`;

// Component
export const FlowingTitle = (text: any) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    const moveBy =
      directionFactor.current * velocityFactor.get() * (delta / 1000);
    baseX.set(baseX.get() + moveBy);

    // Switch direction based on scroll velocity
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
  });

  return (
    <Container>
      <ScrollingText
        style={{ x: baseX }}
        animate={
          {
            x: [0, "100vw", -text.length * 60],
          } /* Adjust '60' to match font size or adjust dynamically */
        }
        transition={{ repeat: Infinity, repeatType: "loop", duration: 10 }} // Adjust duration as needed
      >
        {text} {text} {text} {text} {text}{" "}
        {/* Repeat text for infinite scroll effect */}
      </ScrollingText>
    </Container>
  );
};

export default FlowingTitle;
