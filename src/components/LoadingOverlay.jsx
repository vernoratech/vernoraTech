import React from 'react';

const LoadingOverlay = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      <div className="flex flex-col items-center gap-6">
        <img src="/VernoraTech.png" alt="VernoraTech" className="h-14 w-auto" />
        <div className="w-40 h-2 rounded-full bg-slate-200 overflow-hidden">
          <div className="h-full w-full origin-left animate-[loadingPulse_1.4s_infinite] bg-gradient-to-r from-primary/40 via-primary to-primary/60" />
        </div>
      </div>
      <style>{`
        @keyframes loadingPulse {
          0% {
            transform: scaleX(0.1);
            opacity: 0.2;
          }
          50% {
            transform: scaleX(0.9);
            opacity: 1;
          }
          100% {
            transform: scaleX(0.1);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;
