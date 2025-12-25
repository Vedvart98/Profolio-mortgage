import React from 'react'
import Section from '../common/Section'
import Card from '../common/Card'
import Button from '../common/Button'
import { Users, Zap, FileCheck } from 'lucide-react'

const ServiceSection = () => {
  const services = [
    {
      icon: Users,
      title: 'Home Loan Experts',
      description: 'Profolio Mortgage Group has branches across the United States. Quickly get assistance with all of your mortgage needs.',
      cta: 'Find a Loan Officer',
    },
    {
      icon: Zap,
      title: 'Fast Approvals',
      description: "We understand the need to have a quick response to your requests; it's our goal to be proactive in getting you through this process as quickly as possible.",
      cta: 'Apply Now',
    },
    {
      icon: FileCheck,
      title: 'Simple Process',
      description: 'With advanced processing software and automated underwriting systems we have taken the mystery out of approving and closing a home loan.',
      cta: 'Loan Process',
    },
  ]

  return (
    <Section bgColor="bg-gray-50 px-4">
      <Section.Header
        subtitle="Our Services"
        title="Your Own Mortgage Bank"
        centered
      />
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        How do we make a happy customer every day? That is the question we challenge ourselves to ask. Our goal is to make the loan process as simple and worry-free as possible.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card key={index} hover className="text-center">
              <Card.Content className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <Card.Title>{service.title}</Card.Title>
                <Card.Description className="mb-6">
                  {service.description}
                </Card.Description>
                <Button variant="secondary" size="sm" className="mt-auto">
                  {service.cta}
                </Button>
              </Card.Content>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export default ServiceSection