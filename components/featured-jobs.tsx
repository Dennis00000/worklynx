import JobCard, { type JobCardProps } from "@/components/job-card"

// Sample data for featured jobs
const featuredJobs: JobCardProps[] = [
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
    featured: true,
  },
]

export default function FeaturedJobs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Featured Jobs</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  )
}
