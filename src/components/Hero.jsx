import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoSources = [
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1763360505/AI_Video_of_Future_Technologies_ojhxwi.mp4',
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1763360505/Tech_Background_Video_Generated_ln9mxx.mp4',
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1763360505/Tech_Website_Background_Video_Creation_vwvdye.mp4',
  ];
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleEnded = () => {
      setCurrentVideoIndex((index) => (index + 1) % videoSources.length);
    };

    videoElement.addEventListener('ended', handleEnded);

    return () => {
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, [videoSources.length]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const playVideo = () => {
      const playPromise = videoElement.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {});
      }
    };

    videoElement.load();
    playVideo();
  }, [currentVideoIndex]);

  return (
    <section id="home" className="relative pt-20 overflow-hidden reveal-up">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSources[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-indigo-100/80" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="text-center reveal-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Professional Landing Pages for
            <span className="text-primary"> Service Businesses</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-3">
            We create high-converting landing pages for CAs, Construction Companies,
            and Professional Services. Boost your online presence and get more clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-3">
            <a href="#portfolio" className="btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="btn-secondary border-1 border-primary">
              Start Your Project
            </a>
          </div>
        </div>

        {/* Hero Image/Stats */}
        <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center reveal-up" style={{ transitionDelay: '80ms' }}>
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center reveal-up" style={{ transitionDelay: '140ms' }}>
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center reveal-up" style={{ transitionDelay: '200ms' }}>
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
