import { DashboardLayout, AssignmentCard } from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { assignments } from "@/lib/mock-data"

export default function AssignmentsPage() {
  const upcomingAssignments = assignments.filter(
    a => a.status === "upcoming" || a.status === "overdue"
  )
  const submittedAssignments = assignments.filter(a => a.status === "submitted")
  const gradedAssignments = assignments.filter(a => a.status === "graded")

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Assignments</h1>
          <p className="text-muted-foreground mt-1">
            View and submit your course assignments
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                To Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">
                {upcomingAssignments.length}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                assignments pending
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Submitted
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">
                {submittedAssignments.length}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                awaiting grades
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Graded
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">
                {gradedAssignments.length}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                completed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Assignment Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="upcoming">
              To Do ({upcomingAssignments.length})
            </TabsTrigger>
            <TabsTrigger value="submitted">
              Submitted ({submittedAssignments.length})
            </TabsTrigger>
            <TabsTrigger value="graded">
              Graded ({gradedAssignments.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="space-y-4">
              {upcomingAssignments.length > 0 ? (
                upcomingAssignments.map((assignment) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      No upcoming assignments. You&apos;re all caught up!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="submitted" className="mt-6">
            <div className="space-y-4">
              {submittedAssignments.length > 0 ? (
                submittedAssignments.map((assignment) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      No submitted assignments pending grading.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="graded" className="mt-6">
            <div className="space-y-4">
              {gradedAssignments.length > 0 ? (
                gradedAssignments.map((assignment) => (
                  <AssignmentCard key={assignment.id} assignment={assignment} />
                ))
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">
                      No graded assignments yet.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
