import "./Filler.css";
import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import { Box } from "@mui/material";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Box className="filler-section" id={`filler-section-${id}`}>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt="A London skyscraper" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </Box>
  );
}

export default function Filler() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".filler-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 200 && rect.bottom >= 0) {
          (section as HTMLElement).style.scrollSnapAlign = "start";
        } else {
          (section as HTMLElement).style.scrollSnapAlign = "none";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="filler-wrapper">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} key={image} />
      ))}
    </div>
  );
}