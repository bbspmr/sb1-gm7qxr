import React, { useState } from 'react';
import { Sun, CloudRain, Info, PanelTop, MapPin } from 'lucide-react';
import InputSlider from './InputSlider';
import LocationInput from './LocationInput';
import OptimizationTips from './OptimizationTips';

interface CalculatorInputs {
  numberOfPanels: number;
  singlePanelArea: number;
  efficiency: number;
  irradiance: number;
  sunlightHours: number;
  weatherFactor: number;
  latitude: string;
  longitude: string;
}

export default function InputForm({ onCalculate }) {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    numberOfPanels: 1,
    singlePanelArea: 1.6,
    efficiency: 0.20,
    irradiance: 5,
    sunlightHours: 5,
    weatherFactor: 0.8,
    latitude: '',
    longitude: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'latitude' || name === 'longitude' ? value : parseFloat(value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const singleOutput = inputs.singlePanelArea * 
                        inputs.efficiency * 
                        inputs.irradiance * 
                        inputs.sunlightHours * 
                        inputs.weatherFactor;
    
    const calculationResults = {
      ...inputs,
      singlePanelOutput: Number(singleOutput.toFixed(2)),
      totalOutput: Number((singleOutput * inputs.numberOfPanels).toFixed(2))
    };
    
    onCalculate(calculationResults);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-xl space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900">
              <MapPin className="w-5 h-5" />
              Location
            </h3>
            <LocationInput
              latitude={inputs.latitude}
              longitude={inputs.longitude}
              onChange={handleInputChange}
            />
          </div>

          <div className="bg-blue-50 p-6 rounded-xl space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900">
              <PanelTop className="w-5 h-5" />
              Panel Configuration
            </h3>
            
            <InputSlider
              name="numberOfPanels"
              value={inputs.numberOfPanels}
              onChange={handleInputChange}
              min={1}
              max={50}
              step={1}
              label="Number of Panels"
              description="How many solar panels you plan to install"
            />

            <InputSlider
              name="singlePanelArea"
              value={inputs.singlePanelArea}
              onChange={handleInputChange}
              min={0.5}
              max={2.5}
              step={0.1}
              label="Single Panel Area (m²)"
              description="Standard residential panels are typically 1.6-1.8m²"
            />

            <InputSlider
              name="efficiency"
              value={inputs.efficiency}
              onChange={handleInputChange}
              min={0.1}
              max={0.4}
              step={0.01}
              label="Panel Efficiency"
              description="Modern panels range from 15-23%"
            />
          </div>

          <div className="bg-blue-50 p-6 rounded-xl space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900">
              <Sun className="w-5 h-5" />
              Environmental Factors
            </h3>

            <InputSlider
              name="irradiance"
              value={inputs.irradiance}
              onChange={handleInputChange}
              min={1}
              max={7}
              step={0.1}
              label="Average Irradiance (kWh/m²/day)"
              description="Higher near equator, lower at poles"
            />

            <InputSlider
              name="sunlightHours"
              value={inputs.sunlightHours}
              onChange={handleInputChange}
              min={1}
              max={12}
              step={0.5}
              label="Sunlight Hours"
              description="Average hours of usable sunlight per day"
            />

            <InputSlider
              name="weatherFactor"
              value={inputs.weatherFactor}
              onChange={handleInputChange}
              min={0.4}
              max={1}
              step={0.1}
              label="Weather Factor"
              description="Accounts for weather impact on efficiency"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <Info className="w-5 h-5" />
              Weather Factor Guide
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-yellow-500" />
                <span>0.9 - 1.0: Sunny climate (e.g., desert regions)</span>
              </div>
              <div className="flex items-center gap-3">
                <CloudRain className="w-5 h-5 text-gray-500" />
                <span>0.6 - 0.8: Mixed climate (e.g., temperate zones)</span>
              </div>
              <div className="flex items-center gap-3">
                <CloudRain className="w-5 h-5 text-blue-500" />
                <span>0.4 - 0.6: Cloudy climate (e.g., northern regions)</span>
              </div>
            </div>
          </div>

          <OptimizationTips />
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Calculate Output
        </button>
      </div>
    </form>
  );
}