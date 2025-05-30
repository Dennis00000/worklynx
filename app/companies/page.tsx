import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Building, Users, ArrowRight } from "lucide-react"

// Sample data for companies
const companies = [
  {
    id: "techvibe",
    name: "TechVibe",
    logo: "/retro-living-room-tv.png",
    industry: "Technology",
    location: "Vilnius, Lithuania",
    employees: "50-100",
    description: "Leading tech company specializing in innovative web and mobile solutions.",
    openPositions: 5,
  },
  {
    id: "creative-solutions",
    name: "Creative Solutions",
    logo: "/computer-science-concept.png",
    industry: "Design & Creative",
    location: "Kaunas, Lithuania",
    employees: "20-50",
    description: "Creative agency focused on branding, UX/UI design, and digital marketing.",
    openPositions: 3,
  },
  {
    id: "cloudnine",
    name: "CloudNine",
    logo: "/abstract-geometric-cn.png",
    industry: "Technology",
    location: "Remote, Lithuania",
    employees: "100-200",
    description: "Cloud infrastructure and DevOps solutions for businesses of all sizes.",
    openPositions: 7,
  },
  {
    id: "growth-genius",
    name: "GrowthGenius",
    logo: "/intertwined-golden-initials.png",
    industry: "Marketing",
    location: "Klaipėda, Lithuania",
    employees: "10-20",
    description: "Data-driven marketing agency helping businesses scale through digital channels.",
    openPositions: 2,
  },
  {
    id: "dataflow",
    name: "DataFlow",
    logo: "/abstract-df.png",
    industry: "Technology",
    location: "Vilnius, Lithuania",
    employees: "50-100",
    description: "Big data and analytics solutions for enterprise clients.",
    openPositions: 4,
  },
  {
    id: "innovatelt",
    name: "InnovateLT",
    logo: "/abstract-il.png",
    industry: "Technology",
    location: "Vilnius, Lithuania",
    employees: "20-50",
    description: "Product development company focused on innovative solutions for the Baltic market.",
    openPositions: 3,
  },
  {
    id: "helpdesk-pro",
    name: "HelpDesk Pro",
    logo: "/abstract-hd.png",
    industry: "Customer Service",
    location: "Remote, Lithuania",
    employees: "50-100",
    description: "Customer support solutions and outsourcing for technology companies.",
    openPositions: 8,
  },
  {
    id: "insight-metrics",
    name: "InsightMetrics",
    logo: "/abstract-geometric-IM.png",
    industry: "Data & Analytics",
    location: "Kaunas, Lithuania",
    employees: "20-50",
    description: "Data analytics and business intelligence solutions for mid-market companies.",
    openPositions: 3,
  },
]

export default function CompaniesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Companies</h1>
        <p className="mt-2 text-foreground/80">Discover top employers in Lithuania and explore their open positions</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 rounded-lg border bg-card p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <Input
              type="text"
              placeholder="Company name or keyword"
              className="pl-10 text-foreground placeholder:text-foreground/60"
            />
          </div>

          <div className="relative md:col-span-3">
            <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
            <Input
              type="text"
              placeholder="City or region"
              className="pl-10 text-foreground placeholder:text-foreground/60"
            />
          </div>

          <div className="md:col-span-2">
            <Select>
              <SelectTrigger className="text-foreground">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="md:col-span-2">
            <Button type="submit" className="w-full">
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <Card key={company.id} className="overflow-hidden transition-all hover:border-primary/50">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border">
                    <Image src={company.logo || "/placeholder.svg"} alt={company.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold leading-none tracking-tight text-foreground">
                      <Link href={`/companies/${company.id}`} className="hover:text-primary">
                        {company.name}
                      </Link>
                    </h3>

                    <div className="flex items-center gap-2 text-sm">
                      <Building className="h-3.5 w-3.5 text-primary" />
                      <span className="text-foreground/80">{company.industry}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                      <div className="flex items-center gap-1 text-xs text-foreground/80">
                        <MapPin className="h-3.5 w-3.5 text-primary/80" />
                        <span>{company.location}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-foreground/80">
                        <Users className="h-3.5 w-3.5 text-primary/80" />
                        <span>{company.employees} employees</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-3 text-sm text-foreground/80 line-clamp-2">{company.description}</p>

                <div className="mt-4 text-sm font-medium text-foreground">{company.openPositions} open positions</div>
              </div>

              <div className="flex items-center justify-end border-t p-4">
                <Link href={`/companies/${company.id}`}>
                  <Button variant="outline" size="sm" className="gap-1">
                    View Company
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
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
  )
}
