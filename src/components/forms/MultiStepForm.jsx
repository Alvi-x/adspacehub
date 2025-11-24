import React, { useState } from 'react'
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline'
import Button from '../ui/Button'
import { Card, CardContent, CardHeader, CardFooter } from '../ui/Card'

const MultiStepForm = ({ 
  steps = [],
  onSubmit,
  initialData = {},
  submitButtonText = "Submit"
}) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})

  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1

  const validateStep = (stepIndex) => {
    const step = steps[stepIndex]
    const stepErrors = {}
    
    step.fields?.forEach(field => {
      if (field.required && !formData[field.name]) {
        stepErrors[field.name] = `${field.label} is required`
      }
      
      if (field.validation) {
        const validationError = field.validation(formData[field.name], formData)
        if (validationError) {
          stepErrors[field.name] = validationError
        }
      }
    })
    
    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateStep(currentStep)) {
      onSubmit(formData)
    }
  }

  const handleInputChange = (name, value) => {
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

  const renderField = (field) => {
    const commonProps = {
      id: field.name,
      name: field.name,
      value: formData[field.name] || '',
      onChange: (e) => handleInputChange(field.name, e.target.value),
      className: `w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
        errors[field.name] ? 'border-red-300' : 'border-gray-300'
      }`,
      placeholder: field.placeholder,
      required: field.required
    }

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={field.rows || 4}
          />
        )
      
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">Select {field.label.toLowerCase()}</option>
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      
      case 'number':
        return (
          <input
            type="number"
            {...commonProps}
            min={field.min}
            max={field.max}
            step={field.step}
          />
        )
      
      case 'email':
        return (
          <input
            type="email"
            {...commonProps}
          />
        )
      
      case 'tel':
        return (
          <input
            type="tel"
            {...commonProps}
          />
        )
      
      default:
        return (
          <input
            type="text"
            {...commonProps}
          />
        )
    }
  }

  const currentStepConfig = steps[currentStep]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                  currentStep > index
                    ? 'bg-primary-500 border-primary-500 text-white'
                    : currentStep === index
                    ? 'border-primary-500 text-primary-500 bg-white'
                    : 'border-gray-300 text-gray-500 bg-white'
                }`}>
                  {currentStep > index ? (
                    <CheckCircleIcon className="w-5 h-5" />
                  ) : (
                    step.number || index + 1
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <div className={`text-xs font-medium ${
                    currentStep >= index ? 'text-primary-600' : 'text-gray-500'
                  }`}>
                    Step {index + 1}
                  </div>
                  <div className={`text-sm font-medium ${
                    currentStep >= index ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 ${
                  currentStep > index ? 'bg-primary-500' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader className="border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {currentStepConfig.title}
          </h2>
          {currentStepConfig.description && (
            <p className="text-gray-600 mt-1">
              {currentStepConfig.description}
            </p>
          )}
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="p-6">
            <div className="space-y-6">
              {currentStepConfig.fields?.map(field => (
                <div key={field.name}>
                  <label 
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  
                  {renderField(field)}
                  
                  {errors[field.name] && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors[field.name]}
                    </p>
                  )}
                  
                  {field.helpText && (
                    <p className="mt-1 text-sm text-gray-500">
                      {field.helpText}
                    </p>
                  )}
                </div>
              ))}
              
              {currentStepConfig.customComponent && (
                <currentStepConfig.customComponent
                  formData={formData}
                  onChange={handleInputChange}
                  errors={errors}
                />
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between p-6 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={isFirstStep}
              className="flex items-center"
            >
              <ChevronLeftIcon className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {isLastStep ? (
              <Button
                type="submit"
                variant="primary"
                className="flex items-center"
              >
                {submitButtonText}
                <CheckCircleIcon className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="button"
                variant="primary"
                onClick={handleNext}
                className="flex items-center"
              >
                Next
                <ChevronRightIcon className="w-4 h-4 ml-2" />
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>

      {/* Step Indicator for Mobile */}
      <div className="mt-4 text-center sm:hidden">
        <span className="text-sm text-gray-600">
          Step {currentStep + 1} of {steps.length}
        </span>
      </div>
    </div>
  )
}

// Helper function to create step configurations
export const createStep = (id, title, fields = [], description = '', customComponent = null) => ({
  id,
  title,
  description,
  fields,
  customComponent
})

// Common field configurations
export const fieldTypes = {
  text: (name, label, options = {}) => ({
    type: 'text',
    name,
    label,
    ...options
  }),
  email: (name, label, options = {}) => ({
    type: 'email',
    name,
    label,
    ...options
  }),
  number: (name, label, options = {}) => ({
    type: 'number',
    name,
    label,
    ...options
  }),
  textarea: (name, label, options = {}) => ({
    type: 'textarea',
    name,
    label,
    ...options
  }),
  select: (name, label, options, selectOptions = {}) => ({
    type: 'select',
    name,
    label,
    options,
    ...selectOptions
  })
}

export default MultiStepForm