import React, { useEffect, useRef, useState } from 'react';
import { Play, ArrowRight, CheckCircle2, ChevronRight, Timer, ShieldCheck, BarChart3, Rocket } from 'lucide-react';
import ScreenshotPlaceholder from './ScreenshotPlaceholder';
import { useNavigate } from 'react-router-dom';

const OFFER_DEADLINE = new Date('2025-12-31T23:59:59');

// --- Sub-component: ScreenshotPlaceholder ---
// const ScreenshotPlaceholder = ({ label, title, className, imageSrc }) => (
//   <div className={`relative overflow-hidden rounded-2xl border border-[#D9E4F2] bg-[#FAFAFA] ${className}`}>
//     {imageSrc ? (
//       <img src={imageSrc} alt={title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
//     ) : (
//       <div className="flex h-full w-full items-center justify-center bg-[#D9E4F2]/20">
//         <span className="text-[#6E7787]">{label}</span>
//       </div>
//     )}
//     <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl" />
//   </div>
// );

const Hero = ({ isInitialLoading }) => {

  const navigate = useNavigate();

  const videoSources = [
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1764908256/Tech_Company_Promotional_Video_Generation_krvf5p.mp4',
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1764908256/Premium_Tech_Promo_Video_Generation_plwgrb.mp4',
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1763360505/AI_Video_of_Future_Technologies_ojhxwi.mp4',
    'https://res.cloudinary.com/ddo1qupzg/video/upload/v1763360505/Tech_Website_Background_Video_Creation_vwvdye.mp4',

  ];
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  // Video Handling Logic
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
        playPromise.catch(() => { });
      }
    };

    setIsVideoReady(false);
    videoElement.load();
    playVideo();
  }, [currentVideoIndex]);

  // Countdown Logic
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

  useEffect(() => {
    if (isInitialLoading) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsHeroVisible(true);
    }, 150);

    return () => window.clearTimeout(timer);
  }, [isInitialLoading]);

  return (
    <section id="home" className="relative pt-32 pb-20 min-h-[95vh] overflow-hidden bg-[#FAFAFA]">

      {/* --- Video Background Layer --- */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <div className={`absolute inset-0 bg-[#1A3A6F] transition-opacity duration-700 ${isVideoReady ? 'opacity-0' : 'opacity-100'}`} />
        <video
          ref={videoRef}
          className={`absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${isVideoReady ? 'opacity-40' : 'opacity-0'}`}
          src={videoSources[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          preload="auto"
        />
        {/* Overlay Gradients for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/95 via-[#FAFAFA]/90 to-[#FAFAFA]/60 sm:via-[#FAFAFA]/80 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAFA]/50 to-[#FAFAFA]" />
      </div>

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform-gpu transition-all duration-700 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
          }`}
      >

        {/* --- Main Hero Content --- */}
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1A3A6F]/10 bg-white/50 backdrop-blur-sm px-4 py-1.5 mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#2DA3DB] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A3A6F]">Accepting New Clients</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1C1F26] leading-[1.1] tracking-tight mb-6">
            Get a Landing Page That Works —
            <span className="text-[#2DA3DB] block mt-2"> Not Just Looks Good</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#6E7787] mb-10 max-w-2xl leading-relaxed">
            We create sharp, simple sites that help your brand stand out, build trust online, and turn more visitors into clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1A3A6F] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#1A3A6F]/20 transition-all hover:bg-[#2DA3DB] hover:shadow-[#2DA3DB]/30 hover:-translate-y-1 cursor-pointer hover:scale-105"
            >
              View Our Work
              <ArrowRight size={16} />
            </a>
            <a
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1C1F26] border border-[#D9E4F2] shadow-sm transition-all hover:border-[#1A3A6F]/30 hover:bg-[#FAFAFA] cursor-pointer hover:scale-105 hover:-translate-y-1"
            >
              <Play size={16} className="text-[#2DA3DB] fill-[#2DA3DB]" />
              Start Your Project
            </a>
          </div>
        </div>

        {/* --- Countdown & Feature Section --- */}
        <div
          className={`mt-20 lg:mt-32 transform-gpu transition-all duration-700 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="rounded-3xl border border-[#D9E4F2] bg-white/80 backdrop-blur-md p-8 sm:p-10 lg:p-12 shadow-2xl shadow-[#1A3A6F]/5">
            {/* <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center"> */}
            <div>
              {/* Left Column: Text & Timer */}
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#2DA3DB]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#1A3A6F] w-fit">
                  <Timer size={14} />
                  Free Build Countdown
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1F26] mb-3">
                    Claim your complimentary build before the timer hits zero
                  </h3>
                  <p className="text-[#6E7787] text-base leading-relaxed">
                    Offer valid until 31 December 2025 — lock in your slot and launch with VernoraTech.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 sm:gap-8 mt-2">
                  {[
                    { label: 'Days', value: countdown.days },
                    { label: 'Hours', value: countdown.hours },
                    { label: 'Minutes', value: countdown.minutes },
                    { label: 'Seconds', value: countdown.seconds },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-3xl sm:text-5xl font-black text-[#1A3A6F] font-mono tracking-tight">
                        {item.value}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#2DA3DB]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Screenshot */}
              {/* <div className="relative group perspective-1000">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#2DA3DB]/20 to-[#1A3A6F]/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <ScreenshotPlaceholder
                  label="Landing Page Flow"
                  title="Upcoming project screenshot"
                  className="relative shadow-lg transition-transform duration-500 group-hover:rotate-y-2 group-hover:scale-[1.02]"
                  imageSrc="https://www.digitalconcepts.in/wp-content/uploads/2020/08/dc_portfolio_ssglass.png"
                />
              </div> */}
            </div>
          </div>
        </div>

        {/* --- "Why Trust Us" Cards --- */}
        <div
          className={`mt-20 grid-cols-1 md:grid-cols-3 gap-6 md:grid hidden transform-gpu transition-all duration-700 ease-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '350ms' }}
        >
          {/* Card 1 */}
          <div className="group rounded-2xl border border-[#D9E4F2] bg-white p-6 shadow-sm transition-all hover:border-[#2DA3DB]/30 hover:shadow-lg hover:shadow-[#1A3A6F]/5">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2DA3DB]/10 text-[#2DA3DB] group-hover:bg-[#2DA3DB] group-hover:text-white transition-colors">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1C1F26] mb-2">Conversion Strategy</h3>
            <p className="text-sm text-[#6E7787] leading-relaxed">
              Tailored messaging frameworks built to guide visitors from interest to inquiry seamlessly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl border border-[#D9E4F2] bg-white p-6 shadow-sm transition-all hover:border-[#2DA3DB]/30 hover:shadow-lg hover:shadow-[#1A3A6F]/5">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2DA3DB]/10 text-[#2DA3DB] group-hover:bg-[#2DA3DB] group-hover:text-white transition-colors">
              <Rocket size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1C1F26] mb-2">Lightning Delivery</h3>
            <p className="text-sm text-[#6E7787] leading-relaxed">
              Rapid turnaround with iterative feedback loops so your page goes live without delays.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl border border-[#D9E4F2] bg-white p-6 shadow-sm transition-all hover:border-[#2DA3DB]/30 hover:shadow-lg hover:shadow-[#1A3A6F]/5">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#2DA3DB]/10 text-[#2DA3DB] group-hover:bg-[#2DA3DB] group-hover:text-white transition-colors">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1C1F26] mb-2">Growth Support</h3>
            <p className="text-sm text-[#6E7787] leading-relaxed">
              Ongoing optimization insights and 24/7 support to keep your lead flow consistently strong.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;