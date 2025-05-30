import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Clock,
  Briefcase,
  Calendar,
  DollarSign,
  Users,
  GraduationCap,
  Globe,
  Share2,
  Bookmark,
  Flag,
} from "lucide-react"

// This would normally come from a database
const jobDetails = {
  id: "1",
  title: "Senior Frontend Developer",
  company: {
    id: "techvibe",
    name: "TechVibe",
    logo: "/retro-living-room-tv.png",
    website: "https://techvibe.lt",
    location: "Vilnius, Lithuania",
    employees: "50-100",
    description:
      "TechVibe is a leading tech company specializing in innovative web and mobile solutions. We work with clients across Europe to deliver cutting-edge digital products.",
  },
  location: "Vilnius, Lithuania",
  locationType: "Hybrid (2 days remote)",
  salary: "€3,500 - €4,500 / month",
  jobType: "Full-time",
  postedAt: "May 16, 2025",
  experience: "3-5 years",
  education: "Bachelor's degree in Computer Science or related field",
  skills: ["React", "TypeScript", "Next.js", "CSS/SCSS", "REST APIs", "GraphQL", "Git"],
  description: `
    <p>We are looking for a Senior Frontend Developer to join our growing team in Vilnius. As a Senior Frontend Developer, you will be responsible for building high-quality, scalable web applications using modern technologies.</p>
    
    <h3>Responsibilities:</h3>
    <ul>
      <li>Develop new user-facing features using React.js and related technologies</li>
      <li>Build reusable components and libraries for future use</li>
      <li>Translate designs and wireframes into high-quality code</li>
      <li>Optimize applications for maximum speed and scalability</li>
      <li>Collaborate with back-end developers and designers</li>
      <li>Participate in code reviews and mentor junior developers</li>
    </ul>
    
    <h3>Requirements:</h3>
    <ul>
      <li>3+ years of experience with React.js and modern JavaScript (ES6+)</li>
      <li>Strong proficiency in TypeScript</li>
      <li>Experience with Next.js and server-side rendering</li>
      <li>Thorough understanding of responsive design and cross-browser compatibility</li>
      <li>Familiarity with RESTful APIs and GraphQL</li>
      <li>Experience with state management (Redux, Context API, etc.)</li>
      <li>Knowledge of modern authorization mechanisms</li>
      <li>Proficient understanding of code versioning tools such as Git</li>
      <li>Good communication skills and ability to work in a team</li>
    </ul>
    
    <h3>Benefits:</h3>
    <ul>
      <li>Competitive salary and performance bonuses</li>
      <li>Flexible working hours and hybrid work model</li>
      <li>Health insurance</li>
      <li>Professional development budget</li>
      <li>Modern office in central Vilnius</li>
      <li>Team building events and activities</li>
      <li>Relaxed and friendly work environment</li>
    </ul>
  `,
  featured: true,
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <Link href="/jobs" className="text-sm text-muted-foreground hover:text-primary">
          ← Back to jobs
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-card">
            {/* Job Header */}
            <div className="p-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border">
                  <Image
                    src={jobDetails.company.logo || "/placeholder.svg"}
                    alt={jobDetails.company.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h1 className="text-2xl font-bold tracking-tight">{jobDetails.title}</h1>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Share2 className="h-4 w-4" />
                          <span className="sr-only">Share job</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Bookmark className="h-4 w-4" />
                          <span className="sr-only">Save job</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Flag className="h-4 w-4" />
                          <span className="sr-only">Report job</span>
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/companies/${jobDetails.company.id}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {jobDetails.company.name}
                      </Link>
                      {jobDetails.featured && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{jobDetails.location}</span>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span>{jobDetails.jobType}</span>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>{jobDetails.salary}</span>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Posted on {jobDetails.postedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Job Content */}
            <div className="p-6">
              <Tabs defaultValue="description">
                <TabsList className="mb-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="company">Company</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Experience</p>
                          <p className="text-sm text-muted-foreground">{jobDetails.experience}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Education</p>
                          <p className="text-sm text-muted-foreground">{jobDetails.education}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="mb-4 text-xl font-semibold">Job Description</h2>
                    <div
                      className="prose prose-sm max-w-none dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: jobDetails.description }}
                    />
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {jobDetails.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="company" className="space-y-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={jobDetails.company.logo || "/placeholder.svg"}
                        alt={jobDetails.company.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold">{jobDetails.company.name}</h2>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{jobDetails.company.location}</span>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{jobDetails.company.employees} employees</span>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Globe className="h-4 w-4" />
                          <Link
                            href={jobDetails.company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary"
                          >
                            {jobDetails.company.website.replace("https://", "")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium">About the company</h3>
                    <p className="text-muted-foreground">{jobDetails.company.description}</p>
                  </div>

                  <div>
                    <Link href={`/companies/${jobDetails.company.id}`}>
                      <Button variant="outline">View Company Profile</Button>
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Apply for this job</h2>
              <div className="space-y-4">
                <Button className="w-full">Apply Now</Button>
                <Button variant="outline" className="w-full">
                  Save Job
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                By applying, you agree to our terms and conditions and privacy policy.
              </p>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-4 text-lg font-semibold">Similar Jobs</h2>
              <div className="space-y-4">
                {[
                  { id: "2", title: "Frontend Developer", company: "WebSolutions", location: "Vilnius" },
                  { id: "3", title: "React Developer", company: "AppWorks", location: "Remote" },
                  { id: "4", title: "UI Engineer", company: "DigitalCraft", location: "Kaunas" },
                ].map((job) => (
                  <div key={job.id} className="rounded-md border p-3">
                    <h3 className="font-medium">
                      <Link href={`/jobs/${job.id}`} className="hover:text-primary">
                        {job.title}
                      </Link>
                    </h3>
                    <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
