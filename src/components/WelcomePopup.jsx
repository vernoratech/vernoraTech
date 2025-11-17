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
        <div className="border-b border-slate-200 bg-gradient-to-br from-blue-50 to-white px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-green-600 px-2.5 py-1 text-xs font-bold text-white">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                100% FREE OFFER
              </div>
              <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Build Your First Website
                <span className="block text-green-600">Absolutely FREE</span>
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
          <div className="rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 p-4 mb-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl font-bold text-red-600 line-through">₹14,999</span>
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-3xl font-bold text-green-600">₹0</span>
            </div>
            <p className="text-center text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Limited Time • First-Come, First-Served
            </p>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed text-center mb-4">
            Launch your professional website with our expert team—completely free for your first project.
          </p>

          {/* Features */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <div className="flex-shrink-0 rounded-lg bg-green-100 p-1.5">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-900">Professional Design & Development</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex-shrink-0 rounded-lg bg-blue-100 p-1.5">
                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-900">Mobile-Responsive & Fast Loading</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="flex-shrink-0 rounded-lg bg-purple-100 p-1.5">
                <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-900">Free Hosting & Domain Setup</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-5 flex flex-col gap-2">
            <button
              type="button"
              onClick={onStart}
              className="w-full rounded-lg bg-gradient-to-r from-green-600 to-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-600/30 hover:from-green-700 hover:to-blue-700 transform hover:scale-[1.02] transition-all cursor-pointer"
            >
              🚀 Start Building FREE Now
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-lg border-2 border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
            >
              Maybe Later
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-500 text-center">
            🔥 Only 10 slots left this week
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;