import React from 'react'

const Section = ({ 
  children, 
  className = '', 
  bgColor = 'bg-white',
  padding = 'py-16 md:py-24'
}) => {
  return (
    <section className={`${bgColor} ${padding} ${className}`}>
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        {title}
      </h2>
    </div>
  )
}

Section.Header = SectionHeader

export default Section