import { DashboardLayout } from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Accessibility, 
  MousePointerClick, 
  Users, 
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Target,
  Heart
} from "lucide-react"

const principles = [
  {
    icon: Accessibility,
    title: "Accessibility First",
    description: "Designed with WCAG guidelines in mind, ensuring all students can navigate and use the platform effectively.",
    features: [
      "High contrast color ratios for readability",
      "Keyboard navigation support throughout",
      "Screen reader-friendly labels and ARIA attributes",
      "Status indicators that don't rely on color alone",
      "Clear focus states for interactive elements",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Reduced Cognitive Load",
    description: "Minimized clicks and simplified navigation to help students find what they need quickly.",
    features: [
      "Task-focused dashboard showing urgent items first",
      "One-click access to assignment submissions",
      "Clear visual hierarchy with important items highlighted",
      "Consolidated views instead of buried menus",
      "Contextual actions where students need them",
    ],
  },
  {
    icon: Users,
    title: "Inclusive Design",
    description: "Created for diverse learners with varying technical abilities, learning styles, and access needs.",
    features: [
      "Dark mode support for visual comfort",
      "Responsive design for all devices",
      "Clear, jargon-free language",
      "Consistent patterns and predictable behavior",
      "Forgiving interface with undo and confirmation options",
    ],
  },
  {
    icon: Sparkles,
    title: "Student-Centered Experience",
    description: "Prioritizes what students actually need to succeed in their courses.",
    features: [
      "Deadline timeline showing upcoming due dates",
      "Progress tracking for motivation",
      "Quick links to frequently accessed resources",
      "Announcement visibility without clutter",
      "Personal dashboard customized to student context",
    ],
  },
]

const comparisons = [
  {
    traditional: "Multiple clicks to find assignment submission",
    redesign: "Submit button visible on dashboard and assignment cards",
  },
  {
    traditional: "Due dates scattered across different pages",
    redesign: "Unified deadline timeline on dashboard",
  },
  {
    traditional: "Announcements buried in course sections",
    redesign: "Pinned and recent announcements on main view",
  },
  {
    traditional: "Progress tracking requires navigating to grades",
    redesign: "Visual progress indicator always visible",
  },
  {
    traditional: "Small, hard-to-read text and low contrast",
    redesign: "Accessible typography with proper sizing and contrast",
  },
  {
    traditional: "No dark mode or visual comfort options",
    redesign: "System-aware dark mode with toggle",
  },
]

export default function RationalePage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="outline" className="mb-2">
            SOC 224 Creative Project
          </Badge>
          <h1 className="text-3xl font-bold text-foreground">
            Design Rationale
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How this simplified eClass dashboard improves accessibality and student 
            participation in online learning. 
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional learning management systems built through create barriers to participation 
                  through complex navigation, buried features, and inconsistent design patterns. 
                  Students spend more time searching for information than learning, which 
                  disproportionately affects those with accessibility needs, limited technical 
                  experience, or competing demands on their attention.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Principles */}
        <section aria-labelledby="principles-heading">
          <h2 id="principles-heading" className="text-xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" aria-hidden="true" />
            Design Principles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <Card key={principle.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <principle.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-base">{principle.title}</CardTitle>
                  </div>
                  <CardDescription>{principle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {principle.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Before/After Comparison */}
        <section aria-labelledby="comparison-heading">
          <h2 id="comparison-heading" className="text-xl font-bold mb-6 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-primary" aria-hidden="true" />
            Traditional LMS vs. This Redesign
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm" role="table">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-destructive/80">
                        Traditional Approach
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-success">
                        This Redesign
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((comparison, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-3 px-4 text-muted-foreground">
                          {comparison.traditional}
                        </td>
                        <td className="py-3 px-4 text-foreground">
                          {comparison.redesign}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Digital Citizenship Connection */}
        <section aria-labelledby="citizenship-heading">
          <h2 id="citizenship-heading" className="text-xl font-bold mb-6 flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" aria-hidden="true" />
            Connection to Digital Citizenship
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Equity and Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By designing for accessibility from the start, this prototype demonstrates 
                  how digital platforms can be more equitable. When we reduce barriers to 
                  participation, we support students who might otherwise struggle with 
                  technology or feel excluded from online learning environments.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Responsible Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Digital citizenship includes the responsibility of designers and developers 
                  to create inclusive experiences. This redesign prioritizes clarity over 
                  complexity, respects users&apos; time and attention, and avoids dark patterns 
                  that could frustrate or confuse learners.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Community and Participation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When students can easily access announcements, discussions, and course 
                  materials, they&apos;re more likely to engage with the learning community. 
                  This prototype surfaces these social features prominently to encourage 
                  active participation in the digital classroom.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <Card className="bg-accent/5 border-accent/20">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h2 className="text-lg font-semibold">Key Takeaway</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Good design is inclusive design. When we center the needs of users who face 
                the most barriers, we create better experiences for everyone. This prototype 
                demonstrates that learning platforms can be both functional and accessible, 
                reducing friction and supporting all students in their educational journey.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground">
          Created for SOC 224: Digital Citizenship and Learning Technologies | Winter 2026
        </p>
      </div>
    </DashboardLayout>
  )
}
