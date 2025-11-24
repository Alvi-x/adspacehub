import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  MapPinIcon, 
  EyeIcon, 
  UsersIcon, 
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { Card, CardContent } from '../components/ui/Card'
import ContactOwner from '../features/contact/components/ContactOwner'
import { mockListings } from '../data/mockData'
import { CATEGORIES } from '../utils/constants'

const ListingDetails = () => {
  const { id } = useParams()
  const listing = mockListings.find(l => l.id === id)

  if (!listing) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Listing Not Found</h1>
        <p className="text-gray-600 mb-4">The advertising space you're looking for doesn't exist.</p>
        <Link to="/browse">
          <Button variant="primary">Browse All Spaces</Button>
        </Link>
      </div>
    )
  }

  const category = CATEGORIES[listing.category]
  
  const formatPrice = (pricing) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: pricing.currency,
    })
    
    return `${formatter.format(pricing.amount)}/${pricing.unit}`
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
          <li>/</li>
          <li><Link to="/browse" className="hover:text-gray-900">Browse</Link></li>
          <li>/</li>
          <li className="text-gray-900">{listing.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <Card className="mb-6">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={listing.images[0] || '/placeholder-images/default.jpg'}
                alt={listing.title}
                className="w-full h-96 object-cover rounded-t-xl"
              />
            </div>
          </Card>

          {/* Listing Details */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <Badge variant="primary" className="mb-2">
                    {category?.name || listing.category}
                  </Badge>
                  <h1 className="text-2xl font-bold text-gray-900">{listing.title}</h1>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    <span>{listing.location.address}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary-600">
                  {formatPrice(listing.pricing)}
                </div>
              </div>

              <p className="text-gray-700 mb-6">{listing.description}</p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <UsersIcon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-gray-900">
                    {(listing.metrics.footTraffic / 1000).toFixed(0)}k
                  </div>
                  <div className="text-sm text-gray-600">Foot Traffic/Day</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <EyeIcon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-gray-900">
                    {listing.metrics.visibilityScore}%
                  </div>
                  <div className="text-sm text-gray-600">Visibility Score</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <ClockIcon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-gray-900">
                    {listing.metrics.dwellTime}s
                  </div>
                  <div className="text-sm text-gray-600">Avg. Dwell Time</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white text-sm font-bold">V</span>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {(listing.metrics.vehicleTraffic / 1000).toFixed(0)}k
                  </div>
                  <div className="text-sm text-gray-600">Vehicle Traffic/Day</div>
                </div>
              </div>

              {/* Visibility Notes */}
              {listing.metrics.notes && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">Visibility Notes</h3>
                  <p className="text-blue-800">{listing.metrics.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Location</h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPinIcon className="w-12 h-12 mx-auto mb-2" />
                  <p>Map integration available with Google Maps or Leaflet</p>
                  <p className="text-sm">{listing.location.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Owner Info */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Space Owner</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{listing.owner.name}</h3>
                  {listing.owner.company && (
                    <p className="text-gray-600">{listing.owner.company}</p>
                  )}
                </div>
                <div className="flex items-center text-gray-600">
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  <span>{listing.owner.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  <span>{listing.owner.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <ContactOwner owner={listing.owner} />
        </div>
      </div>
    </div>
  )
}

export default ListingDetails