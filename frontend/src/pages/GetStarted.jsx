import React from 'react'
import Section from '../components/common/Section'
import ContactForm from '../components/forms/Contact'
import Card from '../components/common/Card'
import { CheckCircle, Clock, Shield, Headphones } from 'lucide-react'

const GetStarted = () => {
    const benefits = [
        {
            icon: CheckCircle,
            title: 'Quick Pre-Approval',
            description: 'Get pre-approved in as little as 24 hours'
        },
        {
            icon: Clock,
            title: 'Fast Processing',
            description: 'Streamlined process with minimal paperwork'
        },
        {
            icon: Shield,
            title: 'Secure & Confidential',
            description: 'Your information is protected with bank-level security'
        },
        {
            icon: Headphones,
            title: 'Expert Support',
            description: 'Dedicated loan officers guide you every step'
        }
    ]

    const handleFormSubmit = (data) => {
        console.log('Form submitted:', data)
        // Here you would typically send data to your backend
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Section bgColor="bg-primary" className="text-white">
                <div className="text-center max-w-3xl mx-auto">
                    <Section.Header
                        title="Get Started Today"
                        subtitle="Begin Your Journey"
                        centered
                    />
                    <p className="text-lg text-gray-500/90">
                        Take the first step towards homeownership. Fill out the form below and one of our
                        experienced loan officers will contact you shortly.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Benefits */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Why Choose Profolio Mortgage?
                        </h3>
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                return (
                                    <Card key={index} className="border-l-4 border-primary">
                                        <Card.Content className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                                    <Icon className="w-6 h-6 text-primary" />
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1">
                                                    {benefit.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                )
                            })}
                        </div>
                        <Card className="mt-8 bg-blue-50">
                            <Card.Content>
                                <h4 className="font-bold text-gray-900 mb-2">What Happens Next?</h4>
                                <ol className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-primary">1.</span>
                                        <span>Submit your information using the form</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-primary">2.</span>
                                        <span>A loan officer will review your details</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-primary">3.</span>
                                        <span>We'll contact you within 24 hours to discuss your options</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="font-bold text-primary">4.</span>
                                        <span>Start your journey to homeownership!</span>
                                    </li>
                                </ol>
                            </Card.Content>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <ContactForm
                            title="Start Your Application"
                            subtitle="Complete this form to begin your mortgage journey."
                            onSubmit={handleFormSubmit}
                            submitButtonText="Get Started"
                        />
                    </div>
                </div>
            </Section>
        </div>
    )
}
export default GetStarted