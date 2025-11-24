import React from 'react'
import { Link } from 'react-router-dom'
import { MapPinIcon, EyeIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline'
import { Card, CardContent } from '../../../components/ui/Card'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import { CATEGORIES } from '../../../utils/constants'

const ListingCard = ({ listing }) => {
  const category = CATEGORIES[listing.category]
  
  const formatPrice = (pricing) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: pricing.currency,
    })
    
    return `${formatter.format(pricing.amount)}/${pricing.unit}`
  }

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      {/* Image */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
        <img
          src={listing.images[0] || '/placeholder-images/default.jpg'}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        {listing.featured && (
          <div className="absolute top-3 left-3">
            <Badge variant="primary" size="sm">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4 flex-1 flex flex-col">
        {/* Category */}
        <div className="mb-2">
          <Badge variant="default" size="sm">
            {category?.name || listing.category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {listing.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
          {listing.description}
        </p>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPinIcon className="w-4 h-4 mr-1" />
          <span>{listing.location.city}, {listing.location.state}</span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-xs text-gray-600">
          <div className="flex items-center">
            <UsersIcon className="w-3 h-3 mr-1" />
            <span>{(listing.metrics.footTraffic / 1000).toFixed(0)}k/day</span>
          </div>
          <div className="flex items-center">
            <EyeIcon className="w-3 h-3 mr-1" />
            <span>{listing.metrics.visibilityScore}%</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-3 h-3 mr-1" />
            <span>{listing.metrics.dwellTime}s</span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between mt-auto">
          <div className="text-lg font-bold text-primary-600">
            {formatPrice(listing.pricing)}
          </div>
          <Link to={`/listing/${listing.id}`}>
            <Button size="sm" variant="primary">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default ListingCard