import { DashboardLayout, AnnouncementCard } from "@/components/dashboard"
import { announcements } from "@/lib/mock-data"

export default function AnnouncementsPage() {
  const pinnedAnnouncements = announcements.filter(a => a.isPinned)
  const regularAnnouncements = announcements.filter(a => !a.isPinned)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Announcements</h1>
          <p className="text-muted-foreground mt-1">
            Stay updated with the latest course news and updates
          </p>
        </div>

        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <section aria-labelledby="pinned-heading">
            <h2 id="pinned-heading" className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Pinned
            </h2>
            <div className="space-y-4">
              {pinnedAnnouncements.map((announcement) => (
                <AnnouncementCard key={announcement.id} announcement={announcement} />
              ))}
            </div>
          </section>
        )}

        {/* All Announcements */}
        <section aria-labelledby="all-announcements-heading">
          <h2 id="all-announcements-heading" className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
            All Announcements
          </h2>
          <div className="space-y-4">
            {regularAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}
