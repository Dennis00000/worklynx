import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Mail, MessageSquare } from "lucide-react"

export default function EmployerFAQPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Find answers to common questions about using WORKLYNX as an employer
        </p>
      </div>

      {/* Search */}
      <div className="mx-auto mt-8 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
          <Input
            type="text"
            placeholder="Search for answers..."
            className="pl-10 text-foreground placeholder:text-foreground/60"
          />
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="mt-12">
        <Tabs defaultValue="posting" className="mx-auto max-w-3xl">
          <TabsList className="flex flex-wrap h-auto justify-center">
            <TabsTrigger value="posting">Job Posting</TabsTrigger>
            <TabsTrigger value="account">Account & Billing</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="technical">Technical</TabsTrigger>
          </TabsList>

          <TabsContent value="posting" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I post a job on Worklynx?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        To post a job on Worklynx, log in to your employer account and click on the "Post a Job" button
                        in the dashboard. Follow the step-by-step process to enter job details, company information,
                        select a pricing plan, and complete payment. Your job will be live immediately after submission
                        and payment.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>How long will my job posting remain active?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        The duration of your job posting depends on your selected plan:
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-foreground/80">
                        <li>Basic Plan: 30 days</li>
                        <li>Standard Plan: 45 days</li>
                        <li>Premium Plan: 60 days</li>
                      </ul>
                      <p className="mt-2 text-foreground/80">
                        You'll receive email notifications when your posting is about to expire, with options to extend
                        or renew.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I edit my job posting after it's published?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Yes, you can edit your job posting at any time during its active period. Simply log in to your
                        employer account, navigate to "My Jobs," find the job you want to edit, and click the "Edit"
                        button. Changes will be reflected immediately on the live posting.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>What makes a job posting effective?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">An effective job posting should include:</p>
                      <ul className="mt-2 list-disc pl-5 text-foreground/80">
                        <li>Clear, specific job title that matches common search terms</li>
                        <li>Detailed but concise description of responsibilities</li>
                        <li>Specific requirements and qualifications</li>
                        <li>Information about your company culture and benefits</li>
                        <li>Salary range (listings with salary information get 30% more applications)</li>
                        <li>Clear application instructions</li>
                      </ul>
                      <p className="mt-2 text-foreground/80">
                        For more tips, check out our{" "}
                        <a
                          href="/employer-resources/effective-job-descriptions"
                          className="text-primary hover:underline"
                        >
                          guide to writing effective job descriptions
                        </a>
                        .
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>How do I feature my job posting?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Featured job postings are included in our Standard and Premium plans. With the Standard plan,
                        your job will be featured in its category for 7 days. With the Premium plan, your job will be
                        featured on the homepage for 14 days and appear at the top of search results for 30 days.
                      </p>
                      <p className="mt-2 text-foreground/80">
                        If you have a Basic plan, you can upgrade to a featured listing from your dashboard by selecting
                        the job and clicking "Upgrade to Featured."
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I create an employer account?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        To create an employer account, click "Sign Up" in the top right corner of the WORKLYNX website.
                        Select "Employer" as your account type, fill in your details, and follow the verification
                        process. Once verified, you can complete your company profile and start posting jobs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank
                        transfers for annual plans. Payment information is securely processed and stored using
                        industry-standard encryption.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>How do I cancel my subscription?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        You can cancel your subscription at any time from your account settings. Navigate to "Billing &
                        Subscription" and click "Cancel Subscription." Your plan will remain active until the end of
                        your current billing period. No refunds are provided for partial months.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can multiple team members access our employer account?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Yes, you can add team members to your employer account. Standard plans allow up to 3 team
                        members, while Premium plans allow unlimited team members with customizable permission levels.
                        To add team members, go to "Account Settings" &gt; "Team Members" and follow the instructions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Do you offer discounts for volume job postings?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Yes, we offer custom packages for companies with high-volume hiring needs. If you need to post
                        more than 10 jobs, please contact our sales team at sales@worklynx.lt for a customized quote
                        tailored to your specific requirements.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I receive job applications?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        You can receive applications in several ways depending on your settings:
                      </p>
                      <ul className="mt-2 list-disc pl-5 text-foreground/80">
                        <li>Email: Applications are forwarded directly to your specified email address</li>
                        <li>Worklynx Dashboard: All applications are stored in your employer dashboard for review</li>
                        <li>External Website: Candidates can be redirected to your company's application system</li>
                      </ul>
                      <p className="mt-2 text-foreground/80">
                        You can configure your preferred application method when posting a job.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I download all applications as a spreadsheet?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Yes, Standard and Premium plan subscribers can export all applications as CSV or Excel files.
                        From your dashboard, go to "Applications," select the job posting, and click "Export" to
                        download all application data.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>How can I manage and track applications?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">Our application tracking system allows you to:</p>
                      <ul className="mt-2 list-disc pl-5 text-foreground/80">
                        <li>View all applications in one place</li>
                        <li>Sort and filter candidates based on various criteria</li>
                        <li>Rate candidates and add notes</li>
                        <li>Change application status (New, Reviewed, Interview, Rejected, Hired)</li>
                        <li>Communicate with candidates directly through the platform</li>
                        <li>Schedule interviews with calendar integration</li>
                      </ul>
                      <p className="mt-2 text-foreground/80">
                        Premium plan subscribers also get access to advanced candidate matching and AI-powered screening
                        tools.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>How long are applications stored?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Applications are stored in your dashboard for the duration of your subscription plus 30 days. If
                        you cancel your subscription, you'll have 30 days to download any application data before it's
                        removed from our system. We recommend regularly exporting application data for your records.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What analytics do you provide?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">Our analytics features vary by plan:</p>
                      <ul className="mt-2 list-disc pl-5 text-foreground/80">
                        <li>
                          <span className="font-medium">Basic Plan:</span> View impressions, clicks, and application
                          counts
                        </li>
                        <li>
                          <span className="font-medium">Standard Plan:</span> All basic analytics plus traffic sources,
                          candidate demographics, and application conversion rates
                        </li>
                        <li>
                          <span className="font-medium">Premium Plan:</span> All standard analytics plus competitor
                          benchmarking, market insights, and custom reports
                        </li>
                      </ul>
                      <p className="mt-2 text-foreground/80">
                        Analytics are updated in real-time and accessible from your employer dashboard.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is the candidate matching service?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        The candidate matching service, available with Premium plans, uses AI algorithms to match your
                        job postings with qualified candidates in our database. The system analyzes skills, experience,
                        and preferences to suggest potential matches, even before they apply. You can review matched
                        candidates and invite them to apply directly to your position.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>How does the social media promotion work?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        With Standard and Premium plans, your job postings are automatically promoted on Worklynx's
                        social media channels (LinkedIn, Facebook, Twitter) to increase visibility. Premium plan
                        subscribers also receive promotion in our weekly newsletter sent to over 50,000 job seekers in
                        Lithuania.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I create a company profile?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Yes, all employer accounts include a customizable company profile page. You can add your company
                        logo, cover image, description, benefits, culture information, and social media links. A
                        complete company profile helps attract more qualified candidates by showcasing your employer
                        brand. Your profile will be linked to all your job postings and visible to job seekers browsing
                        companies.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Do you offer employer verification?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Yes, we offer employer verification to build trust with job seekers. Verified employers receive
                        a badge on their company profile and job listings. To get verified, you need to confirm your
                        company email domain, provide business registration details, and complete a brief review
                        process. Verification is free and typically takes 1-2 business days.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Can I integrate Worklynx with my ATS?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Yes, Worklynx offers API integration with popular Applicant Tracking Systems. We currently
                        support integrations with Workable, Greenhouse, Lever, and BambooHR. Premium plan subscribers
                        have access to our full API for custom integrations. Contact our support team for documentation
                        and assistance with setting up integrations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is my data secure?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Yes, we take data security seriously. Worklynx uses industry-standard encryption for all data
                        transmission and storage. We are GDPR compliant and implement strict access controls to protect
                        your information. Our systems undergo regular security audits and penetration testing. For more
                        details, please review our{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I post jobs programmatically via API?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">
                        Yes, Premium plan subscribers have access to our Job Posting API, which allows you to
                        programmatically create, update, and manage job postings. This is particularly useful for
                        companies with high-volume hiring needs or those who want to sync job postings from their
                        internal systems. API documentation is available in our developer portal.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>What browsers are supported?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-foreground/80">Worklynx supports all modern browsers, including:</p>
                      <ul className="mt-2 list-disc pl-5 text-foreground/80">
                        <li>Google Chrome (latest 2 versions)</li>
                        <li>Mozilla Firefox (latest 2 versions)</li>
                        <li>Apple Safari (latest 2 versions)</li>
                        <li>Microsoft Edge (latest 2 versions)</li>
                      </ul>
                      <p className="mt-2 text-foreground/80">
                        We recommend keeping your browser updated for the best experience and security.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact Section */}
      <div className="mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight">Still Have Questions?</h2>
          <p className="mt-2 text-foreground/80">Our support team is here to help</p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium">Email Support</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Send us an email and we'll get back to you within 24 hours on business days.
              </p>
              <a href="mailto:employers@worklynx.lt" className="mt-4 text-primary hover:underline">
                employers@worklynx.lt
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium">Live Chat</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Chat with our support team in real-time during business hours (9:00-17:00 EEST).
              </p>
              <Button className="mt-4">Start Chat</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
