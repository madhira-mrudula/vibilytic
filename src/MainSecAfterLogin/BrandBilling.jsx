import { CreditCard, Download, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Aos from 'aos';
const invoices = [
  { id: 'INV-1001', date: '2025-07-01', amount: 199, status: 'Paid' },
  { id: 'INV-1002', date: '2025-06-01', amount: 199, status: 'Paid' },
  { id: 'INV-1003', date: '2025-05-01', amount: 199, status: 'Paid' },
];

const Billing = () => {
  const [plan, setPlan] = useState({
    name: 'Pro Plan',
    price: '$199/month',
    features: ['Campaign Analytics', 'Unlimited Invites', 'Priority Support'],
  });
   useEffect(()=>{
     Aos.init({duration:1000,
      easing:"ease-in-out" 
     })
    },[])

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold">Billing</h1>

      {/* Plan Details */}
      <div className="bg-white shadow rounded-2xl p-6" data-aos="fade-down">
        <h2 className="text-xl font-semibold mb-2">Current Plan</h2>
        <p className="text-gray-600 mb-1">{plan.name}</p>
        <p className="text-purple-600 font-semibold mb-3">{plan.price}</p>
        <ul className="list-disc ml-5 text-gray-500 mb-4">
          {plan.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"data-aos="fade-right">
          <ArrowUpRight className="w-4 h-4 mr-2" />
          Upgrade Plan
        </button>
      </div>

      {/* Payment Method */}
      <div className="bg-white shadow rounded-2xl p-6"data-aos="fade-left">
        <h2 className="text-xl font-semibold mb-2">Payment Method</h2>
        <div className="flex items-center space-x-4">
          <CreditCard className="w-6 h-6 text-gray-500" />
          <div>
            <p className="text-gray-700">Visa ending in 4242</p>
            <p className="text-gray-400 text-sm">Expires 12/26</p>
          </div>
        </div>
      </div>

      {/* Invoice History */}
      <div className="bg-white shadow rounded-2xl p-6"data-aos="fade-right" >
        <h2 className="text-xl font-semibold mb-4">Invoice History</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Invoice ID</th>
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{inv.id}</td>
                  <td className="px-4 py-2 border">{inv.date}</td>
                  <td className="px-4 py-2 border">${inv.amount}</td>
                  <td className="px-4 py-2 border">
                    <span className="text-green-600 font-medium">{inv.status}</span>
                  </td>
                  <td className="px-4 py-2 border">
                    <button className="flex items-center text-purple-600 hover:underline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Billing;

