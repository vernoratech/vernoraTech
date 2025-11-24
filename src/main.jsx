import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

// Scroll-reveal: robust initialization with fallbacks and mutation handling
const setupRevealObserver = () => {
  const rootEl = document.documentElement
  // Mark JS as ready so CSS can apply initial hidden state only when JS is active
  rootEl.classList.add('js-ready')

  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    return rect.top <= viewportHeight * 0.95 && rect.bottom >= 0
  }

  const revealIfNeeded = (el) => {
    if (!el || el.classList.contains('is-visible')) return
    if (prefersReducedMotion || isInViewport(el)) {
      el.classList.add('is-visible')
    }
  }

  const revealAllImmediately = () => {
    document.querySelectorAll('.reveal-up').forEach((el) => el.classList.add('is-visible'))
  }

  // Fallback: If IntersectionObserver is not supported, reveal everything
  if (typeof IntersectionObserver === 'undefined') {
    revealAllImmediately()
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    }
  )

  const initTargets = () => {
    const revealEls = document.querySelectorAll('.reveal-up')
    revealEls.forEach((el) => {
      if (el.classList.contains('is-visible')) return
      if (prefersReducedMotion) {
        el.classList.add('is-visible')
        return
      }
      if (isInViewport(el)) {
        el.classList.add('is-visible')
      } else {
        observer.observe(el)
      }
    })
  }

  initTargets()

  // Mutation observer: handle dynamically added sections/cards
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) return
        if (node.matches && node.matches('.reveal-up')) {
          revealIfNeeded(node)
          if (!node.classList.contains('is-visible')) observer.observe(node)
        }
        node.querySelectorAll && node.querySelectorAll('.reveal-up').forEach((child) => {
          revealIfNeeded(child)
          if (!child.classList.contains('is-visible')) observer.observe(child)
        })
      })
    })
  })
  mutationObserver.observe(document.body, { childList: true, subtree: true })

  // Safety: ensure nothing stays hidden if timing fails
  setTimeout(() => {
    document.querySelectorAll('.reveal-up:not(.is-visible)').forEach((el) => revealIfNeeded(el))
  }, 800)

  // Re-check on resize (mobile address bar, etc.)
  let resizeTimeout
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      document.querySelectorAll('.reveal-up:not(.is-visible)').forEach((el) => revealIfNeeded(el))
    }, 150)
  })

  // Subtle scroll drift: updates CSS var for visible elements only
  if (!prefersReducedMotion) {
    let lastScrollY = window.scrollY
    let ticking = false
    const updateDrift = () => {
      ticking = false
      const currentY = window.scrollY
      const delta = currentY - lastScrollY
      lastScrollY = currentY
      // Increase intensity slightly and clamp
      const drift = Math.max(-10, Math.min(10, delta * 0.22))
      document.querySelectorAll('.reveal-up.is-visible').forEach((el) => {
        el.style.setProperty('--scroll-drift', drift + 'px')
      })
    }
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateDrift)
        ticking = true
      }
    }, { passive: true })
  }
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Initialize reveals after paint and on window load
requestAnimationFrame(setupRevealObserver)
window.addEventListener('load', setupRevealObserver)

// Add app-mounted class to enable page fade-in once React mounts and styles are ready
const markAppMounted = () => {
  document.documentElement.classList.add('app-mounted')
}
// Use rAF to ensure it's after paint, and on load as backup
requestAnimationFrame(markAppMounted)
window.addEventListener('load', markAppMounted)
