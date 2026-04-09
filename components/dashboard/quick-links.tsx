"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  FileText, 
  BookOpen, 
  MessageSquare, 
  BarChart3, 
  Calendar, 
  Users,
  ExternalLink
} from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  {
    href: "/materials",
    label: "Course Materials",
    description: "Readings & resources",
    icon: BookOpen,
    color: "bg-primary/10 text-primary",
  },
  {
    href: "/assignments",
    label: "All Assignments",
    description: "View & submit work",
    icon: FileText,
    color: "bg-accent/10 text-accent",
  },
  {
    href: "/discussions",
    label: "Discussions",
    description: "Join conversations",
    icon: MessageSquare,
    color: "bg-chart-3/10 text-chart-3",
  },
  {
    href: "/grades",
    label: "Grades",
    description: "View your progress",
    icon: BarChart3,
    color: "bg-chart-4/10 text-chart-4",
  },
  {
    href: "#",
    label: "Office Hours",
    description: "Book a meeting",
    icon: Calendar,
    color: "bg-chart-5/10 text-chart-5",
    external: true,
  },
  {
    href: "#",
    label: "Study Groups",
    description: "Connect with peers",
    icon: Users,
    color: "bg-muted text-muted-foreground",
    external: true,
  },
]

export function QuickLinks() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Quick Links
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg transition-all",
                "hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "group"
              )}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <div className={cn("p-2 rounded-md", link.color)}>
                <link.icon className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium group-hover:text-primary transition-colors flex items-center gap-1">
                  {link.label}
                  {link.external && (
                    <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                  )}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {link.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
