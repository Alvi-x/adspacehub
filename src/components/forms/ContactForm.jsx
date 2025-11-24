import React, { useState } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  UserIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'
import Button from '../ui/Button'
import { Card, CardContent, CardHeader } from '../ui/Card'

const ContactForm = ({ 
  recipient,
  onSubmit,
  initialData = {},
  submitButtonText = "Send Message",
  showSuccessState = true
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    ...initialData
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
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
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (onSubmit) {
        await onSubmit(formData)
      }
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setErrors({})
    setIsSubmitted(false)
  }

  // Success State
  if (isSubmitted && showSuccessState) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircleIcon className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for your message. {recipient?.name ? `${recipient.name} will` : 'We will'} get back to you as soon as possible.
          </p>
          <div className="flex gap-3 justify-center">
            <Button
              variant="outline"
              onClick={resetForm}
            >
              Send Another Message
            </Button>
            {recipient?.email && (
              <Button
                variant="primary"
                onClick={() => window.location.href = `mailto:${recipient.email}`}
              >
                <EnvelopeIcon className="w-4 h-4 mr-2" />
                Send Email Directly
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Contact {recipient?.name || 'Owner'}
        </h2>
        {recipient?.company && (
          <p className="text-gray-600 mt-1">{recipient.company}</p>
        )}
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Name *
              </label>
              <div className="relative">
                <UserIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                    errors.name ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label 
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <PhoneIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label 
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => handleInputChange('subject', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Brief subject of your inquiry"
              />
            </div>

            {/* Message Field */}
            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder={
                  recipient?.name 
                    ? `Hi ${recipient.name}, I'm interested in learning more about your advertising space...`
                    : "Please provide details about your inquiry..."
                }
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                {formData.message.length}/1000 characters
              </p>
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">{errors.submit}</p>
              </div>
            )}
          </div>
        </CardContent>

        <CardContent className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
            <div className="text-sm text-gray-600">
              * Required fields
            </div>
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  {submitButtonText}
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </form>
    </Card>
  )
}

// Prop types for better development experience
ContactForm.defaultProps = {
  recipient: null,
  onSubmit: null,
  initialData: {},
  submitButtonText: "Send Message",
  showSuccessState: true
}

export default ContactForm