import React from 'react';

const placeholderSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="50%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#7c3aed" />
    </linearGradient>
  </defs>
  <rect fill="url(#gradient)" width="1600" height="1000" rx="56" />
  <g fill="white" opacity="0.75">
    <rect x="220" y="210" width="1160" height="120" rx="24" opacity="0.28" />
    <rect x="220" y="360" width="900" height="96" rx="22" opacity="0.16" />
    <rect x="220" y="484" width="1060" height="96" rx="22" opacity="0.16" />
    <rect x="220" y="608" width="820" height="96" rx="22" opacity="0.16" />
    <rect x="220" y="750" width="520" height="84" rx="20" opacity="0.16" />
  </g>
</svg>
`;

const defaultPlaceholder = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(placeholderSvg)}`;

const ScreenshotPlaceholder = ({
  title = 'Project Screenshot',
  label,
  imageSrc,
  imageAlt,
  aspectClass = 'aspect-[16/10]',
  className = ''
}) => {
  const src = imageSrc || defaultPlaceholder;
  const alt = imageAlt || title;

  return (
    <figure
      className={`relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.45)] ${aspectClass} ${className}`.trim()}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/0 to-slate-900/20" aria-hidden="true" />
      {(label || title) && (
        <figcaption className="absolute inset-x-0 bottom-0 flex justify-start px-4 pb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-700 backdrop-blur">
            {label || title}
          </span>
        </figcaption>
      )}
    </figure>
  );
};

export default ScreenshotPlaceholder;
