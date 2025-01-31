import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="layout-spacing py-5 sm:py-10 bg-gray-50">
      <div className="w-full max-w-5xl mx-auto grid gap-5 sm:gap-10">
        <h1 className="text-primary text-2xl sm:text-3xl font-bold">
          Privacy Policy
        </h1>
        {/* Introduction */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            1. Introduction
          </h2>
          <p className="text-gray-500 pl-6 sm:text-lg">
            LoomFare values your privacy and is committed to protecting your
            personal data. This policy explains how we collect, use, share, and
            protect your information.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            2. Information We Collect
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>LoomFare collects the following types of information:</p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and payment details.
              </li>
              <li>
                <strong>Technical Information:</strong> IP address, browser
                type, and device identifiers.
              </li>
              <li>
                <strong>Transactional Information:</strong> Records of deposits,
                withdrawals, and trades.
              </li>
            </ul>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            3. How We Use Your Information
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>To provide and improve our services.</li>
              <li>To process transactions and manage your account.</li>
              <li>
                To send important updates, notifications, and marketing content.
              </li>
              <li>
                To ensure platform security and prevent fraudulent activities.
              </li>
            </ul>
          </div>
        </div>

        {/* Data Sharing and Disclosure */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            4. Data Sharing and Disclosure
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              We do not sell your personal data. However, we may share it with
              third parties under the following circumstances:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                <strong>Service Providers:</strong> To facilitate payments,
                analytics, and other platform services.
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required to comply with
                applicable laws or legal processes.
              </li>
              <li>
                <strong>Business Transfers:</strong> In case of mergers,
                acquisitions, or asset sales.
              </li>
            </ul>
          </div>
        </div>

        {/* Data Retention */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            5. Data Retention
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              We retain your data for as long as necessary to fulfill the
              purposes outlined in this policy or to comply with legal
              obligations. Once no longer required, your data will be securely
              deleted or anonymized.
            </p>
          </div>
        </div>

        {/* Data Security */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            6. Data Security
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              We implement robust measures, including encryption and firewalls,
              to protect your personal information. However:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                No system is completely secure, and we cannot guarantee absolute
                protection.
              </li>
              <li>
                Users are responsible for maintaining the security of their
                login credentials.
              </li>
            </ul>
          </div>
        </div>

        {/* Your Rights */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            7. Your Rights
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>As a user, you have the following rights:</p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>Access, update, or delete your personal data.</li>
              <li>Restrict or object to certain data processing activities.</li>
              <li>Withdraw consent for data processing where applicable.</li>
            </ul>
            <div className="flex">
              <p>To exercise these rights, contact us at </p>
              <div className="ml-1">
                <strong>Email:</strong>{" "}
                <Link
                  href={"mailto:support@loomfare.com"}
                  className="text-primary transition-all hover:underline"
                >
                  support@loomfare.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cookies and Tracking Technologies */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            8. Cookies and Tracking Technologies
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              We use cookies and similar technologies to improve your experience
              and analyze platform usage. You can:
            </p>
            <ul className="list-disc text-sm sm:text-base grid gap-2">
              <li>
                Adjust your browser settings to manage or disable cookies.
              </li>
              <li>Opt out of tracking cookies where applicable.</li>
            </ul>
          </div>
        </div>

        {/* Third-Party Links */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            9. Third-Party Links
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              Our platform may contain links to third-party websites. We are not
              responsible for their privacy practices or content. Users are
              encouraged to review the privacy policies of third-party sites
              before providing any information.
            </p>
          </div>
        </div>

        {/* Policy Updates */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            10. Policy Updates
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on our platform, and significant updates will be
              communicated to users. We encourage users to periodically review
              this policy to stay informed.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid gap-3 px-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
            11. Contact Information
          </h2>
          <div className="text-gray-500 pl-6 sm:text-lg grid gap-3">
            <p>
              If you have any questions, concerns, or feedback about this
              Privacy Policy, you can reach us at:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <Link
                href={"mailto:support@loomfare.com"}
                className="text-primary transition-all hover:underline"
              >
                support@loomfare.com
              </Link>
            </p>
            <p>
              Our support team is available to assist you during business hours.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
