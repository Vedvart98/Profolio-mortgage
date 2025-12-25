import React from 'react'
import Section from '../common/Section'
import Button from '../common/Button'

const AboutSection = () => {
  return (
    <Section padding="py-16 px-4 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
            alt="Modern home"
            className="rounded-lg shadow-xl w-full h-full object-cover"
          />
        </div>
        <div>
          <Section.Header
            subtitle="About Us"
            title="Profolio Mortgage Group"
          />
          <div className="space-y-4 text-gray-600">
            <p>
              We understand that buying a home and going through the process of getting a mortgage can be a big step. But IMG is here to make the loan process easier and bring clarity to what can be a daunting process.
            </p>
            <p>
              So, give us a call if you are in need of a mortgage to purchase or refinance your home – from your first interaction with us, we want you to see what sets us apart, and together we can help find a clear path forward to your mortgage solution.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection