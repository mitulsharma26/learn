// Parallax.jsx
import React, { useRef, useEffect } from 'react';
import './Parallax.css';

const Parallax = () => {
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      if (textRef.current) textRef.current.style.marginTop = value * 2.5 + 'px';
      if (leafRef.current) {
        leafRef.current.style.top = value * -1.5 + 'px';
        leafRef.current.style.left = value * 1.5 + 'px';
      }
      if (hill5Ref.current) hill5Ref.current.style.left = value * 1.5 + 'px';
      if (hill4Ref.current) hill4Ref.current.style.left = value * -1.5 + 'px';
      if (hill1Ref.current) hill1Ref.current.style.top = value * 1 + 'px';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallex">
      <img src="/assets/hill1.png" id="hill1" alt="hill1" ref={hill1Ref} />
      <img src="/assets/hill2.png" id="hill2" alt="hill2" />
      <img src="/assets/hill3.png" id="hill3" alt="hill3" />
      <img src="/assets/hill4.png" id="hill4" alt="hill4" ref={hill4Ref} />
      <img src="/assets/hill5.png" id="hill5" alt="hill5" ref={hill5Ref} />
      <img src="/assets/tree.png" id="tree" alt="tree" />
      <h2 id="text" ref={textRef}>Mitul's Portfolio</h2>
      <img src="/assets/leaf.png" id="leaf" alt="leaf" ref={leafRef} />
      <img src="/assets/plant.png" id="plant" alt="plant" />
    </section>
  );
};

export default Parallax;
