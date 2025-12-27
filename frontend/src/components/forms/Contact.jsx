import React, { useState } from 'react'
import Input from '../common/Input'
import Select from '../common/Select'
import Textarea from '../common/TextArea'
import Button from '../common/Button'

const ContactForm = ({ 
  title = "Contact Us",
  subtitle = "Fill out the form below and we'll get back to you soon.",
  onSubmit,
  submitButtonText = "Submit"
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanType: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const loanTypes = [
    { value: 'purchase', label: 'Home Purchase' },
    { value: 'refinance', label: 'Refinance' },
    { value: 'cashout', label: 'Cash-Out Refinance' },
    { value: 'heloc', label: 'Home Equity Line of Credit' },
    { value: 'other', label: 'Other' }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    if (!formData.loanType) {
      newErrors.loanType = 'Please select a loan type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      if (onSubmit) {
        onSubmit(formData)
      }
      
      setSubmitSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        loanType: '',
        message: ''
      })
      
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {title && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      )}

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 font-semibold">
            Thank you! We've received your information and will contact you soon.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
            placeholder="John"
          />
          
          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            required
            placeholder="Doe"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
            placeholder="john.doe@example.com"
          />
          
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
            placeholder="(555) 123-4567"
          />
        </div>

        <Select
          label="Loan Type"
          name="loanType"
          value={formData.loanType}
          onChange={handleChange}
          options={loanTypes}
          error={errors.loanType}
          required
          placeholder="Select your loan type"
        />

        <Textarea
          label="Message (Optional)"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your needs..."
          rows={5}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : submitButtonText}
        </Button>
      </form>
    </div>
  )
}

export default ContactForm