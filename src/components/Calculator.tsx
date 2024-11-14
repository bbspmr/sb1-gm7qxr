import React, { useState } from 'react';
import { Sun, MapPin } from 'lucide-react';
import InputForm from './InputForm';
import OutputView from './OutputView';

export default function Calculator() {
  const [showResults, setShowResults] = useState(false);
  const [calculationData, setCalculationData] = useState(null);

  const handleCalculate = (data) => {
    setCalculationData(data);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Solar Panel Calculator</h1>
              <p className="mt-2 opacity-90">Estimate your solar panel system output</p>
            </div>
            {showResults ? <MapPin className="w-12 h-12" /> : <Sun className="w-12 h-12" />}
          </div>
        </div>

        {showResults ? (
          <OutputView data={calculationData} onBack={handleBack} />
        ) : (
          <InputForm onCalculate={handleCalculate} />
        )}
      </div>
    </div>
  );
}