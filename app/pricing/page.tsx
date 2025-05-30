import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, HelpCircle } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Transparent Pricing for Employers</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Choose the plan that fits your hiring needs, with no hidden fees or surprises
        </p>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="monthly" className="mx-auto max-w-3xl">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Basic Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>Essential visibility for your job listing</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€99</span>
                    <span className="text-foreground/70"> /month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>30-day job listing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Standard search visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Email applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>1 job posting</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Standard Plan */}
              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Standard</CardTitle>
                      <CardDescription>Enhanced visibility and features</CardDescription>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Most Popular
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€199</span>
                    <span className="text-foreground/70"> /month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>45-day job listing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Featured in category for 7 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Email + Worklynx applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Detailed analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Social media promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>3 job postings</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Premium Plan */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Maximum visibility and premium features</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€349</span>
                    <span className="text-foreground/70"> /month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>60-day job listing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Featured on homepage for 14 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Top of search results for 30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Email + Worklynx applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Advanced analytics and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Social media + newsletter promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Candidate matching service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>10 job postings</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="annual" className="mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Basic Plan Annual */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>Essential visibility for your job listing</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€79</span>
                    <span className="text-foreground/70"> /month</span>
                  </div>
                  <p className="mt-1 text-xs text-foreground/70">Billed annually (€948/year)</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>30-day job listing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Standard search visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Email applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Basic analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>1 job posting</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Standard Plan Annual */}
              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Standard</CardTitle>
                      <CardDescription>Enhanced visibility and features</CardDescription>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Most Popular
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€159</span>
                    <span className="text-foreground/70"> /month</span>
                  </div>
                  <p className="mt-1 text-xs text-foreground/70">Billed annually (€1,908/year)</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>45-day job listing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Featured in category for 7 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Email + WORKLYNX applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Detailed analytics dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Social media promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>3 job postings</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>

              {/* Premium Plan Annual */}
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>Maximum visibility and premium features</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">€279</span>
                    <span className="text-foreground/70"> /month</span>
                  </div>
                  <p className="mt-1 text-xs text-foreground/70">Billed annually (€3,348/year)</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>60-day job listing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Featured on homepage for 14 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Top of search results for 30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Email + Worklynx applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Advanced analytics and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Social media + newsletter promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>Candidate matching service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>10 job postings</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Features Comparison */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-center">Compare Features</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 text-left font-medium">Feature</th>
                <th className="py-4 text-center font-medium">Basic</th>
                <th className="py-4 text-center font-medium">Standard</th>
                <th className="py-4 text-center font-medium">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4">Job listing duration</td>
                <td className="py-4 text-center">30 days</td>
                <td className="py-4 text-center">45 days</td>
                <td className="py-4 text-center">60 days</td>
              </tr>
              <tr className="border-b">
                <td className="py-4">Number of job postings</td>
                <td className="py-4 text-center">1</td>
                <td className="py-4 text-center">3</td>
                <td className="py-4 text-center">10</td>
              </tr>
              <tr className="border-b">
                <td className="py-4">Featured placement</td>
                <td className="py-4 text-center">—</td>
                <td className="py-4 text-center">Category (7 days)</td>
                <td className="py-4 text-center">Homepage (14 days)</td>
              </tr>
              <tr className="border-b">
                <td className="py-4">Application methods</td>
                <td className="py-4 text-center">Email only</td>
                <td className="py-4 text-center">Email + Worklynx</td>
                <td className="py-4 text-center">Email + Worklynx</td>
              </tr>
              <tr className="border-b">
                <td className="py-4">Analytics</td>
                <td className="py-4 text-center">Basic</td>
                <td className="py-4 text-center">Detailed</td>
                <td className="py-4 text-center">Advanced</td>
              </tr>
              <tr className="border-b">
                <td className="py-4">Promotion</td>
                <td className="py-4 text-center">—</td>
                <td className="py-4 text-center">Social media</td>
                <td className="py-4 text-center">Social media + Newsletter</td>
              </tr>
              <tr className="border-b">
                <td className="py-4">Candidate matching</td>
                <td className="py-4 text-center">—</td>
                <td className="py-4 text-center">—</td>
                <td className="py-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-primary" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4">Priority support</td>
                <td className="py-4 text-center">—</td>
                <td className="py-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-primary" />
                </td>
                <td className="py-4 text-center">
                  <Check className="mx-auto h-5 w-5 text-primary" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-center">Frequently Asked Questions</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              question: "Can I upgrade my plan later?",
              answer:
                "Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing period.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal and bank transfers for annual plans.",
            },
            {
              question: "Is there a refund policy?",
              answer:
                "We offer a 7-day money-back guarantee if you're not satisfied with our service. After that, refunds are considered on a case-by-case basis.",
            },
            {
              question: "Can I post multiple jobs with one account?",
              answer:
                "Yes, depending on your plan. The Basic plan includes 1 job posting, Standard includes 3, and Premium includes 10 job postings.",
            },
            {
              question: "How do I cancel my subscription?",
              answer:
                "You can cancel your subscription at any time from your account settings. Your plan will remain active until the end of your current billing period.",
            },
            {
              question: "Do you offer discounts for non-profits or startups?",
              answer:
                "Yes, we offer special pricing for non-profit organizations and early-stage startups. Please contact our sales team for more information.",
            },
          ].map((faq, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-2">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-medium">{faq.question}</h3>
                    <p className="mt-2 text-sm text-foreground/80">{faq.answer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-xl border bg-card p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to start hiring?</h2>
          <p className="mt-4 text-foreground/80">
            Join hundreds of companies in Lithuania who trust Worklynx to find their next great hire.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
