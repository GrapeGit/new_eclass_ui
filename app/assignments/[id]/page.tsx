"use client"

import { use } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { assignments } from "@/lib/mock-data"
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  FileText, 
  Upload, 
  CheckCircle2,
  AlertTriangle,
  Info
} from "lucide-react"
import { cn } from "@/lib/utils"

const statusConfig = {
  upcoming: {
    label: "Due Soon",
    icon: Clock,
    className: "bg-warning/10 text-warning-foreground border-warning/30",
  },
  submitted: {
    label: "Submitted",
    icon: CheckCircle2,
    className: "bg-success/10 text-success border-success/30",
  },
  overdue: {
    label: "Overdue",
    icon: AlertTriangle,
    className: "bg-destructive/10 text-destructive border-destructive/30",
  },
  graded: {
    label: "Graded",
    icon: CheckCircle2,
    className: "bg-primary/10 text-primary border-primary/30",
  },
}

export default function AssignmentDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = use(params)
  const router = useRouter()
  const assignment = assignments.find(a => a.id === id)

  if (!assignment) {
    return (
      <DashboardLayout>
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-2xl font-bold mb-4">Assignment Not Found</h1>
          <Button asChild>
            <Link href="/assignments">Back to Assignments</Link>
          </Button>
        </div>
      </DashboardLayout>
    )
  }

  const config = statusConfig[assignment.status]
  const StatusIcon = config.icon
  const canSubmit = assignment.status === "upcoming" || assignment.status === "overdue"

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="gap-2" 
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Assignments
        </Button>

        {/* Assignment Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{assignment.type}</Badge>
            <Badge variant="outline" className={config.className}>
              <StatusIcon className="w-3 h-3 mr-1" aria-hidden="true" />
              {config.label}
            </Badge>
          </div>
          
          <h1 className="text-3xl font-bold text-foreground">
            {assignment.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Due: {assignment.dueDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {assignment.dueTime}
            </span>
            {assignment.points && (
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" aria-hidden="true" />
                {assignment.points} points
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Instructions</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  This assignment asks you to reflect on your understanding of digital citizenship 
                  and its implications for online learning environments.
                </p>
                <h4 className="text-foreground font-medium mt-4">Requirements:</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Write a 1000-1500 word reflection essay</li>
                  <li>Include at least 3 references to course readings</li>
                  <li>Address the role of accessibility in digital citizenship</li>
                  <li>Discuss how inclusive design supports student participation</li>
                  <li>Use APA 7th edition formatting</li>
                </ul>
                <h4 className="text-foreground font-medium mt-4">Grading Criteria:</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Critical analysis and depth of reflection (40%)</li>
                  <li>Connection to course materials (25%)</li>
                  <li>Writing clarity and organization (20%)</li>
                  <li>Proper citation and formatting (15%)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Submission Section */}
            {canSubmit && (
              <Card>
                <CardHeader>
                  <CardTitle>Submit Your Work</CardTitle>
                  <CardDescription>
                    Upload your assignment file or paste your text below
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* File Upload Area */}
                  <div 
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Upload file"
                  >
                    <Upload className="w-10 h-10 mx-auto text-muted-foreground mb-4" aria-hidden="true" />
                    <p className="text-sm font-medium">
                      Drag and drop your file here, or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Supported formats: PDF, DOCX, TXT (Max 10MB)
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">
                        Or paste text
                      </span>
                    </div>
                  </div>

                  <Textarea 
                    placeholder="Paste your assignment text here..."
                    className="min-h-[200px]"
                    aria-label="Assignment text"
                  />

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Make sure to save your work before submitting
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline">Save Draft</Button>
                      <Button>Submit Assignment</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submission Confirmation */}
            {assignment.status === "submitted" && (
              <Card className="border-success/30 bg-success/5">
                <CardContent className="py-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-success/10">
                      <CheckCircle2 className="w-6 h-6 text-success" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        Assignment Submitted Successfully
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Submitted on Apr 1, 2026 at 10:45 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Grade Display */}
            {assignment.status === "graded" && assignment.grade !== undefined && (
              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle>Your Grade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-primary">
                      {assignment.grade}/{assignment.points}
                    </div>
                    <div className="text-muted-foreground">
                      <p className="text-sm">
                        {Math.round((assignment.grade / (assignment.points || 1)) * 100)}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-background rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Instructor Feedback:</h4>
                    <p className="text-sm text-muted-foreground">
                      Excellent work on connecting the course readings to real-world examples. 
                      Your analysis of accessibility barriers was particularly insightful. 
                      Consider expanding on the policy implications in future assignments.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Assignment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium">{assignment.type}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Points</span>
                  <span className="font-medium">{assignment.points || "N/A"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Due Date</span>
                  <span className="font-medium">{assignment.dueDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="outline" className={cn("text-xs", config.className)}>
                    {config.label}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="bg-muted/50">
              <CardContent className="py-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-sm">
                    <p className="font-medium mb-1">Need Help?</p>
                    <p className="text-muted-foreground">
                      Visit office hours or post in the discussion board if you have questions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
