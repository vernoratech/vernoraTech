import React, { useEffect } from 'react'

const Speed_Optimization = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Speed Optimization (Core Web Vitals)</h1>
    </div>
  )
}

export default Speed_Optimization
