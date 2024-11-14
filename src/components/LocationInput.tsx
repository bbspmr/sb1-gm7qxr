import React from 'react';

interface LocationInputProps {
  latitude: string;
  longitude: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LocationInput({ latitude, longitude, onChange }: LocationInputProps) {
  return (
    <div className="grid gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Latitude
        </label>
        <input
          type="text"
          name="latitude"
          value={latitude}
          onChange={onChange}
          placeholder="e.g., 40.7128"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Longitude
        </label>
        <input
          type="text"
          name="longitude"
          value={longitude}
          onChange={onChange}
          placeholder="e.g., -74.0060"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}