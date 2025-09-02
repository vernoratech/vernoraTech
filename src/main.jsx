import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

// Scroll-reveal: robust initialization
const setupRevealObserver = () => {
  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    return rect.top <= vh * 0.88 && rect.bottom >= 0
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
    { threshold: 0.1 }
  )

  const revealEls = document.querySelectorAll('.reveal-up')
  revealEls.forEach((el) => {
    if (el.classList.contains('is-visible')) return
    if (isInViewport(el)) {
      el.classList.add('is-visible')
    } else {
      observer.observe(el)
    }
  })

  // Safety: ensure nothing stays hidden if JS timing fails
  setTimeout(() => {
    document.querySelectorAll('.reveal-up:not(.is-visible)').forEach((el) => {
      if (isInViewport(el)) el.classList.add('is-visible')
    })
  }, 600)
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Initialize reveals after paint and on window load
requestAnimationFrame(setupRevealObserver)
window.addEventListener('load', setupRevealObserver)
