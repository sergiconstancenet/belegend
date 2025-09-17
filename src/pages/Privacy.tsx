import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-black text-black mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2024</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              make a purchase, subscribe to our newsletter, or contact us for support.
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Personal information (name, email address, phone number)</li>
              <li>• Billing and shipping addresses</li>
              <li>• Payment information (processed securely by our payment providers)</li>
              <li>• Account preferences and purchase history</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Process and fulfill your orders</li>
              <li>• Communicate with you about your purchases</li>
              <li>• Send you marketing communications (with your consent)</li>
              <li>• Improve our products and services</li>
              <li>• Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy:
            </p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Service providers who assist us in operating our business</li>
              <li>• Legal requirements or to protect our rights</li>
              <li>• Business transfers (mergers, acquisitions)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="text-gray-700 space-y-2 mb-4">
              <li>• Access your personal information</li>
              <li>• Correct inaccurate information</li>
              <li>• Delete your personal information</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">6. Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to enhance your browsing experience, 
              analyze site traffic, and personalize content. You can control cookie settings 
              through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 border border-gray-200">
              <p className="text-gray-700">
                Email: privacy@belegend.com<br />
                Address: Be Legend Privacy Team<br />
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

export default Privacy;