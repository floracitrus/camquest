'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { College } from '@/app/colleges/page'

// Fix for default marker icons in Leaflet with Next.js
const icon = L.icon({
  iconUrl: '/marker-icon.png',
  iconRetinaUrl: '/marker-icon-2x.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

interface MapProps {
  colleges: College[]
}

export default function Map({ colleges }: MapProps) {
  const mapRef = useRef<L.Map>(null)

  useEffect(() => {
    // Set default marker icon
    L.Marker.prototype.options.icon = icon
  }, [])

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[52.2053, 0.1157]} // Cambridge city center
        zoom={15}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {colleges.map((college) => (
          <Marker
            key={college.id}
            position={[college.latitude, college.longitude]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-lg">{college.name}</h3>
                <p className="text-sm text-gray-600">{college.address}</p>
                <p className="text-sm text-gray-600 mt-1">{college.description}</p>
                <a 
                  href={college.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 mt-2 inline-block"
                >
                  Visit Website
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
} 