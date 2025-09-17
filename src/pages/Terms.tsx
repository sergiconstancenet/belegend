import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-black text-black mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2024</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using the Be Legend website and services, you accept and agree to be 
              bound by the terms and provision of this agreement. If you do not agree to abide by 
              the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on Be Legend's 
              website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-700 mb-4">Under this license you may not:</p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Modify or copy the materials</li>
              <li>• Use the materials for commercial purposes</li>
              <li>• Attempt to reverse engineer any software</li>
              <li>• Remove copyright or proprietary notations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">3. Product Information</h2>
            <p className="text-gray-700 mb-4">
              We strive to provide accurate product information, including descriptions, pricing, 
              and availability. However, we do not warrant that product descriptions or other 
              content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">4. Orders and Payment</h2>
            <p className="text-gray-700 mb-4">
              By placing an order, you represent that you are authorized to use the payment method 
              and authorize us to charge the total amount to your payment method.
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• All orders are subject to acceptance and availability</li>
              <li>• We reserve the right to refuse or cancel orders</li>
              <li>• Prices are subject to change without notice</li>
              <li>• Payment must be received before shipment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">5. Shipping and Delivery</h2>
            <p className="text-gray-700 mb-4">
              We will make every effort to ship your order within the timeframe specified. 
              However, delivery dates are estimates and we are not responsible for delays 
              caused by shipping carriers or other circumstances beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">6. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              When you create an account, you must provide accurate and complete information. 
              You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Be Legend or its suppliers be liable for any damages arising 
              out of the use or inability to use the materials on our website, even if we 
              have been notified of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 border border-gray-200">
              <p className="text-gray-700">
                Email: legal@belegend.com<br />
                Phone: 1-800-BE-LEGEND<br />
                Address: Be Legend Legal Department<br />
                123 Fitness Street, Athletic City, AC 12345
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;