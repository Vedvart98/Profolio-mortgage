import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-cyan-600 hover:bg-primary-dark text-white focus:ring-primary cursor-pointer',
    secondary: 'bg-white hover:transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-cyan-600 hover:border-0 text-gray-700 border-2 border-primary focus:ring-primary cursor-pointer',
    outline: 'bg-slate-200 hover:bg-primary hover:text-black text-gray-700 border-2 border-gray-200 focus:ring-white cursor-pointer',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button