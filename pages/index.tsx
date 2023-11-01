import { useEffect, useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import PricingCard from '../components/PricingCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('/api/plans')
      .then(response => response.json())
      .then(data => setPlans(data));
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="grid grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </main>
  )
}