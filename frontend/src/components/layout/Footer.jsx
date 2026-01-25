import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    'For Homebuyers': [
      { name: 'Calculators', href: '/calculators' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Loan Programs', href: '/loan-programs' },
      { name: 'Loan Process', href: '/loan-process' },
    ],
    'Join Our Team': [
      { name: 'Overview', href: '/join-our-team' },
      { name: 'Become a Branch', href: '/become-branch' },
      { name: 'Become a Loan Officer', href: '/become-loan-officer' },
    ],
    'About Us': [
      { name: 'Company', href: '/about' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'Branches', href: '/branches' },
      { name: 'Customer Feedback', href: '/feedback' },
    ],
  }

  return (
    <footer className="bg-gray-700 px-10 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Profoilio Mortgage
            </h3>
            <p className="text-gray-300 mb-6">
              Making the loan process as fast, simple, accurate, and affordable as possible for our customers.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>780 Star Meadow Dr</p>
                  <p>Prosper TX 75078</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:7139310310" className="hover:text-gray-300">
                  +1 (713) 931-0310
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0"/>
                <a href="mailto:rishi4mortgage@gmail.com" className="hover:text-gray-300">
                  rishi4mortgage@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <p className="text-center text-sm text-gray-400">
            Copyright ©{new Date().getFullYear()} | Profolio Mortgage
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer