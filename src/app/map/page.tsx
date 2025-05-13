"use client"

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import { colleges, College } from '../colleges/page'

// Dynamically import the Map component to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full flex items-center justify-center bg-gray-100">
      <p className="text-gray-500">Loading map...</p>
    </div>
  ),
})

export default function MapPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">College Map</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Find and explore Cambridge colleges on the map
          </p>
        </div>
        <div className="mt-16">
          <MapComponent colleges={colleges} />
        </div>
      </div>
    </div>
  )
} 