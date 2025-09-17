import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Package, RotateCcw, Clock, CheckCircle } from 'lucide-react';

const Returns = () => {
  const steps = [
    {
      icon: Package,
      title: "Initiate Return",
      description: "Log into your account and select the items you want to return"
    },
    {
      icon: RotateCcw,
      title: "Print Label",
      description: "Print the prepaid return shipping label we provide"
    },
    {
      icon: Clock,
      title: "Ship Back",
      description: "Package items securely and ship using our prepaid label"
    },
    {
      icon: CheckCircle,
      title: "Get Refund",
      description: "Receive your refund within 5-7 business days after we receive your return"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-black text-black mb-8">Returns & Exchanges</h1>
        <p className="text-xl text-gray-600 mb-12">
          We want you to love your Be Legend gear. If you're not completely satisfied, 
          we'll make it right with our hassle-free return policy.
        </p>

        {/* Return Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-8">How to Return</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 p-6 mb-4">
                  <step.icon className="h-12 w-12 text-black mx-auto mb-4" />
                  <h3 className="font-bold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Return Policy</h2>
            <div className="bg-gray-50 p-6 border border-gray-200 mb-6">
              <h3 className="font-bold text-black mb-2">30-Day Return Window</h3>
              <p className="text-gray-700">
                You have 30 days from the date of delivery to return items for a full refund 
                or exchange. Items must be in original condition with tags attached.
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-black mb-4">What Can Be Returned</h3>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Unworn items with original tags attached</li>
              <li>• Items in original packaging</li>
              <li>• Items without damage, stains, or odors</li>
              <li>• Non-personalized items</li>
            </ul>

            <h3 className="text-xl font-bold text-black mb-4">What Cannot Be Returned</h3>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Items worn or washed</li>
              <li>• Items without tags</li>
              <li>• Personalized or customized items</li>
              <li>• Items damaged by normal wear</li>
              <li>• Undergarments for hygiene reasons</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Exchanges</h2>
            <p className="text-gray-700 mb-4">
              Need a different size or color? We offer free exchanges within 30 days of delivery. 
              Simply follow the return process and specify that you want an exchange instead of a refund.
            </p>
            <div className="bg-gray-50 p-4 border border-gray-200">
              <p className="text-gray-700 font-medium">
                <strong>Pro Tip:</strong> Exchanges are processed faster than returns + new orders. 
                If the item you want is in stock, your exchange will ship within 1-2 business days 
                of receiving your return.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Refund Information</h2>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Refunds are processed to your original payment method</li>
              <li>• Processing time: 5-7 business days after we receive your return</li>
              <li>• Original shipping costs are non-refundable (unless item was defective)</li>
              <li>• Return shipping is free with our prepaid labels</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">International Returns</h2>
            <p className="text-gray-700 mb-4">
              International customers are responsible for return shipping costs. We recommend 
              using a trackable shipping method. Customs duties and taxes are non-refundable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Defective Items</h2>
            <p className="text-gray-700 mb-4">
              If you receive a defective item, we'll provide a full refund including original 
              shipping costs, or send a replacement at no charge. Please contact us within 
              7 days of delivery for defective items.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Need Help?</h2>
            <p className="text-gray-700 mb-4">
              Our customer service team is here to help with any questions about returns or exchanges.
            </p>
            <div className="bg-gray-50 p-4 border border-gray-200">
              <p className="text-gray-700">
                <strong>Email:</strong> returns@belegend.com<br />
                <strong>Phone:</strong> 1-800-BE-LEGEND<br />
                <strong>Hours:</strong> Monday-Friday, 9AM-6PM EST<br />
                <strong>Live Chat:</strong> Available on our website
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Returns;