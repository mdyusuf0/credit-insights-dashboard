"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts"
import { useState } from "react"
import Link from "next/link"

const featureImportanceData = [
  { feature: "Financial Stability", value: 85, contribution: "+15" },
  { feature: "Market Position", value: 72, contribution: "+8" },
  { feature: "Regulatory Compliance", value: 68, contribution: "+5" },
  { feature: "Management Quality", value: 78, contribution: "+12" },
  { feature: "Industry Outlook", value: 65, contribution: "+3" },
]

const historicalTrendData = [
  { year: "2019", value: 68 },
  { year: "2020", value: 65 },
  { year: "2021", value: 72 },
  { year: "2022", value: 78 },
  { year: "2023", value: 75 },
]

const relatedNews = [
  {
    title: "Issuer Announces Successful Bond Issuance",
    description:
      "The successful issuance of bonds has significantly improved the issuer's financial stability, as reflected in the latest credit score update.",
    image: "/financial-news-thumbnail.png",
  },
  {
    title: "Regulatory Compliance Update",
    description:
      "Recent compliance checks have confirmed the issuer's adherence to all relevant regulations, positively impacting the credit score.",
    image: "/regulatory-document.png",
  },
]

export default function ResearchPage() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    "Financial Stability": true,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="container py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/issuers" className="hover:text-foreground">
          Issuers
        </Link>
        <span>/</span>
        <span className="text-foreground">Issuer Details</span>
      </nav>

      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Issuer Credit Score Analysis</h1>
        <p className="text-muted-foreground">Explore the factors influencing the credit score of the issuer.</p>
      </div>

      {/* Feature Importance */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Feature Importance</CardTitle>
                <CardDescription>Contribution to Credit Score</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">+15</div>
                <div className="text-sm text-muted-foreground">
                  Current{" "}
                  <Badge variant="secondary" className="ml-1 bg-green-100 text-green-800">
                    +5%
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Bar Chart Visualization */}
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={featureImportanceData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis type="number" className="text-muted-foreground" tick={{ fontSize: 12 }} />
                    <YAxis
                      dataKey="feature"
                      type="category"
                      className="text-muted-foreground"
                      tick={{ fontSize: 12 }}
                      width={120}
                    />
                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Feature Labels */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {featureImportanceData.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-medium">{item.feature}</div>
                    <div className="text-xs text-muted-foreground">{item.contribution}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Feature Details */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Feature Details</h2>
        <div className="space-y-4">
          {featureImportanceData.map((feature, index) => (
            <Card key={index}>
              <Collapsible open={openSections[feature.feature]} onOpenChange={() => toggleSection(feature.feature)}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <CardTitle className="text-lg">{feature.feature}</CardTitle>
                        <Badge variant="outline">{feature.contribution}</Badge>
                      </div>
                      {openSections[feature.feature] ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    {feature.feature === "Financial Stability" && (
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          This feature assesses the issuer's financial health, including metrics like debt-to-equity
                          ratio, cash flow, and profitability. A higher financial stability score indicates a lower risk
                          of default. Historical trends show a consistent improvement over the past five years,
                          reflecting strong financial management. Recent news highlights a successful bond issuance,
                          further strengthening the issuer's financial position.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Debt-to-Equity Ratio</div>
                            <Progress value={75} className="h-2" />
                            <div className="text-xs text-muted-foreground">0.45 (Good)</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Cash Flow</div>
                            <Progress value={85} className="h-2" />
                            <div className="text-xs text-muted-foreground">$2.1B (Strong)</div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-sm font-medium">Profitability</div>
                            <Progress value={80} className="h-2" />
                            <div className="text-xs text-muted-foreground">15.2% ROE (Excellent)</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {feature.feature !== "Financial Stability" && (
                      <p className="text-muted-foreground">
                        Detailed analysis for {feature.feature} shows various contributing factors that influence the
                        overall credit score. This includes historical performance, current market conditions, and
                        future outlook assessments.
                      </p>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </section>

      {/* Historical Trends */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Historical Trends</CardTitle>
                <CardDescription>Financial Stability Trend</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">+10%</div>
                <div className="text-sm text-muted-foreground">
                  Last 5 Years{" "}
                  <Badge variant="secondary" className="ml-1 bg-green-100 text-green-800">
                    +2%
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalTrendData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="year" className="text-muted-foreground" tick={{ fontSize: 12 }} />
                  <YAxis className="text-muted-foreground" tick={{ fontSize: 12 }} domain={[60, 85]} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 5 }}
                    activeDot={{ r: 7, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related News */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedNews.map((news, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <img
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{news.title}</h3>
                    <p className="text-sm text-muted-foreground">{news.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
