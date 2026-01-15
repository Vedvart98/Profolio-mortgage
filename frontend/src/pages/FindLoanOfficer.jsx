import React, { useState } from 'react'
import Section from '../components/common/Section'
import Input from '../components/common/Input'
import Select from '../components/common/Select'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import { MapPin, Phone, Mail, Award } from 'lucide-react'

const FindLoanOfficer = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState('')

  // Sample loan officers data
  const loanOfficers = [
    {
      id: 1,
      name: 'Bhupender Rishi Singh',
      title: 'Senior Loan Officer',
      nmls: '1769041',
      location: '780 , Star Meadow Dr Prosper TX 75078',
      state: 'TX',
      phone: '+1 (713) 931-0310',
      email: 'rishi4mortgage@gmail.com',
      specialties: ['First-Time Homebuyers', 'VA Loans', 'FHA Loans'],
      image: '/images/rishi.png'
    },
    // {
    //   id: 2,
    //   name: 'Michael Chen',
    //   title: 'Loan Officer',
    //   nmls: '234567',
    //   location: 'Charlotte, NC',
    //   state: 'NC',
    //   phone: '(704) 555-0123',
    //   email: 'michael.chen@integritymtgs.com',
    //   specialties: ['Conventional Loans', 'Jumbo Loans', 'Investment Properties'],
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
    // },
    // {
    //   id: 3,
    //   name: 'Jennifer Williams',
    //   title: 'Branch Manager',
    //   nmls: '345678',
    //   location: 'Raleigh, NC',
    //   state: 'NC',
    //   phone: '(919) 555-0456',
    //   email: 'jennifer.williams@integritymtgs.com',
    //   specialties: ['Refinancing', 'Cash-Out Refinance', 'Construction Loans'],
    //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
    // },
    // {
    //   id: 4,
    //   name: 'David Martinez',
    //   title: 'Loan Officer',
    //   nmls: '456789',
    //   location: 'Atlanta, GA',
    //   state: 'GA',
    //   phone: '(404) 555-0789',
    //   email: 'david.martinez@integritymtgs.com',
    //   specialties: ['USDA Loans', 'First-Time Homebuyers', 'FHA Loans'],
    //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
    // },
    // {
    //   id: 5,
    //   name: 'Emily Davis',
    //   title: 'Senior Loan Officer',
    //   nmls: '567890',
    //   location: 'Nashville, TN',
    //   state: 'TN',
    //   phone: '(615) 555-0321',
    //   email: 'emily.davis@integritymtgs.com',
    //   specialties: ['VA Loans', 'Conventional Loans', 'Refinancing'],
    //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
    // },
    // {
    //   id: 6,
    //   name: 'Robert Taylor',
    //   title: 'Loan Officer',
    //   nmls: '678901',
    //   location: 'Columbia, SC',
    //   state: 'SC',
    //   phone: '(803) 555-0654',
    //   email: 'robert.taylor@integritymtgs.com',
    //   specialties: ['First-Time Homebuyers', 'FHA Loans', 'Down Payment Assistance'],
    //   image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
    // }
  ]

  const states = [
    { value: 'TX', label: 'Florida' },
    // { value: 'SC', label: 'South Carolina' },
    // { value: 'GA', label: 'Georgia' },
    // { value: 'TN', label: 'Tennessee' },
    // { value: 'VA', label: 'Virginia' },
    // { value: 'FL', label: 'Florida' }
  ]

  const filteredOfficers = loanOfficers.filter(officer => {
    const matchesSearch = officer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         officer.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesState = !selectedState || officer.state === selectedState
    return matchesSearch && matchesState
  })

  return (
    <div className="bg-gray-50 min-h-screen">
      <Section bgColor="bg-primary" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <Section.Header
            title="Find Your Loan Officer"
            subtitle="Connect With An Expert"
            centered
          />
          <p className="text-lg text-blue-400/90">
            Our experienced loan officers are ready to help you navigate the mortgage process 
            and find the perfect loan for your needs.
          </p>
        </div>
      </Section>
      <Section>
        {/* Search and Filter */}
        <Card className="mb-12">
          <Card.Content>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Search by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="mb-0"
                />
              </div>
              <Select
                placeholder="All States"
                options={states}
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="mb-0"
              />
            </div>
          </Card.Content>
        </Card>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <strong>{filteredOfficers.length}</strong> loan officer{filteredOfficers.length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOfficers.map(officer => (
            <Card key={officer.id} hover>
              <div className="h-70 overflow-hidden">
                <img
                  src={officer.image}
                  alt={officer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Card.Content>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {officer.name}
                </h3>
                <p className="text-primary font-semibold mb-2">{officer.title}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>NMLS# {officer.nmls}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{officer.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${officer.phone}`} className="hover:text-primary">
                      {officer.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${officer.email}`} className="hover:text-primary truncate">
                      {officer.email}
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {officer.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="primary" size="sm" className="w-full">
                  Contact {officer.name.split(' ')[0]}
                </Button>
              </Card.Content>
            </Card>
          ))}
        </div>

        {filteredOfficers.length === 0 && (
          <Card>
            <Card.Content className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No loan officers found matching your search criteria.
              </p>
              <Button
                variant="primary"
                size="md"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedState('')
                }}
              >
                Clear Filters
              </Button>
            </Card.Content>
          </Card>
        )}
      </Section>
    </div>
  )
}

export default FindLoanOfficer