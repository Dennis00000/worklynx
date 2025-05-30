import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, Building, Globe, Award, CheckCircle, ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-blue-gradient.png"
            alt="About hero background"
            fill
            priority
            className="object-cover opacity-10"
          />
        </div>

        <div className="container relative z-10 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About <span className="text-primary">Worklynx</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/90 md:text-xl">
              Connecting talented professionals with leading employers across Lithuania
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
          <p className="mt-6 text-lg text-foreground/80">
            At Worklynx, our mission is to transform the Lithuanian job market by creating meaningful connections
            between employers and job seekers. We're dedicated to helping companies find the perfect talent while
            empowering professionals to build fulfilling careers.
          </p>
          <p className="mt-4 text-lg text-foreground/80">
            We believe that the right job is more than just a paycheck—it's an opportunity for growth, purpose, and
            impact. That's why we've built a platform that goes beyond traditional job boards to create a comprehensive
            ecosystem for career development and talent acquisition.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <div className="mt-6 space-y-4 text-foreground/80">
                <p>
                  Worklynx was founded in 2022 by a team of HR professionals and tech entrepreneurs who recognized the
                  need for a modern, user-friendly job platform specifically designed for the Lithuanian market.
                </p>
                <p>
                  Having experienced the challenges of recruitment and job searching firsthand, our founders set out to
                  create a solution that would address the unique needs of both employers and job seekers in Lithuania.
                </p>
                <p>
                  What began as a small startup has quickly grown into the country's leading job platform, connecting
                  thousands of professionals with their dream jobs and helping companies build strong teams that drive
                  success.
                </p>
                <p>
                  Today, Worklynx continues to innovate and expand, with a focus on leveraging technology to make the
                  hiring process more efficient, transparent, and effective for everyone involved.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-xl">
              <Image src="/diverse-office-team.png" alt="WORKLYNX team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight">Worklynx by the Numbers</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-2xl font-bold">15,000+</h3>
              <p className="text-foreground/80">Active Job Listings</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-2xl font-bold">2,500+</h3>
              <p className="text-foreground/80">Registered Companies</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-2xl font-bold">100,000+</h3>
              <p className="text-foreground/80">Registered Job Seekers</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-2xl font-bold">25,000+</h3>
              <p className="text-foreground/80">Successful Placements</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight">Our Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Transparency</h3>
              <p className="mt-2 text-foreground/80">
                We believe in open, honest communication. From clear pricing to detailed job descriptions, we ensure
                everyone has the information they need to make informed decisions.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Community</h3>
              <p className="mt-2 text-foreground/80">
                We're building more than a platform—we're creating a community where professionals and employers can
                connect, learn, and grow together to strengthen the Lithuanian job market.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Innovation</h3>
              <p className="mt-2 text-foreground/80">
                We continuously evolve our platform with cutting-edge technology to provide the most effective,
                efficient, and enjoyable job search and recruitment experience possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight">Meet Our Team</h2>
        <p className="mt-4 text-center text-foreground/80">The passionate people behind WORKLYNX</p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Tomas Jankauskas",
              role: "Founder & CEO",
              image: "/professional-man-headshot.png",
              bio: "Former HR Director with 15+ years of experience in talent acquisition.",
            },
            {
              name: "Laura Kazlauskienė",
              role: "Chief Operating Officer",
              image: "/professional-woman-headshot.png",
              bio: "Tech industry veteran with expertise in scaling operations and team building.",
            },
            {
              name: "Marius Petrauskas",
              role: "CTO",
              image: "/professional-man-tech-headshot.png",
              bio: "Software engineer and architect with a passion for creating intuitive user experiences.",
            },
            {
              name: "Greta Stankevičiūtė",
              role: "Head of Marketing",
              image: "/professional-woman-marketing-headshot.png",
              bio: "Digital marketing strategist specializing in growth and brand development.",
            },
          ].map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-medium">{member.name}</h3>
              <p className="text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-foreground/80">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/careers">
            <Button variant="outline" size="lg" className="gap-2">
              Join Our Team
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-center text-3xl font-bold tracking-tight">What People Say About Us</h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Worklynx helped me find my dream job in just two weeks. The platform is intuitive and the job recommendations were spot on.",
                author: "Milda Kazlauskaitė",
                position: "UX Designer at TechVibe",
              },
              {
                quote:
                  "As an employer, Worklynx has transformed our recruitment process. We've found exceptional talent quickly and efficiently.",
                author: "Jonas Petrauskas",
                position: "HR Director at CloudNine",
              },
              {
                quote:
                  "The career resources and support provided by Worklynx were invaluable during my job search after relocating to Lithuania.",
                author: "Thomas Berg",
                position: "Software Engineer at DataFlow",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-lg italic text-foreground/90">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-foreground/70">{testimonial.position}</p>
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
              Ready to join the Worklynx community?
            </h2>
            <p className="mt-4 text-foreground/90 md:text-lg">
              Whether you're looking for your next career opportunity or searching for top talent, Worklynx is here to
              help.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/auth/sign-up">
                <Button size="lg" className="w-full sm:w-auto">
                  Create an Account
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
