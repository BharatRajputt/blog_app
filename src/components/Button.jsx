import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'text-white',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
   <button className={`px-4 py-2 rounded-lg ${bgColor} ${className} ${textColor} `} {...props}>
    {children}
   </button>
  )
}

export default Button