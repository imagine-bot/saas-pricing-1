import type { NextApiRequest, NextApiResponse } from 'next'

type Plan = {
  name: string;
  features: string[];
  price: string;
}

type Data = Plan[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const plans: Data = [
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

  res.status(200).json(plans)
}