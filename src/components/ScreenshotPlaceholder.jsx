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
  const resolvedSrc = imageSrc || defaultPlaceholder;
  const alt = imageAlt || title;
  const [currentSrc, setCurrentSrc] = React.useState(resolvedSrc);
  const [isImageLoaded, setIsImageLoaded] = React.useState(!imageSrc);

  React.useEffect(() => {
    setCurrentSrc(resolvedSrc);
    setIsImageLoaded(!imageSrc);
  }, [resolvedSrc, imageSrc]);

  const handleImageLoad = React.useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  const handleImageError = React.useCallback(() => {
    if (currentSrc !== defaultPlaceholder) {
      setCurrentSrc(defaultPlaceholder);
    }
    setIsImageLoaded(true);
  }, [currentSrc]);

  return (
    <figure
      className={`relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.45)] ${aspectClass} ${className}`.trim()}
    >
      <img
        src={currentSrc}
        alt={alt}
        className={`h-full w-full object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transform-gpu rounded-[26px] border border-[#D9E4F2]/60 bg-gradient-to-br from-[#D9E4F2] via-[#E8F1FC] to-[#F5F7FB] transition-opacity duration-500 ${isImageLoaded ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="flex h-full w-full flex-col justify-end gap-2 p-6">
          <div className="h-3 w-1/3 rounded-full bg-white/70" />
          <div className="h-3 w-2/3 rounded-full bg-white/50" />
          <div className="h-3 w-1/2 rounded-full bg-white/40" />
        </div>
      </div>
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
