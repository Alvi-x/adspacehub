import React from 'react'

const ListingFilters = ({ priceRange, onPriceRangeChange }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="50000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>${priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Traffic Filters */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Min. Foot Traffic
        </label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option>Any</option>
          <option>1,000+ per day</option>
          <option>5,000+ per day</option>
          <option>10,000+ per day</option>
          <option>50,000+ per day</option>
        </select>
      </div>

      {/* Visibility Score */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Min. Visibility Score
        </label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option>Any</option>
          <option>70%+</option>
          <option>80%+</option>
          <option>90%+</option>
        </select>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sort By
        </label>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
          <option>Newest First</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Highest Traffic</option>
          <option>Best Visibility</option>
        </select>
      </div>
    </div>
  )
}

export default ListingFilters