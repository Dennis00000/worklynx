import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building, Clock, Briefcase, Heart } from "lucide-react"

export interface JobCardProps {
  id: string
  title: string
  company: {
    name: string
    logo: string
  }
  location: string
  salary: string
  jobType: string
  postedAt: string
  featured?: boolean
}

export default function JobCard({
  id,
  title,
  company,
  location,
  salary,
  jobType,
  postedAt,
  featured = false,
}: JobCardProps) {
  return (
    <Card
      className={`overflow-hidden transition-all hover:border-primary/50 ${
        featured ? "border-primary/30 bg-primary/5" : ""
      }`}
    >
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border">
              <Image src={company.logo || "/placeholder.svg"} alt={company.name} fill className="object-cover" />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold leading-none tracking-tight text-foreground">
                  <Link href={`/jobs/${id}`} className="hover:text-primary">
                    {title}
                  </Link>
                </h3>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Save job</span>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Building className="h-3.5 w-3.5 text-primary" />
                <span className="font-medium text-foreground">{company.name}</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1">
                <div className="flex items-center gap-1 text-xs">
                  <MapPin className="h-3.5 w-3.5 text-primary/80" />
                  <span className="text-foreground/90">{location}</span>
                </div>

                <div className="flex items-center gap-1 text-xs">
                  <Briefcase className="h-3.5 w-3.5 text-primary/80" />
                  <span className="text-foreground/90">{jobType}</span>
                </div>

                <div className="flex items-center gap-1 text-xs">
                  <Clock className="h-3.5 w-3.5 text-primary/80" />
                  <span className="text-foreground/90">{postedAt}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm font-medium text-foreground">{salary}</div>
            {featured && (
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                Featured
              </Badge>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end border-t p-4">
          <Link href={`/jobs/${id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
