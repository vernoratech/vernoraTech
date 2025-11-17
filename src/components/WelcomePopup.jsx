import React from 'react';

const WelcomePopup = ({ isOpen, onClose, onStart }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-md sm:max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-white px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                PARTNERSHIP
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                ₹14,999 Website Build
                <span className="block text-green-600">Now FREE</span>
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-5">
          <p className="text-sm text-slate-700 leading-relaxed">
            <span className="inline-block px-2 py-0.5 rounded bg-red-50 text-red-600 font-semibold text-xs line-through mr-1.5">₹14,999</span>
            <span className="inline-block px-2 py-0.5 rounded bg-green-50 text-green-700 font-bold text-xs mr-2">FREE</span>
            Our senior engineers will build your professional website—complimentary for qualified partners.
          </p>

          {/* Features */}
          <div className="mt-4 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="flex-shrink-0 rounded-lg bg-green-100 p-1.5">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-900">Production Ready</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex-shrink-0 rounded-lg bg-purple-100 p-1.5">
                <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-900">Fast Deployment</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex-shrink-0 rounded-lg bg-orange-100 p-1.5">
                <svg className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-900">Expert Team</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-5 flex flex-col gap-2">
            <button
              type="button"
              onClick={onStart}
              className="w-full rounded-lg bg-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 cursor-pointer "
            >
              🎁 Claim FREE Website (Worth ₹14,999)
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg border-2 border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            >
              Review Later
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-500 text-center">
            Limited slots • Qualification required
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;