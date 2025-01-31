import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="layout-spacing py-5 sm:py-10 bg-gray-50">
      <div className="w-full max-w-5xl mx-auto grid gap-5 sm:gap-10">
        <h1 className="text-primary text-2xl sm:text-3xl font-bold">
          Terms and Conditions
        </h1>
        {/* Introduction */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            1. Introduction
          </h2>
          <p className="text-gray-500 pl-6 sm:text-lg ">
            Welcome to LoomFare, a platform designed for sending, receiving,
            trading, and mining digital assets securely. . By accessing or using
            our services, you agree to be bound by these Terms and Conditions.
            If you do not agree, please discontinue use of the platform
            immediately. For information on how we handle your personal data,
            please refer to our{" "}
            <Link
              href={"/privacy-policy"}
              className="text-primary transition-all hover:underline"
            >
              Privacy Policy.
            </Link>
          </p>
        </div>

        {/* Eligibility */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            2. Eligibility
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>To use LoomFare, you must:</p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                Be at least 18 years old or the age of majority in your
                jurisdiction.
              </li>
              <li>Comply with all applicable laws and regulations.</li>
              <li>Not have previously been banned from using our services.</li>
            </ul>
          </div>
        </div>

        {/* Account Registration */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            3. Account Registration
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              Creating an account is required to access our platform’s features.
              By registering, you agree to the following:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                Provide accurate, current, and complete information during the
                registration process.
              </li>
              <li>
                Keep your login credentials confidential and secure. You are
                responsible for all activities conducted under your account.
              </li>
              <li>
                Notify us immediately of any unauthorized access or suspicious
                activity involving your account.
              </li>
              <li>
                Understand that LoomFare reserves the right to suspend or
                terminate accounts for providing false information or violating
                our terms.
              </li>
            </ul>
          </div>
        </div>

        {/* Services Provided */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            4. Services Provided
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              LoomFare offers a comprehensive range of cryptocurrency-related
              services to its users, including:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                Secure and seamless sending and receiving of digital assets.
              </li>
              <li>
                Advanced trading tools and resources for buying, selling, and
                managing digital assets.
              </li>
              <li>Mining solutions with optimized efficiency and support.</li>
              <li>Real-time market insights and updates.</li>
            </ul>
            <p>
              We strive for accuracy but do not guarantee the completeness or
              timeliness of market data.
            </p>
          </div>
        </div>

        {/* Payments and Fees */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            5. Payments and Fees
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              All payments and fees on LoomFare are governed by the following:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                <strong>Deposit Requirements:</strong> Users must make an
                initial deposit to access certain features, ensuring access to
                secure services and enabling platform functionality. The deposit
                will reflect in the user&apos;s account immediately upon
                successful completion.
              </li>
              <li>
                <strong>Transaction Fees:</strong> Any applicable fees will be
                disclosed before transaction completion.
              </li>
              <li>
                <strong>Refund Policy:</strong> Refunds are only provided where
                mandated by applicable laws.
              </li>
            </ul>
          </div>
        </div>

        {/* Prohibited Activities */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            6. Prohibited Activities
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>By using our platform, you agree not to:</p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>Engage in fraudulent or deceptive activities.</li>
              <li>Disrupt or interfere with the platform&apos;s operations.</li>
              <li>
                Use automated systems to scrape or collect data without
                permission.
              </li>
            </ul>
            <p>
              Violating these terms may result in suspension or termination of
              your account.
            </p>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            7. Intellectual Property
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              All content on LoomFare, including logos, trademarks, and
              software, is owned by or licensed to us. Users may not:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                Reproduce, distribute, or modify any platform content without
                authorization.
              </li>
              <li>
                Use LoomFare trademarks or logos without prior written consent.
              </li>
            </ul>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            8. Risk Disclaimer
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              Cryptocurrency trading and mining involve significant risks,
              including the potential loss of all invested funds. By using
              LoomFare, you:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>Acknowledge these inherent risks.</li>
              <li>
                Accept full responsibility for your decisions and activities.
              </li>
              <li>
                Understand that LoomFare does not provide financial or
                investment advice.
              </li>
            </ul>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            9. Limitation of Liability
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>To the extent permitted by law:</p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                LoomFare is not liable for financial losses, damages, or
                liabilities incurred through platform use.
              </li>
              <li>
                We do not guarantee uninterrupted, error-free services or
                specific financial outcomes.
              </li>
            </ul>
          </div>
        </div>

        {/* Termination */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            10. Termination
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              We reserve the right to terminate or suspend your account if you:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>Violate these Terms and Conditions.</li>
              <li>
                Provide false or misleading information during registration.
              </li>
              <li>Engage in prohibited activities.</li>
            </ul>
            <p>
              Upon termination, access to all services will cease immediately,
              and any outstanding obligations remain enforceable.
            </p>
          </div>
        </div>

        {/* Governing Law and Dispute Resolution */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            11. Governing Law and Dispute Resolution
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>These Terms are governed by the laws</p>
            <p>
              In the event of disputes, users agree to the following process:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>Attempt to resolve disputes through mediation first.</li>
              <li>Pursue formal legal action only if mediation fails.</li>
            </ul>

            <p>
              All litigation must occur within the jurisdiction specified in
              these Terms.
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            12. Changes to Terms
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              LoomFare reserves the right to update or modify these Terms and
              Conditions at any time. Updates will be posted on our platform,
              and significant changes may be communicated to users via email or
              platform notifications.
            </p>
            <p>
              By continuing to use our services after updates are made, you
              agree to the revised terms.
            </p>
            <p>
              Users are encouraged to review these Terms periodically to stay
              informed of any changes.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            13. Contact Information
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>For any questions or concerns, please contact us at:</p>
            <p>
              <strong>Email:</strong>{" "}
              <Link
                href={"mailto:support@primefuturespip.com"}
                className="text-primary transition-all hover:underline"
              >
                support@Loomfare.com
              </Link>
            </p>
            <p>
              Our support team is available during business hours to assist you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
