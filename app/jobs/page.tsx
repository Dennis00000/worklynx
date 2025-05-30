import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import JobCard, { type JobCardProps } from "@/components/job-card"
import { Search, MapPin, Filter, SlidersHorizontal } from "lucide-react"

// Sample data for job listings
const jobListings: JobCardProps[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: {
      name: "TechVibe",
      logo: "/retro-living-room-tv.png",
    },
    location: "Vilnius, Lithuania",
    salary: "€3,500 - €4,500 / month",
    jobType: "Full-time",
    postedAt: "2 days ago",
    featured: true,
  },
  {
    id: "2",
    title: "UX/UI Designer",
    company: {
      name: "Creative Solutions",
      logo: "/computer-science-concept.png",
    },
    location: "Kaunas, Lithuania",
    salary: "€2,800 - €3,500 / month",
    jobType: "Full-time",
    postedAt: "3 days ago",
    featured: true,
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: {
      name: "CloudNine",
      logo: "/abstract-geometric-cn.png",
    },
    location: "Remote, Lithuania",
    salary: "€3,800 - €4,800 / month",
    jobType: "Full-time",
    postedAt: "1 day ago",
    featured: true,
  },
  {
    id: "4",
    title: "Marketing Specialist",
    company: {
      name: "GrowthGenius",
      logo: "/intertwined-golden-initials.png",
    },
    location: "Klaipėda, Lithuania",
    salary: "€2,200 - €2,800 / month",
    jobType: "Full-time",
    postedAt: "5 days ago",
    featured: false,
  },
  {
    id: "5",
    title: "Backend Developer",
    company: {
      name: "DataFlow",
      logo: "/abstract-df.png",
    },
    location: "Vilnius, Lithuania",
    salary: "€3,200 - €4,200 / month",
    jobType: "Full-time",
    postedAt: "1 week ago",
    featured: false,
  },
  {
    id: "6",
    title: "Product Manager",
    company: {
      name: "InnovateLT",
      logo: "/abstract-il.png",
    },
    location: "Vilnius, Lithuania",
    salary: "€3,800 - €4,800 / month",
    jobType: "Full-time",
    postedAt: "2 weeks ago",
    featured: false,
  },
  {
    id: "7",
    title: "Customer Support Specialist",
    company: {
      name: "HelpDesk Pro",
      logo: "/abstract-hd.png",
    },
    location: "Remote, Lithuania",
    salary: "€1,800 - €2,300 / month",
    jobType: "Full-time",
    postedAt: "3 days ago",
    featured: false,
  },
  {
    id: "8",
    title: "Data Analyst",
    company: {
      name: "InsightMetrics",
      logo: "/abstract-geometric-IM.png",
    },
    location: "Kaunas, Lithuania",
    salary: "€2,500 - €3,200 / month",
    jobType: "Full-time",
    postedAt: "4 days ago",
    featured: false,
  },
]

export default function JobsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Find Jobs</h1>
        <p className="mt-2 text-muted-foreground">Browse through thousands of full-time and part-time jobs near you</p>
      </div>

      {/* Search Form */}
      <div className="mb-8 rounded-lg border bg-card p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="text" placeholder="Job title, keywords, or company" className="pl-10" />
          </div>

          <div className="relative md:col-span-3">
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="text" placeholder="City or region" className="pl-10" />
          </div>

          <div className="md:col-span-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Button className="w-full">Search Jobs</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg border bg-card">
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <h2 className="font-semibold">Filters</h2>
              </div>
              <Button variant="ghost" size="sm" className="h-8 text-xs">
                Reset All
              </Button>
            </div>

            <div className="p-4">
              <Accordion type="multiple" defaultValue={["jobType", "experience", "salary"]}>
                <AccordionItem value="jobType">
                  <AccordionTrigger className="py-3 text-sm">Job Type</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Full-time", "Part-time", "Contract", "Internship", "Remote"].map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox id={`job-type-${type.toLowerCase()}`} />
                          <label
                            htmlFor={`job-type-${type.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="experience">
                  <AccordionTrigger className="py-3 text-sm">Experience Level</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"].map((level) => (
                        <div key={level} className="flex items-center space-x-2">
                          <Checkbox id={`exp-${level.toLowerCase().replace(" ", "-")}`} />
                          <label
                            htmlFor={`exp-${level.toLowerCase().replace(" ", "-")}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="salary">
                  <AccordionTrigger className="py-3 text-sm">Salary Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <Slider defaultValue={[1500, 5000]} min={0} max={10000} step={100} />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">€1,500</span>
                        <span className="text-sm">€5,000</span>
                      </div>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Per month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="month">Per month</SelectItem>
                          <SelectItem value="year">Per year</SelectItem>
                          <SelectItem value="hour">Per hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="location">
                  <AccordionTrigger className="py-3 text-sm">Location</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Remote"].map((location) => (
                        <div key={location} className="flex items-center space-x-2">
                          <Checkbox id={`loc-${location.toLowerCase()}`} />
                          <label
                            htmlFor={`loc-${location.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {location}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="industry">
                  <AccordionTrigger className="py-3 text-sm">Industry</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Technology", "Finance", "Healthcare", "Education", "Marketing", "Retail"].map((industry) => (
                        <div key={industry} className="flex items-center space-x-2">
                          <Checkbox id={`ind-${industry.toLowerCase()}`} />
                          <label
                            htmlFor={`ind-${industry.toLowerCase()}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {industry}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">67</span> jobs
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="salary-high">Highest Salary</SelectItem>
                  <SelectItem value="salary-low">Lowest Salary</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" className="h-9 w-9 lg:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="sr-only">Filters</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {jobListings.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <Button variant="outline" size="icon" disabled>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="outline" className="h-9 w-9" disabled>
              1
            </Button>
            <Button variant="outline" className="h-9 w-9">
              2
            </Button>
            <Button variant="outline" className="h-9 w-9">
              3
            </Button>
            <Button variant="outline" className="h-9 w-9">
              4
            </Button>
            <Button variant="outline" className="h-9 w-9">
              5
            </Button>
            <Button variant="outline" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
