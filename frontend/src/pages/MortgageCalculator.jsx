import React, { useState, useEffect } from 'react'
import Section from '../components/common/Section'
import Input from '../components/common/Input'
import Select from '../components/common/Select'
import Button from '../components/common/Button'
import Card from '../components/common/Card'
import { DollarSign, Percent, Calendar, TrendingDown } from 'lucide-react'

const MortgageCalculator = () => {
  const [values, setValues] = useState({
    homePrice: '300000',
    downPayment: '60000',
    loanTerm: '30',
    interestRate: '6.5'
  })

  const [results, setResults] = useState(null)

  const loanTerms = [
    { value: '15', label: '15 years' },
    { value: '20', label: '20 years' },
    { value: '30', label: '30 years' }
  ]

  const calculateMortgage = () => {
    const homePrice = parseFloat(values.homePrice) || 0
    const downPayment = parseFloat(values.downPayment) || 0
    const loanAmount = homePrice - downPayment
    const monthlyRate = (parseFloat(values.interestRate) / 100) / 12
    const numberOfPayments = parseInt(values.loanTerm) * 12

    if (loanAmount <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) {
      return
    }

    // Calculate monthly payment using mortgage formula
    const monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    const totalPayment = monthlyPayment * numberOfPayments
    const totalInterest = totalPayment - loanAmount
    const downPaymentPercent = (downPayment / homePrice) * 100

    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      loanAmount: loanAmount.toFixed(2),
      downPaymentPercent: downPaymentPercent.toFixed(1)
    })
  }

  useEffect(() => {
    calculateMortgage()
  }, [values])

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Section>
        <Section.Header
          title="Mortgage Calculator"
          subtitle="Calculate Your Payments"
          centered
        />
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Use our mortgage calculator to estimate your monthly payments and see how different factors affect your mortgage.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card>
            <Card.Content>
              <h3 className="text-xl font-bold mb-6">Loan Details</h3>
              
              <Input
                label="Home Price"
                name="homePrice"
                type="number"
                value={values.homePrice}
                onChange={handleChange}
                placeholder="300000"
              />

              <Input
                label="Down Payment"
                name="downPayment"
                type="number"
                value={values.downPayment}
                onChange={handleChange}
                placeholder="60000"
                helperText={results ? `${results.downPaymentPercent}% of home price` : ''}
              />

              <Select
                label="Loan Term"
                name="loanTerm"
                value={values.loanTerm}
                onChange={handleChange}
                options={loanTerms}
              />

              <Input
                label="Interest Rate (%)"
                name="interestRate"
                type="number"
                step="0.01"
                value={values.interestRate}
                onChange={handleChange}
                placeholder="6.5"
              />

              <Button
                variant="primary"
                size="lg"
                className="w-full mt-4"
                onClick={calculateMortgage}
              >
                Calculate Payment
              </Button>
            </Card.Content>
          </Card>

          {/* Results */}
          {results && (
            <div className="space-y-4">
              <Card className="bg-primary text-black">
                <Card.Content className="text-center py-8">
                  <DollarSign className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-sm uppercase tracking-wide mb-2 opacity-90">
                    Monthly Payment
                  </p>
                  <p className="text-4xl font-bold">
                    {formatCurrency(results.monthlyPayment)}
                  </p>
                  <p className="text-sm mt-2 opacity-75">
                    Principal & Interest
                  </p>
                </Card.Content>
              </Card>

              <Card>
                <Card.Content>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="font-semibold text-gray-700">Loan Amount</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {formatCurrency(results.loanAmount)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="font-semibold text-gray-700">Total Payment</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {formatCurrency(results.totalPayment)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                          <Percent className="w-5 h-5 text-orange-600" />
                        </div>
                        <span className="font-semibold text-gray-700">Total Interest</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {formatCurrency(results.totalInterest)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <TrendingDown className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="font-semibold text-gray-700">Down Payment</span>
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {formatCurrency(values.downPayment)}
                      </span>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="bg-blue-50">
                <Card.Content>
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> This calculator provides an estimate of your monthly mortgage payment. 
                    Actual payments may include additional costs such as property taxes, homeowners insurance, 
                    HOA fees, and PMI if your down payment is less than 20%.
                  </p>
                </Card.Content>
              </Card>
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}

export default MortgageCalculator