import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from '../common/Button'

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Find a Loan Officer', href: '/find-loan-officer' },
    {
      name: 'For Homebuyers',
      dropdown: [
        { name: 'Calculators', href: '/calculators' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Loan Programs', href: '/loan-programs' },
        { name: 'Loan Process', href: '/loan-process' },
        { name: 'Refinancing', href: '/refinancing' },
      ],
    },
    {
      name: 'Join Our Team',
      dropdown: [
        { name: 'Overview', href: '/join-our-team' },
        { name: 'Become a Branch', href: '/become-branch' },
        { name: 'Become a Loan Officer', href: '/become-loan-officer' },
      ],
    },
    {
      name: 'About',
      dropdown: [
        { name: 'Company', href: '/about' },
        { name: 'Leadership', href: '/leadership' },
        { name: 'Branches', href: '/branches' },
        { name: 'Disclosures', href: '/disclosures' },
        { name: 'Customer Feedback', href: '/feedback' },
      ],
    },
  ]
// fixed top-50 left-0 right-0 z-50 px-10 
  return (
    <header
      className={`transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-lg py-3 px-2 fixed top-0 left-0 right-0 z-50' : 'relative bg-transparent py-4 px-2'
      }`}
    >
      <nav className="container-custom  overflow-visible">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative text-black left-100 hover:text-gray-700"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button className="px-4 py-2 text-black hover:text-gray-700 transition-colors flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 z-60">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-black hover:text-gray-700 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="outline" size="sm" onClick={()=>navigate('/get-started')}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                      }
                      className="w-full text-left px-4 py-2 text-black hover:text-gray-700 flex items-center justify-between"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-white/90 hover:text-gray text-sm"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-white hover:text-gray-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 mt-4">
              <Button variant="outline" size="sm" className="w-full" onClick={()=>{navigate('/get-started');setIsMobileMenuOpen(false)}}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header