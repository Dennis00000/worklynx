import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Users,
  Globe,
  Briefcase,
  Clock,
  DollarSign,
  Building,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react"

// Sample company data
const companyData = {
  id: "techvibe",
  name: "TechVibe",
  logo: "/retro-living-room-tv.png",
  coverImage: "/abstract-blue-gradient.png",
  industry: "Technology",
  location: "Vilnius, Lithuania",
  founded: "2015",
  employees: "50-100",
  website: "https://techvibe.lt",
  email: "careers@techvibe.lt",
  phone: "+370 5 123 4567",
  socialMedia: {
    linkedin: "https://linkedin.com/company/techvibe",
    facebook: "https://facebook.com/techvibe",
    twitter: "https://twitter.com/techvibe",
  },
  description: `
    <p>TechVibe is a leading tech company specializing in innovative web and mobile solutions. We work with clients across Europe to deliver cutting-edge digital products.</p>
    
    <p>Founded in 2015, we've grown from a small team of passionate developers to a mid-sized company with expertise in various technologies and domains. Our mission is to help businesses transform their ideas into successful digital products.</p>
    
    <p>We believe in a collaborative approach, working closely with our clients to understand their needs and deliver solutions that exceed expectations. Our team consists of talented developers, designers, and product managers who are passionate about creating exceptional user experiences.</p>
  `,
  culture: `
    <p>At TechVibe, we foster a culture of innovation, collaboration, and continuous learning. We believe that the best ideas come from diverse perspectives and open communication.</p>
    
    <p>Our work environment is designed to be flexible and supportive, allowing our team members to grow both professionally and personally. We offer remote work options, flexible hours, and a focus on work-life balance.</p>
    
    <p>We regularly organize team-building activities, knowledge-sharing sessions, and hackathons to keep our team engaged and inspired. We also encourage our employees to participate in conferences, workshops, and other professional development opportunities.</p>
  `,
  benefits: [
    "Competitive salary and performance bonuses",
    "Flexible working hours and hybrid work model",
    "Health insurance",
    "Professional development budget",
    "Modern office in central Vilnius",
    "Team building events and activities",
    "Relaxed and friendly work environment",
    "Career growth opportunities",
  ],
  openPositions: [
    {
      id: "1",
      title: "Senior Frontend Developer",
      location: "Vilnius, Lithuania",
      type: "Full-time",
      salary: "€3,500 - €4,500 / month",
      postedAt: "2 days ago",
    },
    {
      id: "2",
      title: "Backend Developer",
      location: "Vilnius, Lithuania",
      type: "Full-time",
      salary: "€3,200 - €4,200 / month",
      postedAt: "1 week ago",
    },
    {
      id: "3",
      title: "UX/UI Designer",
      location: "Remote, Lithuania",
      type: "Full-time",
      salary: "€2,800 - €3,500 / month",
      postedAt: "3 days ago",
    },
    {
      id: "4",
      title: "Project Manager",
      location: "Vilnius, Lithuania",
      type: "Full-time",
      salary: "€3,000 - €4,000 / month",
      postedAt: "5 days ago",
    },
    {
      id: "5",
      title: "DevOps Engineer",
      location: "Vilnius, Lithuania",
      type: "Full-time",
      salary: "€3,800 - €4,800 / month",
      postedAt: "1 day ago",
    },
  ],
}

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      {/* Company Header */}
      <div className="relative h-48 w-full overflow-hidden md:h-64">
        <Image
          src={companyData.coverImage || "/placeholder.svg"}
          alt={`${companyData.name} cover`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative -mt-20 pb-12">
        <div className="flex flex-col items-start gap-6 sm:flex-row">
          <div className="relative h-32 w-32 overflow-hidden rounded-xl border-4 border-background bg-background">
            <Image src={companyData.logo || "/placeholder.svg"} alt={companyData.name} fill className="object-cover" />
          </div>

          <div className="flex flex-1 flex-col justify-end">
            <h1 className="text-3xl font-bold tracking-tight">{companyData.name}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-1 text-sm text-foreground/80">
                <Building className="h-4 w-4 text-primary" />
                <span>{companyData.industry}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-foreground/80">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{companyData.location}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-foreground/80">
                <Users className="h-4 w-4 text-primary" />
                <span>{companyData.employees} employees</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:mt-0 sm:items-end">
            <Button>Follow Company</Button>
            <Link href={`/companies/${params.id}/jobs`}>
              <Button variant="outline">View All Jobs</Button>
            </Link>
          </div>
        </div>

        {/* Company Content */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="mb-4">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="jobs">Open Positions</TabsTrigger>
                <TabsTrigger value="culture">Culture & Benefits</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <div dangerouslySetInnerHTML={{ __html: companyData.description }} />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Website</p>
                          <a
                            href={companyData.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-foreground/80 hover:text-primary"
                          >
                            {companyData.website.replace("https://", "")}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <a
                            href={`mailto:${companyData.email}`}
                            className="text-sm text-foreground/80 hover:text-primary"
                          >
                            {companyData.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <a
                            href={`tel:${companyData.phone}`}
                            className="text-sm text-foreground/80 hover:text-primary"
                          >
                            {companyData.phone}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm font-medium">Founded</p>
                          <p className="text-sm text-foreground/80">{companyData.founded}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Connect with {companyData.name}</h3>
                  <div className="flex gap-2">
                    <a
                      href={companyData.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border p-2 text-foreground/80 hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href={companyData.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border p-2 text-foreground/80 hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a
                      href={companyData.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border p-2 text-foreground/80 hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="jobs" className="space-y-4">
                <h3 className="text-lg font-medium">Open Positions at {companyData.name}</h3>
                <div className="space-y-4">
                  {companyData.openPositions.map((job) => (
                    <Card key={job.id} className="overflow-hidden transition-all hover:border-primary/50">
                      <CardContent className="p-0">
                        <div className="p-4">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <h4 className="font-semibold text-foreground">
                              <Link href={`/jobs/${job.id}`} className="hover:text-primary">
                                {job.title}
                              </Link>
                            </h4>
                            <Badge variant="outline" className="w-fit">
                              {job.type}
                            </Badge>
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                            <div className="flex items-center gap-1 text-xs text-foreground/80">
                              <MapPin className="h-3.5 w-3.5 text-primary/80" />
                              <span>{job.location}</span>
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
                        </div>

                        <div className="flex items-center justify-end border-t p-2">
                          <Link href={`/jobs/${job.id}`}>
                            <Button variant="outline" size="sm">
                              View Job
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="culture" className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-medium">Company Culture</h3>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <div dangerouslySetInnerHTML={{ __html: companyData.culture }} />
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium">Benefits & Perks</h3>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {companyData.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="mt-1 rounded-full bg-primary/10 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-sm text-foreground/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium">Company Overview</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Industry</span>
                    <span className="text-sm font-medium">{companyData.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Company size</span>
                    <span className="text-sm font-medium">{companyData.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Founded</span>
                    <span className="text-sm font-medium">{companyData.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Location</span>
                    <span className="text-sm font-medium">{companyData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-foreground/80">Open positions</span>
                    <span className="text-sm font-medium">{companyData.openPositions.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium">Similar Companies</h3>
                <div className="mt-4 space-y-4">
                  {[
                    { id: "dataflow", name: "DataFlow", logo: "/abstract-df.png", openPositions: 4 },
                    { id: "cloudnine", name: "CloudNine", logo: "/abstract-geometric-cn.png", openPositions: 7 },
                    { id: "innovatelt", name: "InnovateLT", logo: "/abstract-il.png", openPositions: 3 },
                  ].map((company) => (
                    <div key={company.id} className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-md border">
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={company.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium">
                          <Link href={`/companies/${company.id}`} className="hover:text-primary">
                            {company.name}
                          </Link>
                        </h4>
                        <p className="text-xs text-foreground/80">{company.openPositions} open positions</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
