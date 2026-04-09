import { DashboardLayout } from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  MessageSquare, 
  Pin, 
  Clock, 
  Users,
  Plus,
  ArrowUpRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const discussions = [
  {
    id: "1",
    title: "Week 10: Online Privacy Discussion",
    description: "Share your thoughts on data privacy and how it affects digital citizenship.",
    replies: 24,
    participants: 18,
    lastActivity: "2 hours ago",
    isPinned: true,
    isRequired: true,
    dueDate: "Apr 8",
  },
  {
    id: "2",
    title: "Final Project Group Formation",
    description: "Find and connect with group members for the final accessibility audit project.",
    replies: 45,
    participants: 32,
    lastActivity: "30 minutes ago",
    isPinned: true,
  },
  {
    id: "3",
    title: "Week 9: Digital Equity Reflection",
    description: "Discuss barriers to digital access and potential solutions.",
    replies: 31,
    participants: 22,
    lastActivity: "Yesterday",
    isRequired: true,
    isComplete: true,
  },
  {
    id: "4",
    title: "Study Group for Final Exam",
    description: "Looking for study partners for the final exam. All welcome!",
    replies: 12,
    participants: 8,
    lastActivity: "3 days ago",
  },
  {
    id: "5",
    title: "Resources for Accessibility Testing",
    description: "Share helpful tools and resources for the accessibility audit assignment.",
    replies: 19,
    participants: 14,
    lastActivity: "4 days ago",
  },
]

export default function DiscussionsPage() {
  const pinnedDiscussions = discussions.filter(d => d.isPinned)
  const regularDiscussions = discussions.filter(d => !d.isPinned)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Discussions</h1>
            <p className="text-muted-foreground mt-1">
              Engage with your classmates and instructors
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" aria-hidden="true" />
            New Discussion
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{discussions.length}</p>
                  <p className="text-sm text-muted-foreground">Active Discussions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Clock className="w-5 h-5 text-warning" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm text-muted-foreground">Due This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-success/10">
                  <Users className="w-5 h-5 text-success" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-bold">32</p>
                  <p className="text-sm text-muted-foreground">Classmates Online</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pinned Discussions */}
        {pinnedDiscussions.length > 0 && (
          <section aria-labelledby="pinned-heading">
            <h2 id="pinned-heading" className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Pinned Discussions
            </h2>
            <div className="space-y-4">
              {pinnedDiscussions.map((discussion) => (
                <DiscussionCard key={discussion.id} discussion={discussion} />
              ))}
            </div>
          </section>
        )}

        {/* All Discussions */}
        <section aria-labelledby="all-discussions-heading">
          <h2 id="all-discussions-heading" className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            All Discussions
          </h2>
          <div className="space-y-4">
            {regularDiscussions.map((discussion) => (
              <DiscussionCard key={discussion.id} discussion={discussion} />
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

interface Discussion {
  id: string
  title: string
  description: string
  replies: number
  participants: number
  lastActivity: string
  isPinned?: boolean
  isRequired?: boolean
  isComplete?: boolean
  dueDate?: string
}

function DiscussionCard({ discussion }: { discussion: Discussion }) {
  return (
    <Card className={cn(
      "hover:shadow-md transition-shadow",
      discussion.isPinned && "border-primary/20 bg-primary/5"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              {discussion.isPinned && (
                <Pin className="w-4 h-4 text-primary" aria-hidden="true" />
              )}
              <Link 
                href="#"
                className="text-base font-semibold hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
              >
                {discussion.title}
              </Link>
              {discussion.isRequired && !discussion.isComplete && (
                <Badge variant="outline" className="border-warning/30 text-warning-foreground bg-warning/10">
                  Required
                </Badge>
              )}
              {discussion.isComplete && (
                <Badge variant="outline" className="border-success/30 text-success bg-success/10">
                  Completed
                </Badge>
              )}
            </div>
            <CardDescription className="line-clamp-1">
              {discussion.description}
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" className="shrink-0" asChild>
            <Link href="#">
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">Open discussion</span>
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              {discussion.replies} replies
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" aria-hidden="true" />
              {discussion.participants} participants
            </span>
            {discussion.dueDate && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" aria-hidden="true" />
                Due {discussion.dueDate}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(Math.min(3, discussion.participants))].map((_, i) => (
                <Avatar key={i} className="w-6 h-6 border-2 border-background">
                  <AvatarFallback className="text-xs bg-muted">
                    {String.fromCharCode(65 + i)}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {discussion.lastActivity}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
