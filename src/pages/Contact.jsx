import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ContactOwner from '../features/contact/components/ContactOwner'
import { mockListings } from '../data/mockData'

const Contact = () => {
  const { ownerId } = useParams()
  const owner = mockListings.find(listing => listing.owner.id === ownerId)?.owner

  if (!owner) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Owner Not Found</h1>
        <p className="text-gray-600 mb-4">The owner you're trying to contact doesn't exist.</p>
        <Link to="/browse">
          <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600">
            Browse All Spaces
          </button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Space Owner</h1>
        <p className="text-gray-600">
          Get in touch with {owner.name} to discuss their advertising space
        </p>
      </div>
      
      <ContactOwner owner={owner} />
    </div>
  )
}

export default Contact