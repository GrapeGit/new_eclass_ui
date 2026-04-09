import { DashboardLayout } from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { assignments } from "@/lib/mock-data"
import { TrendingUp, Award, Target } from "lucide-react"

export default function GradesPage() {
  const gradedAssignments = assignments.filter(a => a.status === "graded" && a.grade !== undefined)
  
  const totalEarned = gradedAssignments.reduce((sum, a) => sum + (a.grade || 0), 0)
  const totalPossible = gradedAssignments.reduce((sum, a) => sum + (a.points || 0), 0)
  const currentGrade = totalPossible > 0 ? Math.round((totalEarned / totalPossible) * 100) : 0

  const getLetterGrade = (percent: number) => {
    if (percent >= 90) return "A"
    if (percent >= 85) return "A-"
    if (percent >= 80) return "B+"
    if (percent >= 75) return "B"
    if (percent >= 70) return "B-"
    if (percent >= 65) return "C+"
    if (percent >= 60) return "C"
    if (percent >= 55) return "C-"
    if (percent >= 50) return "D"
    return "F"
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Grades</h1>
          <p className="text-muted-foreground mt-1">
            Track your progress and view feedback on graded work
          </p>
        </div>

        {/* Grade Overview */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                Current Grade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">{currentGrade}%</span>
                <Badge variant="outline" className="text-lg">
                  {getLetterGrade(currentGrade)}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Based on {gradedAssignments.length} graded items
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Award className="w-4 h-4" aria-hidden="true" />
                Points Earned
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-foreground">
                {totalEarned}
                <span className="text-lg text-muted-foreground font-normal">/{totalPossible}</span>
              </p>
              <Progress value={(totalEarned / totalPossible) * 100} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Target className="w-4 h-4" aria-hidden="true" />
                Course Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-foreground">515</p>
              <p className="text-xs text-muted-foreground mt-2">
                points possible this semester
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Graded Items */}
        <Card>
          <CardHeader>
            <CardTitle>Graded Assignments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full" role="table">
                <thead>
                  <tr className="border-b text-sm">
                    <th className="text-left py-3 font-medium text-muted-foreground">Assignment</th>
                    <th className="text-left py-3 font-medium text-muted-foreground">Type</th>
                    <th className="text-right py-3 font-medium text-muted-foreground">Score</th>
                    <th className="text-right py-3 font-medium text-muted-foreground">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {gradedAssignments.map((assignment) => {
                    const percent = Math.round(((assignment.grade || 0) / (assignment.points || 1)) * 100)
                    return (
                      <tr key={assignment.id} className="border-b last:border-0">
                        <td className="py-4">
                          <p className="font-medium">{assignment.title}</p>
                          <p className="text-sm text-muted-foreground">
                            Due: {assignment.dueDate}
                          </p>
                        </td>
                        <td className="py-4">
                          <Badge variant="secondary">{assignment.type}</Badge>
                        </td>
                        <td className="py-4 text-right">
                          <span className="font-medium">{assignment.grade}</span>
                          <span className="text-muted-foreground">/{assignment.points}</span>
                        </td>
                        <td className="py-4 text-right">
                          <Badge 
                            variant="outline"
                            className={percent >= 80 ? "border-success/30 text-success" : ""}
                          >
                            {percent}%
                          </Badge>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
