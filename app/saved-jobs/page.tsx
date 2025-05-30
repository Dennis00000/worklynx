import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Building, Clock, Briefcase, DollarSign, Trash2, Bell, BellOff } from "lucide-react"

// Sample saved jobs data
const savedJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: {
      id: "techvibe",
      name: "TechVibe",
      logo: "/retro-living-room-tv.png",
    },
    location: "Vilnius, Lithuania",
    salary: "€3,500 - €4,500 / month",
    jobType: "Full-time",
    postedAt: "2 days ago",
    savedAt: "Yesterday",
    alerts: true,
  },
  {
    id: "3",
    title: "DevOps Engineer",
    company: {
      id: "cloudnine",
      name: "CloudNine",
      logo: "/abstract-geometric-cn.png",
    },
    location: "Remote, Lithuania",
    salary: "€3,800 - €4,800 / month",
    jobType: "Full-time",
    postedAt: "1 day ago",
    savedAt: "2 days ago",
    alerts: false,
  },
  {
    id: "5",
    title: "Backend Developer",
    company: {
      id: "dataflow",
      name: "DataFlow",
      logo: "/abstract-df.png",
    },
    location: "Vilnius, Lithuania",
    salary: "€3,200 - €4,200 / month",
    jobType: "Full-time",
    postedAt: "1 week ago",
    savedAt: "5 days ago",
    alerts: true,
  },
]

// Sample job applications data
const jobApplications = [
  {
    id: "app1",
    jobId: "2",
    title: "UX/UI Designer",
    company: {
      id: "creative-solutions",
      name: "Creative Solutions",
      logo: "/computer-science-concept.png",
    },
    location: "Kaunas, Lithuania",
    appliedAt: "1 week ago",
    status: "In Review",
  },
  {
    id: "app2",
    jobId: "4",
    title: "Marketing Specialist",
    company: {
      id: "growth-genius",
      name: "GrowthGenius",
      logo: "/intertwined-golden-initials.png",
    },
    location: "Klaipėda, Lithuania",
    appliedAt: "2 weeks ago",
    status: "Interview Scheduled",
  },
  {
    id: "app3",
    jobId: "7",
    title: "Customer Support Specialist",
    company: {
      id: "helpdesk-pro",
      name: "HelpDesk Pro",
      logo: "/abstract-hd.png",
    },
    location: "Remote, Lithuania",
    appliedAt: "3 weeks ago",
    status: "Rejected",
  },
]

export default function SavedJobsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Jobs</h1>
        <p className="mt-2 text-foreground/80">Manage your saved jobs and applications</p>
      </div>

      <Tabs defaultValue="saved">
        <TabsList className="mb-6">
          <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="saved" className="space-y-6">
          {savedJobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium">No saved jobs yet</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Save jobs you're interested in to keep track of them here.
              </p>
              <Link href="/jobs" className="mt-4">
                <Button>Browse Jobs</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {savedJobs.map((job) => (
                <Card key={job.id} className="overflow-hidden transition-all hover:border-primary/50">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={job.company.logo || "/placeholder.svg"}
                            alt={job.company.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold leading-none tracking-tight text-foreground">
                              <Link href={`/jobs/${job.id}`} className="hover:text-primary">
                                {job.title}
                              </Link>
                            </h3>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-foreground/80 hover:text-primary"
                              >
                                {job.alerts ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                                <span className="sr-only">{job.alerts ? "Disable alerts" : "Enable alerts"}</span>
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-foreground/80 hover:text-destructive"
                              >
                                <Trash2 className="h-4 w-4" />
                                <span className="sr-only">Remove from saved</span>
                              </Button>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm">
                            <Building className="h-3.5 w-3.5 text-primary" />
                            <Link
                              href={`/companies/${job.company.id}`}
                              className="text-foreground/80 hover:text-primary"
                            >
                              {job.company.name}
                            </Link>
                          </div>

                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                            <div className="flex items-center gap-1 text-xs text-foreground/80">
                              <MapPin className="h-3.5 w-3.5 text-primary/80" />
                              <span>{job.location}</span>
                            </div>

                            <div className="flex items-center gap-1 text-xs text-foreground/80">
                              <Briefcase className="h-3.5 w-3.5 text-primary/80" />
                              <span>{job.jobType}</span>
                            </div>

                            <div className="flex items-center gap-1 text-xs text-foreground/80">
                              <DollarSign className="h-3.5 w-3.5 text-primary/80" />
                              <span>{job.salary}</span>
                            </div>

                            <div className="flex items-center gap-1 text-xs text-foreground/80">
                              <Clock className="h-3.5 w-3.5 text-primary/80" />
                              <span>Posted {job.postedAt}</span>
                            </div>
                          </div>

                          <div className="pt-2 text-xs text-foreground/70">Saved {job.savedAt}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 border-t p-4">
                      <Link href={`/jobs/${job.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                      <Link href={`/jobs/${job.id}/apply`}>
                        <Button size="sm">Apply Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="applications" className="space-y-6">
          {jobApplications.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-medium">No applications yet</h3>
              <p className="mt-2 text-sm text-foreground/80">
                When you apply for jobs, they will appear here so you can track your progress.
              </p>
              <Link href="/jobs" className="mt-4">
                <Button>Browse Jobs</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {jobApplications.map((application) => (
                <Card key={application.id} className="overflow-hidden transition-all hover:border-primary/50">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={application.company.logo || "/placeholder.svg"}
                            alt={application.company.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold leading-none tracking-tight text-foreground">
                              <Link href={`/jobs/${application.jobId}`} className="hover:text-primary">
                                {application.title}
                              </Link>
                            </h3>
                            <Badge
                              variant={
                                application.status === "Rejected"
                                  ? "destructive"
                                  : application.status === "Interview Scheduled"
                                    ? "default"
                                    : "secondary"
                              }
                              className="ml-2"
                            >
                              {application.status}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-2 text-sm">
                            <Building className="h-3.5 w-3.5 text-primary" />
                            <Link
                              href={`/companies/${application.company.id}`}
                              className="text-foreground/80 hover:text-primary"
                            >
                              {application.company.name}
                            </Link>
                          </div>

                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                            <div className="flex items-center gap-1 text-xs text-foreground/80">
                              <MapPin className="h-3.5 w-3.5 text-primary/80" />
                              <span>{application.location}</span>
                            </div>

                            <div className="flex items-center gap-1 text-xs text-foreground/80">
                              <Clock className="h-3.5 w-3.5 text-primary/80" />
                              <span>Applied {application.appliedAt}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 border-t p-4">
                      <Link href={`/jobs/${application.jobId}`}>
                        <Button variant="outline" size="sm">
                          View Job
                        </Button>
                      </Link>
                      <Link href={`/applications/${application.id}`}>
                        <Button size="sm">View Application</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Missing Heart component
function Heart(props: React.SVGProps<SVGSVGElement>) {
  return (
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
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
