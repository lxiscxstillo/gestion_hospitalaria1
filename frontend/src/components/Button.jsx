import React from 'react'

// Visual enhancement: gradient buttons with smooth hover/active transitions
export default function Button({ children, variant = 'primary', ...props }) {
  const cls = ['btn']
  if (variant === 'secondary') cls.push('secondary')
  if (variant === 'ghost') cls.push('ghost')
  return (
    <button className={cls.join(' ')} {...props}>{children}</button>
  )
}

