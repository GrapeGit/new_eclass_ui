"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { courseMaterials } from "@/lib/mock-data"
import { 
  Search, 
  ChevronDown, 
  ChevronRight,
  FileText, 
  Video, 
  BookOpen, 
  Link as LinkIcon,
  Presentation,
  FolderOpen,
  Download,
  ExternalLink
} from "lucide-react"
import { cn } from "@/lib/utils"

const itemTypeConfig = {
  slides: { icon: Presentation, label: "Slides", color: "text-primary" },
  reading: { icon: BookOpen, label: "Reading", color: "text-accent" },
  video: { icon: Video, label: "Video", color: "text-chart-5" },
  activity: { icon: FileText, label: "Activity", color: "text-chart-3" },
  document: { icon: FileText, label: "Document", color: "text-muted-foreground" },
  link: { icon: LinkIcon, label: "Link", color: "text-chart-4" },
}

export default function MaterialsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedModules, setExpandedModules] = useState<string[]>(
    courseMaterials.map(m => m.id)
  )

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    )
  }

  const filteredMaterials = courseMaterials.map(module => ({
    ...module,
    items: module.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(module => module.items.length > 0 || !searchQuery)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Course Materials</h1>
            <p className="text-muted-foreground mt-1">
              Access readings, slides, videos, and resources
            </p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
            <Input
              type="search"
              placeholder="Search materials..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search course materials"
            />
          </div>
        </div>

        {/* Materials List */}
        <div className="space-y-4">
          {filteredMaterials.map((module) => {
            const isExpanded = expandedModules.includes(module.id)
            
            return (
              <Card key={module.id}>
                <CardHeader className="pb-0">
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="flex items-center justify-between w-full text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md -m-2 p-2"
                    aria-expanded={isExpanded}
                    aria-controls={`module-${module.id}-content`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10">
                        <FolderOpen className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <CardTitle className="text-base group-hover:text-primary transition-colors">
                          {module.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {module.items.length} items
                        </p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                    )}
                  </button>
                </CardHeader>
                
                {isExpanded && (
                  <CardContent 
                    id={`module-${module.id}-content`}
                    className="pt-4"
                  >
                    <ul className="space-y-2" role="list">
                      {module.items.map((item) => {
                        const typeConfig = itemTypeConfig[item.type as keyof typeof itemTypeConfig] || itemTypeConfig.document
                        const Icon = typeConfig.icon
                        
                        return (
                          <li key={item.id}>
                            <a
                              href="#"
                              className={cn(
                                "flex items-center justify-between p-3 rounded-lg",
                                "bg-muted/50 hover:bg-muted transition-colors",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                                "group"
                              )}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <Icon className={cn("w-5 h-5 shrink-0", typeConfig.color)} aria-hidden="true" />
                                <div className="min-w-0">
                                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                                    {item.title}
                                  </p>
                                  <div className="flex items-center gap-2 mt-0.5">
                                    <Badge variant="secondary" className="text-xs">
                                      {typeConfig.label}
                                    </Badge>
                                    {"duration" in item && (
                                      <span className="text-xs text-muted-foreground">
                                        {item.duration}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 shrink-0 ml-4">
                                {item.type === "link" ? (
                                  <ExternalLink className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                                ) : (
                                  <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                                )}
                              </div>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredMaterials.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Search className="w-12 h-12 mx-auto text-muted-foreground mb-4" aria-hidden="true" />
              <h3 className="text-lg font-medium mb-2">No materials found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search query
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
