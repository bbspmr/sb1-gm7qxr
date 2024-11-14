import React from 'react';

interface InputSliderProps {
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  step: number;
  label: string;
  description: string;
}

export default function InputSlider({
  name,
  value,
  onChange,
  min,
  max,
  step,
  label,
  description
}: InputSliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <span className="text-sm text-blue-600 font-medium">{value}</span>
      </div>
      <input
        type="range"
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}