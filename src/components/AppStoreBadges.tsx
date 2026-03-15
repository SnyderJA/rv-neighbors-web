// Placeholder store URLs — replace with real links once the app is live in stores
const APP_STORE_URL   = '#'
const PLAY_STORE_URL  = '#'

interface AppStoreBadgesProps {
  size?: 'sm' | 'lg'
  center?: boolean
}

export default function AppStoreBadges({ size = 'lg', center = false }: AppStoreBadgesProps) {
  const btnClass = size === 'lg'
    ? 'flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-xl px-5 py-3 transition-all'
    : 'flex items-center gap-2.5 bg-primary hover:bg-primary-light border border-primary-light text-white rounded-xl px-4 py-2.5 transition-all'

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${center ? 'items-center justify-center' : ''}`}>
      {/* App Store */}
      <a href={APP_STORE_URL} className={btnClass}>
        <svg className={size === 'lg' ? 'w-7 h-7 flex-shrink-0' : 'w-6 h-6 flex-shrink-0'} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div className="text-left">
          <p className={`${size === 'lg' ? 'text-[10px]' : 'text-[9px]'} opacity-80 leading-none`}>Download on the</p>
          <p className={`${size === 'lg' ? 'text-base' : 'text-sm'} font-semibold leading-snug`}>App Store</p>
        </div>
      </a>

      {/* Google Play */}
      <a href={PLAY_STORE_URL} className={btnClass}>
        <svg className={size === 'lg' ? 'w-7 h-7 flex-shrink-0' : 'w-6 h-6 flex-shrink-0'} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.37.2.8.22 1.2.07l12.44-7.19-2.65-2.65-10.99 9.77zM.46 1.4C.17 1.76 0 2.27 0 2.93v18.14c0 .66.17 1.17.47 1.53l.08.08 10.16-10.16v-.24L.54 1.32.46 1.4zM20.6 10.4l-2.74-1.58-2.97 2.97 2.97 2.97 2.75-1.59c.79-.45.79-1.32-.01-1.77zM4.38.17L16.82 7.36l-2.65 2.65L3.18.24C3.58.08 4.01.1 4.38.17z"/>
        </svg>
        <div className="text-left">
          <p className={`${size === 'lg' ? 'text-[10px]' : 'text-[9px]'} opacity-80 leading-none`}>Get it on</p>
          <p className={`${size === 'lg' ? 'text-base' : 'text-sm'} font-semibold leading-snug`}>Google Play</p>
        </div>
      </a>
    </div>
  )
}
