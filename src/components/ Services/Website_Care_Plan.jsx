import React, { useEffect } from 'react'

const Website_Care_Plan = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Website Care Plan</h1>
    </div>
  )
}

export default Website_Care_Plan
