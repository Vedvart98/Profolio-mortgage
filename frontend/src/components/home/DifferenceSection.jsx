import React from 'react'
import Section from '../common/Section'
import Button from '../common/Button'

const DifferenceSection = () => {
  return (
    <Section className='px-4'>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <Section.Header
            subtitle="Why Choose Us"
            title="The Profolio Mortgage Difference"
          />
          <div className="space-y-4 text-gray-600 mb-8">
            <p>
              PMG's philosophy is based on a strong and genuine belief in the "customer for life" principal of doing business. This philosophy fuels IMG's employees and helps to create strong relationships with both its customers and local real estate professionals.
            </p>
            <p>
              The primary goal of IMG is to make the loan process as fast, simple, accurate, and affordable as possible for its customers.
            </p>
          </div>
          <Button variant="primary" size="lg">
            More about PMG
          </Button>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
            alt="Team collaboration"
            className="rounded-lg shadow-xl w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  )
}

export default DifferenceSection