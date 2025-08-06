import React from 'react';
import { Navbar } from './Navbar';
import Footer from '../components/Footer';
export const RefundPolicy = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="px-15">
        <div className="text-center">
          <h2 className="text-5xl pt-48 mb-15">Refund Policy</h2>
        </div>


        <p>
          This Refund Policy outlines the terms and conditions under which refunds may be granted to both
          Influencers and Brands using the TRIBE Platform. By participating in Campaigns, both parties agree to the
          terms outlined below.
        </p>

        <h3 className="text-lg font-semibold mt-6">1. Refunds – For Brands</h3>
        <ol className="list-decimal list-inside space-y-3 mt-2">
          <li>
            Brands may be eligible for a refund if the Influencer fails to deliver the agreed content within the
            specified time frame, as per the Campaign Brief or agreement with TRIBE.
          </li>
          <li>
            No refund will be issued for content that has been delivered, approved, and published unless it violates
            the Campaign Brief or these Terms of Use.
          </li>
          <li>
            Refunds may be considered where the Influencer:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Posts inaccurate or misleading content.</li>
              <li>Fails to disclose the sponsored nature of a post as required.</li>
              <li>Deletes the post before the agreed display duration.</li>
            </ul>
          </li>
          <li>
            All refund requests must be submitted to TRIBE within 14 days of the issue arising. TRIBE will review
            the case and make a final determination at its sole discretion.
          </li>
          <li>
            In case of dispute, TRIBE acts as the arbitrator and its decision is final.
          </li>
        </ol>

        <h3 className="text-lg font-semibold mt-6">2. Refunds – For Influencers</h3>
        <ol className="list-decimal list-inside space-y-3 mt-2">
          <li>
            Influencers are not eligible for refunds on submission fees or pitch credits once content has been
            submitted for review, unless there is a proven technical failure caused by the TRIBE Platform.
          </li>
          <li>
            If a Brand cancels a Campaign or fails to approve content after final submission without valid reason,
            TRIBE may compensate the Influencer at its discretion, particularly where production costs were incurred.
          </li>
          <li>
            TRIBE may issue a refund of pitch credits if the Campaign is terminated unexpectedly before content
            review begins.
          </li>
          <li>
            Influencers are advised not to make any purchases or create content in advance of approval, unless the
            Campaign clearly guarantees reimbursement.
          </li>
          <li>
            All refund or credit requests by Influencers must be submitted within 14 days of the Campaign's closure
            or the issue occurring.
          </li>
        </ol>

        <h3 className="text-lg font-semibold mt-6">3. General Provisions</h3>
        <ol className="list-decimal list-inside space-y-3 mt-2">
          <li>
            All refunds are processed back to the original payment method, or in the form of platform credits where
            applicable.
          </li>
          <li>
            TRIBE reserves the right to reject refund claims that do not meet the eligibility criteria or are made
            outside of the designated time frames.
          </li>
          <li>
            This policy is subject to change at TRIBE's sole discretion. Any updates will be published on the
            platform or communicated via email.
          </li>
        </ol>
      </div>
      <Footer />
    </div>
  );
};


