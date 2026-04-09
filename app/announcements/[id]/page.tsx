"use client"

import { use } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { announcements } from "@/lib/mock-data"
import { ArrowLeft, Pin, Calendar, User } from "lucide-react"

export default function AnnouncementDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = use(params)
  const router = useRouter()
  const announcement = announcements.find(a => a.id === id)

  if (!announcement) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-2xl font-bold mb-4">Announcement Not Found</h1>
          <Button asChild>
            <Link href="/announcements">Back to Announcements</Link>
          </Button>
        </div>
      </DashboardLayout>
    )
  }

  // Full announcement content (mock expanded content)
  const fullContent = `${announcement.excerpt}

This is an important update for all students enrolled in SOC 224. Please read carefully and reach out if you have any questions.

If you have any concerns or need additional accommodations, please don't hesitate to contact me during office hours or via email at schen@ualberta.ca.

Thank you for your understanding and continued engagement with the course material.

Best regards,
Dr. Claudio Sicondolfo`

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="gap-2" 
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Announcements
        </Button>

        {/* Announcement Card */}
        <Card>
          <CardContent className="pt-6">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  SC
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  {announcement.isPinned && (
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      <Pin className="w-3 h-3 mr-1" aria-hidden="true" />
                      Pinned
                    </Badge>
                  )}
                  {announcement.isNew && (
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      New
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  {announcement.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" aria-hidden="true" />
                    {announcement.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    {announcement.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-6" />

            {/* Content */}
            <div className="prose prose-sm max-w-none text-foreground">
              {fullContent.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button variant="outline" asChild>
            <Link href="/announcements">View All Announcements</Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
