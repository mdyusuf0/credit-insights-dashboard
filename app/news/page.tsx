"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Clock, TrendingUp, TrendingDown, Building2, Landmark } from "lucide-react"
import { useState } from "react"

const newsItems = [
  {
    id: 1,
    title: "TechCorp Announces Strong Q2 Earnings",
    description:
      "The company's Q2 earnings exceeded expectations, driven by strong performance in its cloud computing division. Revenue increased by 15% year-over-year, and net income rose by 20%.",
    source: "Financial Times",
    timestamp: "2 hours ago",
    category: "earnings",
    sector: "technology",
    issuer: "TechCorp",
    impact: "positive",
  },
  {
    id: 2,
    title: "Central Bank Raises Interest Rates",
    description:
      "The central bank raised interest rates by 0.5% to combat rising inflation. This move is expected to impact borrowing costs for businesses and consumers.",
    source: "Reuters",
    timestamp: "4 hours ago",
    category: "monetary-policy",
    sector: "financial",
    issuer: "Central Bank",
    impact: "neutral",
  },
  {
    id: 3,
    title: "Government Announces Infrastructure Spending Plan",
    description:
      "The government announced a new infrastructure spending plan totaling $1 trillion. The plan includes investments in roads, bridges, and public transportation.",
    source: "Bloomberg",
    timestamp: "6 hours ago",
    category: "government",
    sector: "infrastructure",
    issuer: "Government",
    impact: "positive",
  },
  {
    id: 4,
    title: "GlobalCorp Announces Restructuring Plan",
    description:
      "The company announced a major restructuring plan, including layoffs and cost-cutting measures. The plan aims to improve efficiency and profitability.",
    source: "Wall Street Journal",
    timestamp: "8 hours ago",
    category: "corporate",
    sector: "industrial",
    issuer: "GlobalCorp",
    impact: "negative",
  },
  {
    id: 5,
    title: "AutoCorp Announces Weak Q1 Earnings",
    description:
      "The company's Q1 earnings were below expectations, due to supply chain disruptions and increased costs. Revenue decreased by 5% year-over-year, and net income fell by 10%.",
    source: "Financial Times",
    timestamp: "10 hours ago",
    category: "earnings",
    sector: "automotive",
    issuer: "AutoCorp",
    impact: "negative",
  },
  {
    id: 6,
    title: "New Regulations Announced for Financial Sector",
    description:
      "The government announced new regulations for the financial sector, aimed at increasing transparency and reducing risk. The regulations will impact banks and other financial institutions.",
    source: "Reuters",
    timestamp: "12 hours ago",
    category: "regulation",
    sector: "financial",
    issuer: "Government",
    impact: "neutral",
  },
]

const sectors = ["Technology", "Financial", "Infrastructure", "Industrial", "Automotive"]
const issuers = ["TechCorp", "GlobalCorp", "AutoCorp", "Central Bank", "Government"]

export default function NewsPage() {
  const [selectedSector, setSelectedSector] = useState<string>("")
  const [selectedIssuer, setSelectedIssuer] = useState<string>("")
  const [filteredNews, setFilteredNews] = useState(newsItems)

  const applyFilters = () => {
    let filtered = newsItems

    if (selectedSector) {
      filtered = filtered.filter((item) => item.sector.toLowerCase() === selectedSector.toLowerCase())
    }

    if (selectedIssuer) {
      filtered = filtered.filter((item) => item.issuer === selectedIssuer)
    }

    setFilteredNews(filtered)
  }

  const clearFilters = () => {
    setSelectedSector("")
    setSelectedIssuer("")
    setFilteredNews(newsItems)
  }

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "positive":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "negative":
        return <TrendingDown className="h-4 w-4 text-red-600" />
      default:
        return <Building2 className="h-4 w-4 text-gray-600" />
    }
  }

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "positive":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
            Positive
          </Badge>
        )
      case "negative":
        return (
          <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">
            Negative
          </Badge>
        )
      default:
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-100">
            Neutral
          </Badge>
        )
    }
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Issuer</label>
                <Select value={selectedIssuer} onValueChange={setSelectedIssuer}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {issuers.map((issuer) => (
                      <SelectItem key={issuer} value={issuer}>
                        {issuer}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Sector</label>
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {sector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Button onClick={applyFilters} className="w-full">
                  Apply Filters
                </Button>
                <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
                  Clear Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* News Feed */}
        <div className="lg:col-span-3">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Real-Time News Feed</h1>
              <p className="text-muted-foreground mt-2">
                Stay updated with the latest news affecting credit markets and issuers.
              </p>
            </div>

            <div className="space-y-4">
              {filteredNews.map((news) => (
                <Card key={news.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {getImpactIcon(news.impact)}
                        <h3 className="text-lg font-semibold">{news.title}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getImpactBadge(news.impact)}
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {news.timestamp}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{news.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium">Source: {news.source}</span>
                        <Badge variant="outline" className="capitalize">
                          {news.sector}
                        </Badge>
                        <Badge variant="outline">{news.issuer}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {filteredNews.length === 0 && (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Landmark className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No news found</h3>
                    <p className="text-muted-foreground">Try adjusting your filters to see more news items.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
