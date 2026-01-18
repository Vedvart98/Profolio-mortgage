import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
const TopHeader = () => {
  const loanOfficer = {
    name: 'Bhupender "RISHI" Singh',
    nmls: '1769041',
    phone: '+1 (713) 931-0310',
    email: 'rishi4mortgage@gmail.com',
    image: '/images/rishi.png' // Replace with actual image
  }

  return (
    <div className="hidden sm:block bg-gray-300 border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center md:h-40">
            <div className="text-white font-bold text-xl md:text-2xl">
              <img src="/images/logo.png" alt="Profolio Mortgage" className="h-20 md:h-40 w-auto"/>
            </div>
          </Link>
            {/* <img 
              src="/images/logo.png" // You'll need to add your logo to public folder
              alt="Profolio Mortgage" 
              className="h-20 md:h-40 w-auto"
              onError={(e) => {
                // Fallback if logo doesn't exist
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'block'
              }}
            /> */}
          </div>

          {/* Loan Officer Info */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="text-right hidden sm:block">
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {loanOfficer.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                NMLS: {loanOfficer.nmls}
              </p>
              <div className="flex items-center justify-end gap-3 mt-1">
                <a 
                  href={`tel:${loanOfficer.phone}`}
                  className="flex items-center gap-1 text-xs md:text-sm text-primary hover:text-primary-dark transition-colors"
                >
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  {loanOfficer.phone}
                </a>
              </div>
              <a 
                href={`mailto:${loanOfficer.email}`}
                className="flex items-center justify-end gap-1 text-xs md:text-sm text-primary hover:text-primary-dark transition-colors mt-1"
              >
                <Mail className="w-3 h-3 md:w-4 md:h-4" />
                {loanOfficer.email}
              </a>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src={loanOfficer.image}
                alt={loanOfficer.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-gray-200"
              />
            </div>
          </div>

          {/* Mobile Info (shown on small screens) */}
          <div className="sm:hidden flex flex-col items-end gap-1">
            <p className="text-sm font-bold text-gray-900">{loanOfficer.name}</p>
            <p className="text-xs text-gray-600">NMLS: {loanOfficer.nmls}</p>
            <a 
              href={`tel:${loanOfficer.phone}`}
              className="text-xs text-primary"
            >
              {loanOfficer.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader