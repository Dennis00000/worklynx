import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Briefcase,
  Users,
  Coffee,
  GraduationCap,
  Heart,
  Globe,
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

// Sample job openings data
const jobOpenings = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Vilnius, Lithuania",
    type: "Full-time",
    remote: "Hybrid (2 days remote)",
    postedAt: "2 days ago",
  },
  {
    id: "2",
    title: "UX/UI Designer",
    department: "Design",
    location: "Vilnius, Lithuania",
    type: "Full-time",
    remote: "On-site",
    postedAt: "1 week ago",
  },
  {
    id: "3",
    title: "Content Marketing Specialist",
    department: "Marketing",
    location: "Remote, Lithuania",
    type: "Full-time",
    remote: "Remote",
    postedAt: "3 days ago",
  },
  {
    id: "4",
    title: "Customer Success Manager",
    department: "Customer Support",
    location: "Kaunas, Lithuania",
    type: "Full-time",
    remote: "Hybrid (3 days remote)",
    postedAt: "5 days ago",
  },
  {
    id: "5",
    title: "HR Coordinator",
    department: "People Operations",
    location: "Vilnius, Lithuania",
    type: "Full-time",
    remote: "On-site",
    postedAt: "1 day ago",
  },
  {
    id: "6",
    title: "Data Analyst Intern",
    department: "Data",
    location: "Vilnius, Lithuania",
    type: "Internship",
    remote: "On-site",
    postedAt: "4 days ago",
  },
]

// Employee testimonials data
const testimonials = [
  {
    quote:
      "Working at Worklynx. has been the highlight of my career. I'm challenged every day while still maintaining a healthy work-life balance.",
    name: "Tomas Kazlauskas",
    role: "Senior Developer",
    tenure: "2 years at Worklynx",
    image: "/tomas-kazlauskas-headshot.png",
  },
  {
    quote:
      "I love that I can directly see the impact of my work. Knowing we're helping people find jobs that improve their lives is incredibly rewarding.",
    name: "Ieva Petrauskienė",
    role: "Customer Success Manager",
    tenure: "1.5 years at Worklynx",
    image: "/ieva-petrauskiene-headshot.png",
  },
  {
    quote:
      "The growth opportunities here are amazing. I started as an intern and have been promoted twice in just over a year thanks to the mentorship and support.",
    name: "Lukas Jankauskas",
    role: "Marketing Specialist",
    tenure: "1 year at Worklynx",
    image: "/lukas-jankauskas-headshot.png",
  },
]

export default function CareersPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-blue-gradient.png"
            alt="Careers hero background"
            fill
            priority
            className="object-cover opacity-10"
          />
        </div>

        <div className="container relative z-10 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/90 md:text-xl">
              Help us transform the Lithuanian job market and build meaningful connections between talent and
              opportunity
            </p>
            <div className="mt-8">
              <Button size="lg" className="gap-2">
                View Open Positions
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Why Work With Us</h2>
          <p className="mt-6 text-lg text-foreground/80">
            At Worklynx, we're not just building a job platform—we're transforming how people find meaningful work and
            how companies build exceptional teams. Join us on this mission and be part of something bigger.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="bg-card">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Meaningful Impact</h3>
              <p className="mt-2 text-foreground/80">
                Your work directly helps thousands of people find jobs they love and companies build teams that drive
                success.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Growth & Learning</h3>
              <p className="mt-2 text-foreground/80">
                We invest in your development with learning budgets, mentorship programs, and clear career progression
                paths.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Collaborative Culture</h3>
              <p className="mt-2 text-foreground/80">
                Work alongside talented, passionate people in a supportive environment that values diverse perspectives.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Culture */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image src="/team-collaboration.png" alt="Worklynx team collaboration" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Culture</h2>
              <div className="mt-6 space-y-4 text-foreground/80">
                <p>
                  At Worklynx, we've built a culture that balances innovation with well-being. We believe that the best
                  work happens when talented people are empowered, supported, and challenged in the right ways.
                </p>
                <p>
                  We value transparency, open communication, and collaboration across all teams. Everyone's voice
                  matters, and we encourage sharing ideas regardless of role or seniority.
                </p>
                <p>
                  While we work hard to achieve our mission, we also prioritize work-life balance. Flexible working
                  arrangements, reasonable hours, and a focus on results rather than face time are core to how we
                  operate.
                </p>
                <p>
                  We celebrate diversity and are committed to creating an inclusive environment where everyone feels
                  welcome and can thrive professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight">Benefits & Perks</h2>
        <p className="mt-4 text-center text-foreground/80">
          We take care of our team so they can focus on doing their best work
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Comprehensive Health Insurance</h3>
              <p className="mt-1 text-sm text-foreground/80">
                Full medical, dental, and vision coverage for you and subsidized rates for dependents.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Flexible Time Off</h3>
              <p className="mt-1 text-sm text-foreground/80">
                Generous paid time off policy with additional days for volunteering and mental health.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Learning & Development</h3>
              <p className="mt-1 text-sm text-foreground/80">
                Annual learning budget for courses, conferences, books, and other educational resources.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Remote Work Options</h3>
              <p className="mt-1 text-sm text-foreground/80">
                Flexible work arrangements with hybrid and fully remote options depending on the role.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Coffee className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Office Perks</h3>
              <p className="mt-1 text-sm text-foreground/80">
                Modern office with standing desks, healthy snacks, coffee, and team lunches.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Wellness Program</h3>
              <p className="mt-1 text-sm text-foreground/80">
                Gym membership subsidies, wellness activities, and mental health resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight">Open Positions</h2>
          <p className="mt-4 text-center text-foreground/80">
            Join our team and help shape the future of work in Lithuania
          </p>

          <div className="mt-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="flex flex-wrap h-auto justify-center mb-8">
                <TabsTrigger value="all">All Departments</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="customer">Customer Support</TabsTrigger>
                <TabsTrigger value="people">People Operations</TabsTrigger>
              </TabsList>

              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <Card key={job.id} className="overflow-hidden transition-all hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-xl">{job.title}</h3>
                            <Badge variant="outline" className="ml-2">
                              {job.department}
                            </Badge>
                          </div>

                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                            <div className="flex items-center gap-1 text-sm text-foreground/80">
                              <MapPin className="h-4 w-4 text-primary/80" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-foreground/80">
                              <Briefcase className="h-4 w-4 text-primary/80" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-foreground/80">
                              <Globe className="h-4 w-4 text-primary/80" />
                              <span>{job.remote}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-foreground/80">
                              <Clock className="h-4 w-4 text-primary/80" />
                              <span>Posted {job.postedAt}</span>
                            </div>
                          </div>
                        </div>

                        <Button>Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Tabs>
          </div>

          <div className="mt-8 text-center text-foreground/80">
            <p>Don't see a position that matches your skills?</p>
            <Link href="/careers/general-application" className="mt-4 inline-block">
              <Button variant="outline">Submit a General Application</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight">Our Application Process</h2>
        <p className="mt-4 text-center text-foreground/80">What to expect when you apply to join Worklynx</p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-lg font-bold">1</span>
            </div>
            <h3 className="mt-4 text-xl font-medium">Application Review</h3>
            <p className="mt-2 text-foreground/80">
              Our recruitment team reviews your application and resume, typically within 1-2 weeks.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-lg font-bold">2</span>
            </div>
            <h3 className="mt-4 text-xl font-medium">Initial Interview</h3>
            <p className="mt-2 text-foreground/80">
              A 30-45 minute video call with a recruiter to discuss your experience and interest in Worklynx.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-lg font-bold">3</span>
            </div>
            <h3 className="mt-4 text-xl font-medium">Skills Assessment</h3>
            <p className="mt-2 text-foreground/80">
              Depending on the role, you may complete a take-home assignment or technical interview.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="text-lg font-bold">4</span>
            </div>
            <h3 className="mt-4 text-xl font-medium">Final Interviews</h3>
            <p className="mt-2 text-foreground/80">
              Meet with team members and leadership to ensure mutual fit before we make an offer.
            </p>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight">Life at Worklynx</h2>
          <p className="mt-4 text-center text-foreground/80">Hear from the people who work here</p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/10 shadow-lg">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-6 text-lg italic text-foreground/90">"{testimonial.quote}"</p>
                    <div className="mt-4">
                      <p className="font-medium text-lg">{testimonial.name}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                      <p className="text-xs text-foreground/70 mt-1">{testimonial.tenure}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="rounded-xl border bg-card p-8 md:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to grow your career with us?
            </h2>
            <p className="mt-4 text-foreground/90 md:text-lg">
              Join our team and be part of transforming how people find meaningful work in Lithuania.
            </p>
            <div className="mt-8">
              <Button size="lg" className="gap-2">
                Explore Open Positions
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
