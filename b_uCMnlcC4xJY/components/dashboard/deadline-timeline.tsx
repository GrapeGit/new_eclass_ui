"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface DeadlineItem {
  id: string
  title: string
  type: "assignment" | "quiz" | "discussion" | "reading"
  dueDate: string
  dueTime: string
  isToday?: boolean
  isTomorrow?: boolean
}

interface DeadlineTimelineProps {
  items: DeadlineItem[]
}

const typeConfig = {
  assignment: { label: "Assignment", className: "bg-primary/10 text-primary border-primary/30" },
  quiz: { label: "Quiz", className: "bg-destructive/10 text-destructive border-destructive/30" },
  discussion: { label: "Discussion", className: "bg-accent/10 text-accent border-accent/30" },
  reading: { label: "Reading", className: "bg-muted text-muted-foreground border-muted" },
}

export function DeadlineTimeline({ items }: DeadlineTimelineProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
          <span>Upcoming Deadlines</span>
          <Link 
            href="/assignments" 
            className="text-xs text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
          >
            View all
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div 
            className="absolute left-3 top-2 bottom-2 w-px bg-border" 
            aria-hidden="true"
          />
          
          <ul className="space-y-4" role="list" aria-label="Upcoming deadlines">
            {items.map((item, index) => {
              const config = typeConfig[item.type]
              
              return (
                <li key={item.id} className="relative pl-8">
                  {/* Timeline dot */}
                  <div 
                    className={cn(
                      "absolute left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-background",
                      item.isToday ? "bg-destructive" : item.isTomorrow ? "bg-warning" : "bg-muted-foreground"
                    )}
                    aria-hidden="true"
                  />
                  
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Link 
                          href={`/assignments/${item.id}`}
                          className="text-sm font-medium hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
                        >
                          {item.title}
                        </Link>
                        <Badge variant="outline" className={cn("text-xs", config.className)}>
                          {config.label}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.isToday ? (
                          <span className="text-destructive font-medium">Today</span>
                        ) : item.isTomorrow ? (
                          <span className="text-warning font-medium">Tomorrow</span>
                        ) : (
                          item.dueDate
                        )}
                        {" at "}
                        {item.dueTime}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
