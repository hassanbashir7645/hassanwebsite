import React, { useState } from 'react';

const sampleTests = [
  {
    id: 1,
    title: 'Personality Assessment',
    description: 'Analyze traits like introversion, openness, and agreeableness.',
  },
  {
    id: 2,
    title: 'Cognitive Ability Test',
    description: 'Evaluate logical reasoning, memory, and problem-solving skills.',
  },
  {
    id: 3,
    title: 'Emotional Intelligence Test',
    description: 'Understand your ability to manage emotions and relate to others.',
  },
];

const PsychometricTests: React.FC = () => {
  const [selectedTest, setSelectedTest] = useState<number | null>(null);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Psychometric Tests</h1>
      <p className="text-gray-600">Select a test to explore more details.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sampleTests.map(test => (
          <div
            key={test.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer bg-white"
            onClick={() => setSelectedTest(test.id)}
          >
            <h2 className="text-lg font-semibold text-blue-600">{test.title}</h2>
            <p className="text-gray-500 text-sm">{test.description}</p>
          </div>
        ))}
      </div>

      {selectedTest && (
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <h3 className="text-lg font-bold text-blue-700">
            You selected: {sampleTests.find(t => t.id === selectedTest)?.title}
          </h3>
          <p className="text-gray-700 mt-2">
            (Feature not available yet — test content will be added soon.)
          </p>
        </div>
      )}
    </div>
  );
};

export default PsychometricTests;
