import React from 'react';

interface Plan {
  name: string;
  features: string[];
  price: string;
}

interface PricingCardProps {
  plan: Plan;
}

const colors = ['yellow', 'blue', 'green', 'pink', 'purple'];

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={`flex flex-col items-center justify-center bg-${color}-100 p-4 shadow-lg rounded-lg transform transition duration-500 ease-in-out hover:scale-105`}>
      <h2 className="text-2xl font-semibold text-gray-700">{plan.name}</h2>
      <ul className="mt-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
      <p className="mt-8 text-2xl font-bold text-gray-700">{plan.price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Sign Up</button>
    </div>
  );
};

export default PricingCard;