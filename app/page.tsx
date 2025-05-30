import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import JobSearchForm from "@/components/job-search-form"
import FeaturedJobs from "@/components/featured-jobs"
import StatsSection from "@/components/stats-section"
import { ArrowRight, Briefcase, Building, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-blue-gradient.png"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-10"
          />
        </div>

        <div className="container relative z-10 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
              Find Your Dream Job in <span className="text-primary">Lithuania</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/90 md:text-xl">
              Connect with top employers and discover opportunities that match your skills and career goals.
            </p>

            <div className="mt-10">
              <JobSearchForm className="mx-auto max-w-4xl" />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-foreground/80">
              <span>Popular searches:</span>
              <Link
                href="/jobs?keyword=developer"
                className="rounded-full border px-3 py-1 hover:border-primary hover:text-primary"
              >
                Developer
              </Link>
              <Link
                href="/jobs?keyword=designer"
                className="rounded-full border px-3 py-1 hover:border-primary hover:text-primary"
              >
                Designer
              </Link>
              <Link
                href="/jobs?keyword=marketing"
                className="rounded-full border px-3 py-1 hover:border-primary hover:text-primary"
              >
                Marketing
              </Link>
              <Link
                href="/jobs?keyword=remote"
                className="rounded-full border px-3 py-1 hover:border-primary hover:text-primary"
              >
                Remote
              </Link>
              <Link
                href="/jobs?keyword=part-time"
                className="rounded-full border px-3 py-1 hover:border-primary hover:text-primary"
              >
                Part-time
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container">
        <StatsSection />
      </section>

      {/* Featured Jobs Section */}
      <section className="container">
        <FeaturedJobs />
        <div className="mt-8 text-center">
          <Link href="/jobs">
            <Button variant="outline" size="lg" className="gap-2">
              Browse All Jobs
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Popular Job Categories</h2>
            <p className="mt-2 text-foreground/80">Explore opportunities across various industries</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Technology", icon: "💻", count: 842 },
              { name: "Marketing", icon: "📊", count: 354 },
              { name: "Design", icon: "🎨", count: 218 },
              { name: "Finance", icon: "💰", count: 195 },
              { name: "Healthcare", icon: "🏥", count: 167 },
              { name: "Education", icon: "🎓", count: 143 },
              { name: "Sales", icon: "📈", count: 321 },
              { name: "Customer Service", icon: "🤝", count: 265 },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/jobs?category=${category.name.toLowerCase()}`}
                className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <div className="mb-3 text-3xl">{category.icon}</div>
                <h3 className="font-medium text-foreground group-hover:text-primary">{category.name}</h3>
                <p className="mt-1 text-sm text-foreground/80">{category.count} jobs available</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted/50">
        <div className="container py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">How Worklynx Works</h2>
            <p className="mt-2 text-foreground/80">Simple steps to find your next career opportunity</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-foreground">1. Find Jobs</h3>
              <p className="mt-2 text-foreground/80">
                Search and filter through thousands of opportunities to find the perfect match for your skills and
                experience.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-foreground">2. Apply with Ease</h3>
              <p className="mt-2 text-foreground/80">
                Create your profile once and apply to multiple jobs with just a few clicks, tracking your applications
                as you go.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-foreground">3. Get Hired</h3>
              <p className="mt-2 text-foreground/80">
                Connect directly with employers, schedule interviews, and land your dream job in Lithuania's top
                companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="rounded-xl border bg-card p-8 md:p-12 lg:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to take the next step in your career?
            </h2>
            <p className="mt-4 text-foreground/90 md:text-lg">
              Join thousands of job seekers who have found their dream jobs through Worklynx.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/auth/sign-up">
                <Button size="lg" className="w-full sm:w-auto">
                  Create an Account
                </Button>
              </Link>
              <Link href="/jobs">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
