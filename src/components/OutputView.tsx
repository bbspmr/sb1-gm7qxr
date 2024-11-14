import React from 'react';
import { ArrowLeft, Calendar, Sun, Battery, PanelTop, MapPin } from 'lucide-react';
import ProductionStats from './ProductionStats';

export default function OutputView({ data, onBack }) {
  return (
    <div className="p-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Calculator
      </button>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-4">
              <MapPin className="w-5 h-5" />
              Location Details
            </h3>
            <div className="grid gap-3">
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Latitude</p>
                <p className="font-medium text-gray-900">{data.latitude}°</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Longitude</p>
                <p className="font-medium text-gray-900">{data.longitude}°</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-4">
              <PanelTop className="w-5 h-5" />
              System Configuration
            </h3>
            <div className="grid gap-3">
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Number of Panels</p>
                <p className="font-medium text-gray-900">{data.numberOfPanels}</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Panel Area</p>
                <p className="font-medium text-gray-900">{data.singlePanelArea} m²</p>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Efficiency</p>
                <p className="font-medium text-gray-900">{(data.efficiency * 100).toFixed(1)}%</p>
              </div>
            </div>
          </div>
        </div>

        <ProductionStats 
          singlePanelOutput={data.singlePanelOutput}
          totalOutput={data.totalOutput}
          numberOfPanels={data.numberOfPanels}
        />
      </div>
    </div>
  );
}