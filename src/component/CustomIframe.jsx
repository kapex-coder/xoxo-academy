import React, { useRef, useState } from "react";

const CustomIframe = ({ src, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef(null);

  const handleClick = (e) => {
    if (iframeRef.current) {
      iframeRef.current.src = `${src}&autoplay=1`;
      setIsPlaying(true);
    }
    e.preventDefault();
  };

  const pauseVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.src = src;
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="w-full"
      onClick={isPlaying ? pauseVideo : handleClick}>
      <iframe
        ref={iframeRef}
        className={`relative -z-10 w-full h-[150px] sm:h-[205px] lg:h-[220px]`}
        src={src}
        title={title}
        frameBorder="0"
        allow="autoplay"></iframe>
    </div>
  );
};

export default CustomIframe;
