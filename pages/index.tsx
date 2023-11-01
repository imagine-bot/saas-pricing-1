import Image from 'next/image'
import { Inter } from 'next/font/google'
import PricingCard from '../components/PricingCard'

const inter = Inter({ subsets: ['latin'] })

const plans = [
  {
    name: 'Basic',
    features: ['1 GB Storage', '10,000 Requests', '24/7 Support'],
    price: '$10/mo'
  },
  {
    name: 'Pro',
    features: ['10 GB Storage', '100,000 Requests', '24/7 Support'],
    price: '$20/mo'
  },
  {
    name: 'Enterprise',
    features: ['100 GB Storage', '1,000,000 Requests', '24/7 Support'],
    price: '$100/mo'
  },
]

export default function Home() {
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