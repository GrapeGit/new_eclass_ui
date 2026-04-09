"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Clock } from "lucide-react"

interface ProgressCardProps {
  completed: number
  total: number
  label?: string
}

export function ProgressCard({ completed, total, label = "Assignments" }: ProgressCardProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
  const remaining = total - completed

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Course Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{label}</span>
              <span className="text-muted-foreground">{percentage}%</span>
            </div>
            <Progress 
              value={percentage} 
              className="h-2"
              aria-label={`${percentage}% of ${label} completed`}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" aria-hidden="true" />
              <div>
                <p className="text-lg font-semibold">{completed}</p>
                <p className="text-xs text-muted-foreground">Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-warning" aria-hidden="true" />
              <div>
                <p className="text-lg font-semibold">{remaining}</p>
                <p className="text-xs text-muted-foreground">Remaining</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              <div>
                <p className="text-lg font-semibold">{total}</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
