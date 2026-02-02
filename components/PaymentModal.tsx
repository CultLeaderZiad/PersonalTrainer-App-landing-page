'use client'

import { useState } from 'react'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  price?: number
}

export default function PaymentModal({ isOpen, onClose, price = 197 }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<'stripe' | 'paypal' | null>(null)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: ''
  })

  if (!isOpen) return null

  const paymentMethods = [
    {
      id: 'stripe',
      name: 'Credit/Debit Card',
      icon: '💳',
      description: 'Visa, Mastercard, American Express',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: '🅿️',
      description: 'Pay securely with your PayPal account',
    },
  ]

  const handleMethodSelect = (method: 'stripe' | 'paypal') => {
    setSelectedMethod(method)
    setShowPaymentForm(true)
  }

  const handleBack = () => {
    setShowPaymentForm(false)
    setSelectedMethod(null)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePayment = async (method: 'stripe' | 'paypal') => {
    setProcessing(true)
    console.log('[v0] Processing payment:', { method, price, formData })

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show success message
      alert(`Payment of $${price} via ${method === 'stripe' ? 'Credit Card' : 'PayPal'} successful!\n\nYou will receive a confirmation email shortly with your program access details.`)
      setProcessing(false)
      setShowPaymentForm(false)
      setSelectedMethod(null)
      setFormData({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
        email: ''
      })
      onClose()
    } catch (error) {
      console.error('[v0] Payment error:', error)
      setProcessing(false)
    }
  }

  const renderPaymentForm = () => {
    if (!selectedMethod) return null

    return (
      <div className="p-6 space-y-4 animate-fade-in">
        {selectedMethod === 'stripe' ? (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                  placeholder="John Doe"
                  disabled={processing}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                  placeholder="4242 4242 4242 4242"
                  disabled={processing}
                  maxLength={19}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                    placeholder="MM/YY"
                    disabled={processing}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                    placeholder="123"
                    disabled={processing}
                    maxLength={4}
                  />
                </div>
              </div>
            </div>
            
            <button
              onClick={() => handlePayment(selectedMethod)}
              disabled={processing || !formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv}
              className="w-full p-4 bg-accent text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-amber-600 transition-colors"
            >
              {processing ? 'Processing...' : `Pay $${price}`}
            </button>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-background border border-border rounded-lg text-foreground"
                  placeholder="you@example.com"
                  disabled={processing}
                />
                <p className="text-xs text-foreground/60 mt-2">
                  You'll be redirected to PayPal to complete your payment
                </p>
              </div>
            </div>
            
            <button
              onClick={() => handlePayment(selectedMethod)}
              disabled={processing || !formData.email}
              className="w-full p-4 bg-[#0070ba] text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#005ea6] transition-colors"
            >
              {processing ? 'Processing...' : `Continue with PayPal`}
            </button>
          </>
        )}
        
        <button
          onClick={handleBack}
          disabled={processing}
          className="w-full p-3 text-foreground/70 hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Back to payment methods
        </button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card border border-accent/30 rounded-2xl max-w-md w-full animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <h2 className="text-2xl font-bold text-foreground">
            {showPaymentForm 
              ? selectedMethod === 'stripe' 
                ? 'Enter Card Details' 
                : 'PayPal Checkout'
              : 'Choose Payment Method'
            }
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-background rounded-lg transition-colors"
            disabled={processing}
          >
            <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Price Display */}
        <div className="p-6 bg-background/50 border-b border-border">
          <div className="text-center">
            <p className="text-foreground/70 mb-2">Program Investment</p>
            <div className="text-4xl font-bold text-accent">${price}</div>
            <p className="text-sm text-foreground/60 mt-2">One-time payment • Lifetime access</p>
          </div>
        </div>

        {/* Payment Methods or Form */}
        {!showPaymentForm ? (
          <>
            <div className="p-6 space-y-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => handleMethodSelect(method.id as 'stripe' | 'paypal')}
                  disabled={processing}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedMethod === method.id
                      ? 'border-accent bg-accent/10'
                      : 'border-border hover:border-accent/50'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <div className="font-semibold text-foreground">{method.name}</div>
                      <div className="text-xs text-foreground/60">{method.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 bg-background/50 border-t border-border text-center">
              <p className="text-xs text-foreground/60 mb-4">
                Secure payment processed by industry leaders
              </p>
              <button
                onClick={onClose}
                disabled={processing}
                className="text-accent hover:text-amber-300 transition-colors text-sm font-medium disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          renderPaymentForm()
        )}
      </div>
    </div>
  )
}
