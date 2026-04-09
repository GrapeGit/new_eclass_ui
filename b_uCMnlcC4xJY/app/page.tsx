import { 
  DashboardLayout,
  AssignmentCard,
  AnnouncementCard,
  ProgressCard,
  QuickLinks,
  DeadlineTimeline,
} from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  assignments, 
  announcements, 
  deadlineItems,
  courseInfo 
} from "@/lib/mock-data"
import { Calendar, Clock, MapPin, User } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const upcomingAssignments = assignments.filter(
    a => a.status === "upcoming" || a.status === "overdue"
  ).slice(0, 3)
  
  const recentAnnouncements = announcements.slice(0, 3)
  
  const completedAssignments = assignments.filter(
    a => a.status === "submitted" || a.status === "graded"
  ).length

  return (
    <DashboardLayout>
      {/* Course Header */}
      <section aria-labelledby="course-heading" className="mb-8">
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl p-6 border border-primary/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="bg-background">
                  {courseInfo.code}
                </Badge>
                <Badge variant="secondary">{courseInfo.term}</Badge>
              </div>
              <h1 id="course-heading" className="text-2xl font-bold text-foreground mb-2">
                {courseInfo.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" aria-hidden="true" />
                  {courseInfo.instructor}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  {courseInfo.schedule}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  {courseInfo.location}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" asChild>
                <Link href="/materials">Course Materials</Link>
              </Button>
              <Button asChild>
                <Link href="/assignments">View Assignments</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today / This Week Overview */}
          <section aria-labelledby="today-heading">
            <Card className="border-warning/30 bg-warning/5">
              <CardHeader className="pb-3">
                <CardTitle id="today-heading" className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-warning" aria-hidden="true" />
                  Today&apos;s Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-background border">
                    <div>
                      <p className="font-medium">Week 10 Discussion Post: Online Privacy</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        Due today at 11:59 PM
                      </p>
                    </div>
                    <Button size="sm" variant="destructive" asChild>
                      <Link href="/assignments/2">Submit Now</Link>
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You have <strong>1 item</strong> due today and <strong>2 items</strong> due this week.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Upcoming Assignments */}
          <section aria-labelledby="assignments-heading">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle id="assignments-heading" className="text-lg">
                    Upcoming Assignments
                  </CardTitle>
                  <Link 
                    href="/assignments" 
                    className="text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    View all
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingAssignments.map((assignment) => (
                  <AssignmentCard 
                    key={assignment.id} 
                    assignment={assignment} 
                    compact 
                  />
                ))}
              </CardContent>
            </Card>
          </section>

          {/* Announcements */}
          <section aria-labelledby="announcements-heading">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle id="announcements-heading" className="text-lg">
                    Recent Announcements
                  </CardTitle>
                  <Link 
                    href="/announcements" 
                    className="text-sm text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                  >
                    View all
                  </Link>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentAnnouncements.map((announcement) => (
                  <AnnouncementCard 
                    key={announcement.id} 
                    announcement={announcement} 
                    compact 
                  />
                ))}
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Progress */}
          <ProgressCard 
            completed={completedAssignments} 
            total={assignments.length} 
          />

          {/* Deadline Timeline */}
          <DeadlineTimeline items={deadlineItems} />

          {/* Quick Links */}
          <QuickLinks />
        </div>
      </div>
    </DashboardLayout>
  )
}
