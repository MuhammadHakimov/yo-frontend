import React from 'react'

function H2({ children }) {
  return (
    <h2 className={`text-xl sm:text-2xl  font-bold `}>
      {children}
    </h2>
  )
}

export default H2