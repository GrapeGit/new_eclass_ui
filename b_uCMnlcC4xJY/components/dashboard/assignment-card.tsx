"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, FileText, AlertTriangle, CheckCircle2 } from "lucide-react"

export interface Assignment {
  id: string
  title: string
  dueDate: string
  dueTime: string
  status: "upcoming" | "submitted" | "overdue" | "graded"
  type: string
  points?: number
  grade?: number
}

interface AssignmentCardProps {
  assignment: Assignment
  compact?: boolean
}

const statusConfig = {
  upcoming: {
    label: "Due Soon",
    icon: Clock,
    className: "bg-warning/10 text-warning-foreground border-warning/30",
    iconClassName: "text-warning",
  },
  submitted: {
    label: "Submitted",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/30",
    iconClassName: "text-success",
  },
  overdue: {
    label: "Overdue",
    icon: AlertTriangle,
    className: "bg-destructive/10 text-destructive border-destructive/30",
    iconClassName: "text-destructive",
  },
  graded: {
    label: "Graded",
    icon: CheckCircle2,
    className: "bg-primary/10 text-primary border-primary/30",
    iconClassName: "text-primary",
  },
}

export function AssignmentCard({ assignment, compact = false }: AssignmentCardProps) {
  const config = statusConfig[assignment.status]
  const StatusIcon = config.icon

  if (compact) {
    return (
      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
        <div className="flex items-center gap-3 min-w-0">
          <div className={cn("p-2 rounded-md", config.className)}>
            <FileText className="w-4 h-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <Link 
              href={`/assignments/${assignment.id}`}
              className="text-sm font-medium hover:text-primary transition-colors truncate block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            >
              {assignment.title}
            </Link>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="w-3 h-3" aria-hidden="true" />
              <span>Due {assignment.dueDate}</span>
            </p>
          </div>
        </div>
        <Badge variant="outline" className={cn("shrink-0 ml-2", config.className)}>
          <StatusIcon className={cn("w-3 h-3 mr-1", config.iconClassName)} aria-hidden="true" />
          <span>{config.label}</span>
        </Badge>
      </div>
    )
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-md", config.className)}>
              <FileText className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <CardTitle className="text-base">
                <Link 
                  href={`/assignments/${assignment.id}`}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                >
                  {assignment.title}
                </Link>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{assignment.type}</p>
            </div>
          </div>
          <Badge variant="outline" className={config.className}>
            <StatusIcon className={cn("w-3 h-3 mr-1", config.iconClassName)} aria-hidden="true" />
            <span>{config.label}</span>
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {assignment.dueDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {assignment.dueTime}
            </span>
            {assignment.points && (
              <span>{assignment.points} points</span>
            )}
          </div>
          {assignment.status === "upcoming" || assignment.status === "overdue" ? (
            <Button size="sm" asChild>
              <Link href={`/assignments/${assignment.id}`}>
                Submit
              </Link>
            </Button>
          ) : assignment.status === "graded" && assignment.grade !== undefined ? (
            <span className="text-sm font-medium">
              {assignment.grade}/{assignment.points}
            </span>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
