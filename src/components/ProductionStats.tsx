import React from 'react';
import { Calendar, Sun, Battery, PanelTop } from 'lucide-react';

interface ProductionStatsProps {
  singlePanelOutput: number;
  totalOutput: number;
  numberOfPanels: number;
}

export default function ProductionStats({ 
  singlePanelOutput, 
  totalOutput,
  numberOfPanels 
}: ProductionStatsProps) {
  const monthlyOutput = totalOutput * 30.44; // Average days in a month
  const yearlyOutput = totalOutput * 365;
  
  // Average household consumption values for comparison
  const avgDailyHouseholdUsage = 30; // kWh
  const percentOfDailyNeeds = (totalOutput / avgDailyHouseholdUsage) * 100;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-blue-900 mb-6">Single Panel Output</h2>
        <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
          <div className="flex items-center gap-3">
            <PanelTop className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">Per Panel</span>
          </div>
          <span className="text-lg font-semibold text-blue-600">
            {singlePanelOutput.toFixed(2)} kWh/day
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
        <h2 className="text-xl font-semibold text-blue-900 mb-6">
          Total System Output ({numberOfPanels} Panel{numberOfPanels > 1 ? 's' : ''})
        </h2>
        
        <div className="grid gap-4">
          <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
            <div className="flex items-center gap-3">
              <Sun className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">Daily</span>
            </div>
            <span className="text-lg font-semibold text-blue-600">
              {totalOutput.toFixed(2)} kWh
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">Monthly</span>
            </div>
            <span className="text-lg font-semibold text-blue-600">
              {monthlyOutput.toFixed(2)} kWh
            </span>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/60 rounded-lg">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">Yearly</span>
            </div>
            <span className="text-lg font-semibold text-blue-600">
              {yearlyOutput.toFixed(2)} kWh
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
        <div className="flex items-center gap-2 mb-4">
          <Battery className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Household Coverage</h3>
        </div>
        <div className="space-y-3">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(percentOfDailyNeeds, 100)}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">
            Your {numberOfPanels} panel system provides approximately{' '}
            <span className="font-semibold text-green-600">
              {percentOfDailyNeeds.toFixed(1)}%
            </span>{' '}
            of an average household's daily electricity needs
          </p>
        </div>
      </div>
    </div>
  );
}