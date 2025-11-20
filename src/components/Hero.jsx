import React, { useEffect, useRef, useState } from 'react';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';

const OFFER_DEADLINE = new Date('2025-12-31T23:59:59');

const Hero = () => {
  const videoSources = [
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1763360505/AI_Video_of_Future_Technologies_ojhxwi.mp4',
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1763360505/Tech_Background_Video_Generated_ln9mxx.mp4',
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1763360505/Tech_Website_Background_Video_Creation_vwvdye.mp4',
  ];
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleEnded = () => {
      setCurrentVideoIndex((index) => (index + 1) % videoSources.length);
    };

    const handleLoadedData = () => {
      setIsVideoReady(true);
    };

    const handleError = () => {
      setIsVideoReady(false);
      setCurrentVideoIndex((index) => (index + 1) % videoSources.length);
    };

    videoElement.addEventListener('ended', handleEnded);
    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('error', handleError);

    return () => {
      videoElement.removeEventListener('ended', handleEnded);
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('error', handleError);
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

    setIsVideoReady(false);
    videoElement.load();
    playVideo();
  }, [currentVideoIndex]);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const target = OFFER_DEADLINE.getTime();
      const diff = target - now;

      if (diff <= 0) {
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setCountdown({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    calculateTimeRemaining();
    const intervalId = window.setInterval(calculateTimeRemaining, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative pt-20 pb-20 min-h-[90vh] overflow-hidden reveal-up">
      <img
        src="/bg_pace_holder.jpeg"
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isVideoReady ? 'opacity-0' : 'opacity-100'
        }`}
        loading="eager"
        aria-hidden="true"
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isVideoReady ? 'opacity-100' : 'opacity-0'
        }`}
        src={videoSources[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/bg_pace_holder.jpeg"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-indigo-100/80" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div className="text-center reveal-up">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#0C2A63] leading-tight tracking-tight mb-6 sm:mb-8 px-4">
            Get a Landing Page That Works — 
            <span className="text-[#2DA3DB]"> Not Just Looks Good</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-3">
            We create sharp, simple sites that help your brand stand out, build trust online, and turn more visitors into clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-3">
            <a href="#portfolio" className="btn-primary">
              View Our Work
            </a>
            <a href="#contact" className="btn-secondary ">
              Start Your Project
            </a>
          </div>
          <div className="mt-12 grid gap-10 px-3 sm:grid-cols-[1fr_0.8fr] sm:items-center">
            <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Free Build Countdown
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Claim your complimentary build before the timer hits zero
              </h3>
              <p className="max-w-xl text-sm sm:text-base text-gray-600">
                Offer valid until 31 December 2025 — lock in your slot and launch with VernoraTech.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:justify-start sm:gap-6">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{countdown.days}</span>
                  <span className="mt-1 text-xs uppercase tracking-[0.3em] text-gray-500">Days</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{countdown.hours}</span>
                  <span className="mt-1 text-xs uppercase tracking-[0.3em] text-gray-500">Hours</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{countdown.minutes}</span>
                  <span className="mt-1 text-xs uppercase tracking-[0.3em] text-gray-500">Minutes</span>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{countdown.seconds}</span>
                  <span className="mt-1 text-xs uppercase tracking-[0.3em] text-gray-500">Seconds</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-r from-primary/15 via-indigo-400/10 to-sky-400/10 blur-2xl" aria-hidden="true" />
              <ScreenshotPlaceholder
                label="Landing Page Flow"
                title="Upcoming project screenshot"
                className="relative shadow-2xl"
                imageSrc="https://www.digitalconcepts.in/wp-content/uploads/2020/08/dc_portfolio_ssglass.png"
              />
            </div>
          </div>
        </div>

        {/* Hero Image/Stats */}
        {/* <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
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
        </div> */}

        {/* <div className="mt-14 sm:mt-16 md:mt-20 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl px-6 py-10 sm:px-12 sm:py-14 reveal-up">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center sm:text-left">
            Why Service Brands Trust VernoraTech
            </h2>
            <div className="flex justify-center sm:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Proven track record
              </span>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="relative space-y-4 text-center sm:text-left">
              <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary text-xl font-semibold">
                01
              </div>
              <div className="absolute hidden sm:block top-0 right-0 h-full w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent" />
              <h3 className="text-xl font-semibold text-gray-900">Conversion Strategy</h3>
              <p className="text-gray-600 text-base">
                Tailored messaging frameworks built to guide visitors from interest to inquiry seamlessly.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Audience insights + CRO playbooks
              </div>
            </div>
            <div className="relative space-y-4 text-center sm:text-left">
              <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary text-xl font-semibold">
                02
              </div>
              <div className="absolute hidden sm:block top-0 right-0 h-full w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent" />
              <h3 className="text-xl font-semibold text-gray-900">Lightning Delivery</h3>
              <p className="text-gray-600 text-base">
                Rapid turnaround with iterative feedback loops so your page goes live without delays.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Agile sprints + weekly reviews
              </div>
            </div>
            <div className="space-y-4 text-center sm:text-left">
              <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary text-xl font-semibold">
                03
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Growth Support</h3>
              <p className="text-gray-600 text-base">
                Ongoing optimization insights and 24/7 support to keep your lead flow consistently strong.
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Conversion analytics dashboard
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
