import { useState, useRef, MouseEvent } from 'react';
import Img1 from '/public/images/for-slider/img1.png';
import Img2 from '/public/images/for-slider/img2.png';
import Img3 from '/public/images/for-slider/img4.png';

import styles from './styles.module.scss';

export const FoodSlider = () => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(true);
    setStartY(e.clientY);
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;

    const deltaY = e.clientY - startY;

    if (containerRef.current) {
      containerRef.current.scrollTop = scrollTop - deltaY;
    }
  };

  return (
    <section className={styles.container}>
      <a className={styles.title} href="">
        @tarlabakes
      </a>
      <div
        className={styles.slider}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <img src={Img1} alt="food_image" />
        <img src={Img2} alt="food_image" />
        <img src={Img3} alt="food_image" />
        <img src={Img1} alt="food_image" />
        <img src={Img2} alt="food_image" />
        <img src={Img3} alt="food_image" />
      </div>
    </section>
  );
};
