import { CATEGORIES } from '../utils/constants'

export const mockListings = [
  {
    id: '1',
    title: 'Premium Mandela Square Billboard',
    category: 'high-traffic-outdoor',
    subcategory: 'Billboards',
    description: 'High-visibility digital billboard in the heart of Times Square. Perfect for brand awareness campaigns.',
    images: ['/sandton.webp'],
    location: {
      address: 'Mandela Square, Sandton, South Africa',
      city: 'Sandton',
      state: 'GP',
      country: 'SA'
    },
    metrics: {
      footTraffic: 500000,
      vehicleTraffic: 200000,
      dwellTime: 30,
      visibilityScore: 95,
      notes: '24/7 digital display with high-resolution capabilities'
    },
    pricing: {
      amount: 15000,
      unit: 'day',
      currency: 'ZAR'
    },
    owner: {
      id: 'owner1',
      name: 'Metro Media Group',
      email: 'contact@metromedia.com',
      phone: '+27-84-555-0123',
      company: 'Metro Media Group'
    },
    featured: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Downtown Bus Shelter Advertising',
    category: 'high-traffic-outdoor',
    subcategory: 'Bus Shelters',
    description: 'Modern bus shelter with illuminated ad space in downtown financial district.',
    images: ['/lfp.jpg'],
    location: {
      address: 'Midrand Bus Stop, Johannesburg, South Africa',
      city: 'Waterfall, Midrand',
      state: 'GP',
      country: 'SA'
    },
    metrics: {
      footTraffic: 25000,
      vehicleTraffic: 50000,
      dwellTime: 5,
      visibilityScore: 85,
      notes: 'Illuminated for 24/7 visibility, cleaning service included'
    },
    pricing: {
      amount: 1200,
      unit: 'week',
      currency: 'ZAR'
    },
    owner: {
      id: 'owner2',
      name: 'Sarah Chen',
      email: 'sarah@urbanspaces.com',
      phone: '+27-84-555-0124',
      company: 'Urban Spaces Media'
    },
    featured: true,
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    title: 'Food Truck Wrap Advertising',
    category: 'vehicles-transportation',
    subcategory: 'Delivery Trucks',
    description: 'Full vehicle wrap on popular food truck serving downtown area and events.',
    images: ['/foodtruck.png'],
    location: {
      address: 'Parlor Coffee Truck, Cape Town, South Africa',
      city: 'Cape Town',
      state: 'WC',
      country: 'SA'
    },
    metrics: {
      footTraffic: 15000,
      vehicleTraffic: 30000,
      dwellTime: 10,
      visibilityScore: 80,
      notes: 'Travels to major events and festivals throughout the year'
    },
    pricing: {
      amount: 800,
      unit: 'month',
      currency: 'ZAR'
    },
    owner: {
      id: 'owner3',
      name: 'Mike Rodriguez',
      email: 'mike@austinfoodtrucks.com',
      phone: '+27-84-555-0125'
    },
    featured: false,
    createdAt: '2024-01-08'
  },
  {
    id: '4',
    title: 'Grocery Store Cart Advertising',
    category: 'retail-consumer',
    subcategory: 'Grocery Stores',
    description: 'Shopping cart ad space in high-traffic supermarket chain.',
    images: ['/trolley.jpeg'],
    location: {
      address: 'Checkers, Menlyn, South Africa',
      city: 'Pretoria',
      state: 'GP',
      country: 'SA'
    },
    metrics: {
      footTraffic: 100000,
      vehicleTraffic: 0,
      dwellTime: 45,
      visibilityScore: 75,
      notes: 'Reaches customers during entire shopping experience'
    },
    pricing: {
      amount: 500,
      unit: 'month',
      currency: 'ZAR'
    },
    owner: {
      id: 'owner4',
      name: 'Retail Media Solutions',
      email: 'sales@retailmedia.com',
      phone: '+27-84-555-0126',
      company: 'Retail Media Solutions'
    },
    featured: true,
    createdAt: '2024-01-05'
  }
]

export const featuredCategories = [
  {
    id: 'high-traffic-outdoor',
    name: 'High-Traffic Outdoor',
    description: 'Billboards, bus shelters, and high-visibility locations',
    images: ['/sandton.webp'],
    count: 45
  },
  {
    id: 'vehicles-transportation',
    name: 'Vehicles & Transportation',
    description: 'Car wraps, buses, and mobile advertising',
    images: ['/Taxi.jpg'],
    count: 32
  },
  {
    id: 'retail-consumer',
    name: 'Retail & Consumer',
    description: 'Store windows, malls, and shopping areas',
    images: ['/escalators.gif'],
    count: 28
  },
  {
    id: 'business-professional',
    name: 'Business & Professional',
    description: 'Office spaces and professional environments',
    images: ['/cart.jpg'],
    count: 19
  }
]
