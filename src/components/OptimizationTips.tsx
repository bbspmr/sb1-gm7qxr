import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function OptimizationTips() {
  const tips = [
    {
      title: "Panel Orientation",
      description: "In the Northern hemisphere, face panels South. In Southern hemisphere, face North. Optimal tilt angle ≈ latitude angle."
    },
    {
      title: "Shading Management",
      description: "Avoid shadows from trees, buildings, or other structures. Even partial shade can significantly reduce output."
    },
    {
      title: "Regular Maintenance",
      description: "Clean panels regularly, especially in dusty areas. Check for and repair any damage promptly."
    },
    {
      title: "Temperature Control",
      description: "Allow air circulation behind panels. High temperatures reduce efficiency - consider this in hot climates."
    },
    {
      title: "System Monitoring",
      description: "Install a monitoring system to track performance and identify issues early."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
        <Lightbulb className="w-5 h-5 text-yellow-600" />
        Optimization Tips
      </h3>
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div key={index} className="bg-white/60 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-1">{tip.title}</h4>
            <p className="text-sm text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}