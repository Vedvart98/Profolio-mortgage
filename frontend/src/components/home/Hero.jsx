import React from 'react'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-center bg-no-repeat h-[80vh] min-h-[50vh]" style={{backgroundImage:"url('/images/hero.jpeg')", backgroundPosition:'contain', backgroundSize:'100% 140%'}}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative text-white container-custom h-full z-10 flex items-center justify-end">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            Personalized Mortgages
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light">
            For Every Special Moment
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" size="lg" onClick={()=>navigate('/find-loan-officer')}>
              Find a Loan Expert
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/calculators')}>
              Calculate My Payments
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero