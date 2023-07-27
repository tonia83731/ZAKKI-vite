
import { useState, useEffect } from "react";

import HomeCarouselItemSwitch from "./HomeCarouselItemSwitch";

export default function HomeCarousel() {
  const homePage = ["main", "program", "story"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = (current + 1) % homePage.length;
    const id = setTimeout(() => setCurrent(next), 5000);
    return () => clearTimeout(id);
  }, [current]);

  const currentPage = homePage[current];

  return (
    <>
      <HomeCarouselItemSwitch page={currentPage} />
    </>
  );
}

