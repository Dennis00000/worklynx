import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4 gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-foreground/80">Last updated: May 15, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p>
            At Worklynx, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or use our services. Please read this privacy policy
            carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>

          <h3>1.1 Personal Data</h3>
          <p>
            When you register for an account, apply for jobs, or post job listings, we collect personally identifiable
            information, such as your:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Postal address</li>
            <li>Professional information (resume, work history, education, skills)</li>
            <li>Company information (for employers)</li>
            <li>Payment information</li>
          </ul>

          <h3>1.2 Derivative Data</h3>
          <p>
            Information our servers automatically collect when you access the platform, such as your IP address, browser
            type, operating system, access times, and the pages you have viewed directly before and after accessing the
            site.
          </p>

          <h3>1.3 Financial Data</h3>
          <p>
            Financial information, such as data related to your payment method (e.g., valid credit card number, card
            brand, expiration date) that we may collect when you purchase a subscription or post a job listing. We store
            only very limited, if any, financial information that we collect. Otherwise, all financial information is
            stored by our payment processor, and you are encouraged to review their privacy policy and contact them
            directly for responses to your questions.
          </p>

          <h3>1.4 Data From Social Networks</h3>
          <p>
            User information from social networking sites, such as LinkedIn, Facebook, Google, if you connect your
            account to or log in with these services.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We may use the information we collect about you for various purposes, including to:</p>
          <ul>
            <li>Create and manage your account</li>
            <li>Process job applications and job postings</li>
            <li>Facilitate communication between job seekers and employers</li>
            <li>Process payments and subscriptions</li>
            <li>Send you administrative information, such as updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Improve the platform and user experience</li>
            <li>Protect against, identify, and prevent fraud and other illegal activity</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>

          <h3>3.1 By Law or to Protect Rights</h3>
          <p>
            If we believe the release of information about you is necessary to respond to legal process, to investigate
            or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we
            may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>

          <h3>3.2 Third-Party Service Providers</h3>
          <p>
            We may share your information with third parties that perform services for us or on our behalf, including
            payment processing, data analysis, email delivery, hosting services, customer service, and marketing
            assistance.
          </p>

          <h3>3.3 Job Applications</h3>
          <p>
            When you apply for a job through our platform, your application information will be shared with the employer
            who posted the job. Employers are required to comply with applicable data protection laws when processing
            your application.
          </p>

          <h3>3.4 Marketing Communications</h3>
          <p>
            With your consent, or with an opportunity for you to withdraw consent, we may share your information with
            third parties for marketing purposes.
          </p>

          <h3>3.5 Business Transfers</h3>
          <p>
            If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your information may be
            transferred as part of that transaction. We will notify you before your information is transferred and
            becomes subject to a different Privacy Policy.
          </p>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information.
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data
            transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Your Rights Regarding Your Data</h2>
          <p>
            Under the General Data Protection Regulation (GDPR) and other applicable data protection laws, you have
            certain rights regarding your personal data:
          </p>
          <ul>
            <li>Right to access - You have the right to request copies of your personal data.</li>
            <li>
              Right to rectification - You have the right to request that we correct any information you believe is
              inaccurate or complete information you believe is incomplete.
            </li>
            <li>
              Right to erasure - You have the right to request that we erase your personal data, under certain
              conditions.
            </li>
            <li>
              Right to restrict processing - You have the right to request that we restrict the processing of your
              personal data, under certain conditions.
            </li>
            <li>
              Right to object to processing - You have the right to object to our processing of your personal data,
              under certain conditions.
            </li>
            <li>
              Right to data portability - You have the right to request that we transfer the data we have collected to
              another organization, or directly to you, under certain conditions.
            </li>
          </ul>
          <p>
            If you make a request, we have one month to respond to you. If you would like to exercise any of these
            rights, please contact us at privacy@worklynx.lt.
          </p>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the platform to help
            customize the platform and improve your experience. For more information on how we use cookies, please refer
            to our Cookie Policy.
          </p>

          <h2>7. Third-Party Websites</h2>
          <p>
            The platform may contain links to third-party websites and applications of interest, including
            advertisements and external services, that are not affiliated with us. Once you have used these links to
            leave the platform, any information you provide to these third parties is not covered by this Privacy
            Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing
            any information to any third-party websites, you should inform yourself of the privacy policies and
            practices of the third party responsible for that website, and should take those steps necessary to, in your
            discretion, protect the privacy of your information.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            The platform is not intended for individuals under the age of 16. We do not knowingly collect personal
            information from children under 16. If you are under 16, do not use or provide any information on this
            platform. If we learn we have collected or received personal information from a child under 16 without
            verification of parental consent, we will delete that information.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time in order to reflect, for example, changes to our
            practices or for other operational, legal, or regulatory reasons. The updated version will be indicated by
            an updated "Last updated" date. Changes to this Privacy Policy are effective when they are posted on this
            page.
          </p>

          <h2>10. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>
            Worklynx
            <br />
            Gedimino pr. 28
            <br />
            LT-01104 Vilnius, Lithuania
            <br />
            Email: privacy@worklynx.lt
            <br />
            Phone: +370 5 212 3456
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-semibold">Have Questions About Our Privacy Policy?</h2>
          <p className="mt-2 text-foreground/80">Our team is here to help you understand how we protect your data.</p>
          <div className="mt-4 flex gap-4">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
            <Link href="/faq">
              <Button variant="outline">View FAQ</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
