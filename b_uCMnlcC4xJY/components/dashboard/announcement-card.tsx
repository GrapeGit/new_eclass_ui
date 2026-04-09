"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Pin } from "lucide-react"
import { cn } from "@/lib/utils"

export interface Announcement {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  isPinned?: boolean
  isNew?: boolean
}

interface AnnouncementCardProps {
  announcement: Announcement
  compact?: boolean
}

export function AnnouncementCard({ announcement, compact = false }: AnnouncementCardProps) {
  if (compact) {
    return (
      <div className={cn(
        "flex items-start gap-3 p-3 rounded-lg transition-colors",
        announcement.isPinned ? "bg-primary/5 border border-primary/20" : "bg-muted/50 hover:bg-muted"
      )}>
        <div className={cn(
          "p-2 rounded-md shrink-0",
          announcement.isPinned ? "bg-primary/10" : "bg-muted"
        )}>
          {announcement.isPinned ? (
            <Pin className="w-4 h-4 text-primary" aria-hidden="true" />
          ) : (
            <Bell className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <Link 
              href={`/announcements/${announcement.id}`}
              className="text-sm font-medium hover:text-primary transition-colors line-clamp-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              {announcement.title}
            </Link>
            {announcement.isNew && (
              <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs px-1.5 py-0">
                New
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {announcement.author} &middot; {announcement.date}
          </p>
        </div>
      </div>
    )
  }

  return (
    <Card className={cn(
      "hover:shadow-md transition-shadow",
      announcement.isPinned && "border-primary/30 bg-primary/5"
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className={cn(
              "p-2 rounded-md",
              announcement.isPinned ? "bg-primary/10" : "bg-muted"
            )}>
              {announcement.isPinned ? (
                <Pin className="w-5 h-5 text-primary" aria-hidden="true" />
              ) : (
                <Bell className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
              )}
            </div>
            <div>
              <CardTitle className="text-base">
                <Link 
                  href={`/announcements/${announcement.id}`}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  {announcement.title}
                </Link>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {announcement.author} &middot; {announcement.date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {announcement.isPinned && (
              <Badge variant="outline" className="border-primary/30 text-primary">
                Pinned
              </Badge>
            )}
            {announcement.isNew && (
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                New
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {announcement.excerpt}
        </p>
      </CardContent>
    </Card>
  )
}
