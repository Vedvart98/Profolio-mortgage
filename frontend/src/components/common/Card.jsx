import React from 'react'

const Card = ({ children, className = '', hover = false }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        hover ? 'transition-transform duration-300 hover:scale-105 hover:shadow-xl' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

const CardImage = ({ src, alt, className = '' }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  )
}

const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

const CardTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${className}`}>
      {children}
    </h3>
  )
}

const CardDescription = ({ children, className = '' }) => {
  return (
    <p className={`text-gray-600 ${className}`}>
      {children}
    </p>
  )
}

Card.Image = CardImage
Card.Content = CardContent
Card.Title = CardTitle
Card.Description = CardDescription

export default Card