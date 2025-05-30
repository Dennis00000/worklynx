import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  FileText,
  UserCircle,
  Users,
  Building,
  CreditCard,
  FileCode,
  ShieldAlert,
  Scale,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export default function TermsOfServicePage() {
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

          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-primary/10 p-3">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms of Service</h1>
          </div>

          <p className="text-foreground/80">Last updated: May 15, 2025</p>
        </div>

        <div className="space-y-8 text-foreground/90">
          <section className="bg-card rounded-lg border p-6">
            <p>
              Welcome to Worklynx. Please read these Terms of Service ("Terms", "Terms of Service") carefully before
              using the Worklynx website and services operated by Worklynx UAB.
            </p>
            <p className="mt-2">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these
              Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            <p className="mt-2">
              By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of
              the terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/10 p-2">
                <UserCircle className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">1. Accounts</h2>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
                termination of your account on our Service.
              </p>
              <p className="mt-2">
                You are responsible for safeguarding the password that you use to access the Service and for any
                activities or actions under your password, whether your password is with our Service or a third-party
                service.
              </p>
              <p className="mt-2">
                You agree not to disclose your password to any third party. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your account.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">2. User Types and Services</h2>
            </div>

            <div className="bg-card rounded-lg border p-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <UserCircle className="h-4 w-4 text-primary" />
                  <h3 className="text-xl font-semibold">2.1 Job Seekers</h3>
                </div>
                <p>
                  As a job seeker, you may create a profile, search for jobs, apply to positions, save job listings, and
                  receive job recommendations. You are responsible for the accuracy of the information in your profile
                  and applications.
                </p>
                <p className="mt-2">
                  You agree not to misrepresent your qualifications, experience, or identity when creating a profile or
                  applying for jobs. Doing so may result in the termination of your account.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Building className="h-4 w-4 text-primary" />
                  <h3 className="text-xl font-semibold">2.2 Employers</h3>
                </div>
                <p>
                  As an employer, you may create a company profile, post job listings, search for candidates, and manage
                  applications. You are responsible for the accuracy of the information in your company profile and job
                  listings.
                </p>
                <p className="mt-2">
                  You agree to post only legitimate job opportunities and to accurately represent the position, company,
                  and requirements. You agree not to use the Service to collect personal information from candidates for
                  purposes other than employment consideration.
                </p>
                <p className="mt-2">
                  Employers must comply with all applicable labor and employment laws, including but not limited to
                  anti-discrimination laws, when posting jobs and evaluating candidates.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/10 p-2">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">3. Subscriptions and Payments</h2>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <p>
                Some parts of the Service are billed on a subscription basis. You will be billed in advance on a
                recurring and periodic basis (such as monthly or annually), depending on the type of subscription plan
                you select.
              </p>
              <p className="mt-2">
                At the end of each period, your subscription will automatically renew under the same conditions unless
                you cancel it or Worklynx cancels it. You may cancel your subscription either through your online
                account management page or by contacting our customer support team.
              </p>
              <p className="mt-2">
                A valid payment method, including credit card or other payment methods, is required to process the
                payment for your subscription. You shall provide Worklynx with accurate and complete billing
                information.
              </p>
              <p className="mt-2">
                All payments are non-refundable except as expressly set forth in these Terms or as required by
                applicable law.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/10 p-2">
                <FileCode className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">4. Content</h2>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <p>
                Our Service allows you to post, link, store, share and otherwise make available certain information,
                text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post
                on or through the Service, including its legality, reliability, and appropriateness.
              </p>
              <p className="mt-2">
                By posting Content on or through the Service, you represent and warrant that: (i) the Content is yours
                (you own it) or you have the right to use it and grant us the rights and license as provided in these
                Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy
                rights, publicity rights, copyrights, contract rights or any other rights of any person.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/10 p-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <p>
                In no event shall Worklynx, nor its directors, employees, partners, agents, suppliers, or affiliates, be
                liable for any indirect, incidental, special, consequential or punitive damages, including without
                limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
                to or use of or inability to access or use the Service.
              </p>
              <div className="flex items-center gap-2 mt-4 text-amber-500">
                <AlertTriangle className="h-5 w-5" />
                <p className="font-medium">Worklynx provides the service "as is" without warranties of any kind.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Scale className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">6. Governing Law</h2>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <p>
                These Terms shall be governed and construed in accordance with the laws of Lithuania, without regard to
                its conflict of law provisions.
              </p>
              <p className="mt-2">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">7. Contact Us</h2>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Building className="h-4 w-4 text-primary mt-1" />
                  <p>Worklynx</p>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <p>
                    Gedimino pr. 28
                    <br />
                    LT-01104 Vilnius, Lithuania
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-primary mt-1" />
                  <p>legal@worklynx.lt</p>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-primary mt-1" />
                  <p>+370 5 212 3456</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Separator className="my-8" />

        <div className="bg-card rounded-lg border p-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-semibold">Have Questions About Our Terms?</h2>
          <p className="mt-2 text-foreground/80">Our team is here to help you understand our terms and conditions.</p>
          <div className="mt-4 flex gap-4">
            <Link href="/contact">
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Us
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
