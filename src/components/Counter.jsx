import React, { useEffect, useRef, useState } from "react";

const Counter = ({ target, label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  // Format number (1,000+)
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          // let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // easeOut effect
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const value = Math.floor(easeOut * target);
            setCount(value);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="ultra-card" ref={ref}>
      <div className="icon">{icon}</div>
      <h2>{formatNumber(count)}+</h2>
      <p>{label}</p>
    </div>
  );
};

export default Counter;