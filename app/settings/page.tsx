"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Building2, FileText, Newspaper, Settings, User } from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Portfolio", href: "/portfolio", icon: Building2 },
  { name: "Research", href: "/research", icon: FileText },
  { name: "News", href: "/news", icon: Newspaper },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function SettingsPage() {
  const pathname = usePathname()
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
  })

  const [alertPreferences, setAlertPreferences] = useState({
    emailScoreChanges: false,
    inAppNewsEvents: false,
    dailySummary: false,
  })

  const [dashboardSettings, setDashboardSettings] = useState({
    defaultView: "",
    displayedMetrics: "",
  })

  const handleProfileUpdate = () => {
    // Handle profile update logic
    console.log("Profile updated:", profileData)
  }

  const handleAlertPreferencesUpdate = () => {
    // Handle alert preferences update logic
    console.log("Alert preferences updated:", alertPreferences)
  }

  const handleDashboardSettingsUpdate = () => {
    // Handle dashboard settings update logic
    console.log("Dashboard settings updated:", dashboardSettings)
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-muted/30 border-r">
        <div className="p-6">
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="container py-8 space-y-8">
          {/* Page Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences.</p>
          </div>

          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Profile Information</span>
              </CardTitle>
              <CardDescription>Update your personal information and account details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={profileData.company}
                    onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    value={profileData.jobTitle}
                    onChange={(e) => setProfileData({ ...profileData, jobTitle: e.target.value })}
                    placeholder="Enter your job title"
                  />
                </div>
              </div>

              <Button onClick={handleProfileUpdate} className="w-full md:w-auto">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* Alert Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>Alert Preferences</CardTitle>
              <CardDescription>Configure how you want to receive notifications and alerts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="emailScoreChanges"
                    checked={alertPreferences.emailScoreChanges}
                    onCheckedChange={(checked) =>
                      setAlertPreferences({ ...alertPreferences, emailScoreChanges: checked as boolean })
                    }
                  />
                  <Label htmlFor="emailScoreChanges" className="text-sm font-normal">
                    Email notifications for significant score changes
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="inAppNewsEvents"
                    checked={alertPreferences.inAppNewsEvents}
                    onCheckedChange={(checked) =>
                      setAlertPreferences({ ...alertPreferences, inAppNewsEvents: checked as boolean })
                    }
                  />
                  <Label htmlFor="inAppNewsEvents" className="text-sm font-normal">
                    In-app notifications for news events
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="dailySummary"
                    checked={alertPreferences.dailySummary}
                    onCheckedChange={(checked) =>
                      setAlertPreferences({ ...alertPreferences, dailySummary: checked as boolean })
                    }
                  />
                  <Label htmlFor="dailySummary" className="text-sm font-normal">
                    Daily summary of portfolio updates
                  </Label>
                </div>
              </div>

              <Button onClick={handleAlertPreferencesUpdate} className="w-full md:w-auto">
                Save Alert Preferences
              </Button>
            </CardContent>
          </Card>

          {/* Dashboard Customization */}
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Customization</CardTitle>
              <CardDescription>Customize your dashboard layout and displayed information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="defaultView">Default Dashboard View</Label>
                  <Select
                    value={dashboardSettings.defaultView}
                    onValueChange={(value) => setDashboardSettings({ ...dashboardSettings, defaultView: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select default view" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="overview">Overview</SelectItem>
                      <SelectItem value="detailed">Detailed Analysis</SelectItem>
                      <SelectItem value="compact">Compact View</SelectItem>
                      <SelectItem value="custom">Custom Layout</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="displayedMetrics">Displayed Metrics</Label>
                  <Textarea
                    id="displayedMetrics"
                    value={dashboardSettings.displayedMetrics}
                    onChange={(e) => setDashboardSettings({ ...dashboardSettings, displayedMetrics: e.target.value })}
                    placeholder="Specify which metrics you want to display on your dashboard..."
                    rows={4}
                  />
                </div>
              </div>

              <Button onClick={handleDashboardSettingsUpdate} className="w-full md:w-auto">
                Save Dashboard Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
