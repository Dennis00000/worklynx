"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Check, CreditCard, Briefcase, DollarSign, MapPin } from "lucide-react"

export default function PostJobPage() {
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Post a Job</h1>
          <p className="mt-2 text-foreground/80">Reach thousands of qualified candidates in Lithuania</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { step: 1, title: "Company" },
              { step: 2, title: "Job Details" },
              { step: 3, title: "Preview" },
              { step: 4, title: "Payment" },
            ].map((item) => (
              <div key={item.step} className="flex flex-1 flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    step === item.step
                      ? "border-primary bg-primary text-primary-foreground"
                      : step > item.step
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-muted-foreground/30 text-muted-foreground"
                  }`}
                >
                  {step > item.step ? <Check className="h-5 w-5" /> : <span>{item.step}</span>}
                </div>
                <span
                  className={`mt-2 text-xs ${
                    step === item.step ? "font-medium text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.title}
                </span>

                {item.step < 4 && (
                  <div
                    className={`mt-2 h-[2px] w-full flex-1 ${
                      step > item.step ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Company Information */}
        {step === 1 && (
          <div className="animate-in">
            <Card>
              <CardHeader>
                <CardTitle>Company Information</CardTitle>
                <CardDescription>Tell us about your company</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="Enter your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-website">Company Website</Label>
                  <Input id="company-website" placeholder="https://yourcompany.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-size">Company Size</Label>
                  <Select>
                    <SelectTrigger id="company-size">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-industry">Industry</Label>
                  <Select>
                    <SelectTrigger id="company-industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-description">Company Description</Label>
                  <Textarea
                    id="company-description"
                    placeholder="Tell potential candidates about your company"
                    rows={5}
                  />
                  <p className="text-xs text-foreground/70">
                    Briefly describe your company, culture, and what makes it a great place to work.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company-logo">Company Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-md border bg-muted"></div>
                    <Button variant="outline" type="button">
                      Upload Logo
                    </Button>
                  </div>
                  <p className="text-xs text-foreground/70">Upload a square logo (PNG or JPG, max 2MB)</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" disabled>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={nextStep}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Step 2: Job Details */}
        {step === 2 && (
          <div className="animate-in">
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
                <CardDescription>Provide information about the position</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" placeholder="e.g. Frontend Developer" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="job-type">Job Type</Label>
                    <Select>
                      <SelectTrigger id="job-type">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                        <SelectItem value="temporary">Temporary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience-level">Experience Level</Label>
                    <Select>
                      <SelectTrigger id="experience-level">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="mid">Mid Level</SelectItem>
                        <SelectItem value="senior">Senior Level</SelectItem>
                        <SelectItem value="director">Director</SelectItem>
                        <SelectItem value="executive">Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vilnius">Vilnius</SelectItem>
                        <SelectItem value="kaunas">Kaunas</SelectItem>
                        <SelectItem value="klaipeda">Klaipėda</SelectItem>
                        <SelectItem value="siauliai">Šiauliai</SelectItem>
                        <SelectItem value="panevezys">Panevėžys</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Work Model</Label>
                    <RadioGroup defaultValue="onsite">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="onsite" id="onsite" />
                        <Label htmlFor="onsite" className="font-normal">
                          On-site
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="hybrid" />
                        <Label htmlFor="hybrid" className="font-normal">
                          Hybrid
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="remote" id="remote" />
                        <Label htmlFor="remote" className="font-normal">
                          Remote
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Salary Range</Label>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="min-salary" className="text-xs">
                        Minimum
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/70">€</span>
                        <Input id="min-salary" className="pl-7" placeholder="e.g. 2500" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="max-salary" className="text-xs">
                        Maximum
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/70">€</span>
                        <Input id="max-salary" className="pl-7" placeholder="e.g. 3500" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <Checkbox id="hide-salary" />
                    <label
                      htmlFor="hide-salary"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Hide salary from job listing
                    </label>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="job-description">Job Description</Label>
                  <Textarea
                    id="job-description"
                    placeholder="Describe the role, responsibilities, and ideal candidate"
                    rows={8}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    placeholder="List the skills, qualifications, and experience required"
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Benefits</Label>
                  <Textarea
                    id="benefits"
                    placeholder="Describe the benefits and perks offered with this position"
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Application Method</Label>
                  <RadioGroup defaultValue="email">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email" className="font-normal">
                        Email
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="website" id="website" />
                      <Label htmlFor="website" className="font-normal">
                        External Website
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="worklynx" id="worklynx" />
                      <Label htmlFor="worklynx" className="font-normal">
                        WORKLYNX Application Form
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="application-email">Application Email</Label>
                  <Input id="application-email" placeholder="careers@yourcompany.com" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={nextStep}>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Step 3: Preview */}
        {step === 3 && (
          <div className="animate-in">
            <Card>
              <CardHeader>
                <CardTitle>Preview Your Job Listing</CardTitle>
                <CardDescription>Review your job listing before proceeding to payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border bg-card">
                  <div className="p-6">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border bg-muted">
                        {/* Company logo would go here */}
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col gap-2">
                          <h1 className="text-2xl font-bold tracking-tight">Frontend Developer</h1>
                          <div className="flex items-center gap-2">
                            <span className="text-foreground/80">TechVibe</span>
                          </div>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                            <div className="flex items-center gap-1 text-sm text-foreground/80">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>Vilnius, Lithuania</span>
                            </div>

                            <div className="flex items-center gap-1 text-sm text-foreground/80">
                              <Briefcase className="h-4 w-4 text-primary" />
                              <span>Full-time</span>
                            </div>

                            <div className="flex items-center gap-1 text-sm text-foreground/80">
                              <DollarSign className="h-4 w-4 text-primary" />
                              <span>€2,500 - €3,500 / month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h2 className="mb-4 text-xl font-semibold">Job Description</h2>
                        <div className="prose prose-sm max-w-none dark:prose-invert">
                          <p>
                            We are looking for a Frontend Developer to join our growing team in Vilnius. As a Frontend
                            Developer, you will be responsible for building high-quality, scalable web applications
                            using modern technologies.
                          </p>

                          <h3>Responsibilities:</h3>
                          <ul>
                            <li>Develop new user-facing features using React.js</li>
                            <li>Build reusable components and libraries for future use</li>
                            <li>Translate designs and wireframes into high-quality code</li>
                            <li>Optimize applications for maximum speed and scalability</li>
                          </ul>

                          <h3>Requirements:</h3>
                          <ul>
                            <li>2+ years of experience with React.js</li>
                            <li>Strong proficiency in JavaScript and TypeScript</li>
                            <li>Experience with responsive design</li>
                            <li>Familiarity with RESTful APIs</li>
                          </ul>

                          <h3>Benefits:</h3>
                          <ul>
                            <li>Competitive salary</li>
                            <li>Flexible working hours</li>
                            <li>Health insurance</li>
                            <li>Professional development budget</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-3 text-lg font-medium">About the Company</h3>
                        <p className="text-foreground/80">
                          TechVibe is a leading tech company specializing in innovative web and mobile solutions. We
                          work with clients across Europe to deliver cutting-edge digital products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={nextStep}>
                  Continue to Payment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}

        {/* Step 4: Payment */}
        {step === 4 && (
          <div className="animate-in">
            <Card>
              <CardHeader>
                <CardTitle>Choose a Plan</CardTitle>
                <CardDescription>Select the best option for your hiring needs</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="standard">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="basic">Basic</TabsTrigger>
                    <TabsTrigger value="standard">Standard</TabsTrigger>
                    <TabsTrigger value="premium">Premium</TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="pt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Basic Plan</CardTitle>
                        <CardDescription>Essential visibility for your job listing</CardDescription>
                        <div className="mt-1 text-3xl font-bold">€99</div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>30-day listing</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Standard search visibility</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Email applications</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Basic analytics</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Select Basic Plan</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="standard" className="pt-4">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle>Standard Plan</CardTitle>
                            <CardDescription>Enhanced visibility and features</CardDescription>
                            <div className="mt-1 text-3xl font-bold">€199</div>
                          </div>
                          <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Most Popular
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>45-day listing</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Featured in category for 7 days</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Email + WORKLYNX applications</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Detailed analytics dashboard</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Social media promotion</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Select Standard Plan</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>

                  <TabsContent value="premium" className="pt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Premium Plan</CardTitle>
                        <CardDescription>Maximum visibility and premium features</CardDescription>
                        <div className="mt-1 text-3xl font-bold">€349</div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>60-day listing</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Featured on homepage for 14 days</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Top of search results for 30 days</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Email + WORKLYNX applications</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Advanced analytics and reporting</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Social media + newsletter promotion</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>Candidate matching service</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Select Premium Plan</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-medium">Payment Information</h3>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-8 w-8 text-primary" />
                      <div>
                        <p className="font-medium">Credit or Debit Card</p>
                        <p className="text-sm text-foreground/80">We accept Visa, Mastercard, and American Express</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="name">Name on Card</Label>
                        <Input id="name" placeholder="John Smith" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button>Complete Payment</Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
