import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Globe, FileText, TrendingUp } from "lucide-react"

const dataSources = [
  {
    name: "SEC EDGAR",
    description: "Financial filings and regulatory documents",
    status: "active",
    updateFrequency: "Real-time",
    icon: FileText,
  },
  {
    name: "Yahoo Finance",
    description: "Market data and financial metrics",
    status: "active",
    updateFrequency: "Every 15 minutes",
    icon: TrendingUp,
  },
  {
    name: "World Bank",
    description: "Economic indicators and country data",
    status: "active",
    updateFrequency: "Daily",
    icon: Globe,
  },
  {
    name: "News APIs",
    description: "Financial news and market sentiment",
    status: "active",
    updateFrequency: "Real-time",
    icon: Database,
  },
]

export default function DataPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Data Sources</h1>
        <p className="text-muted-foreground">Monitor data ingestion from structured and unstructured sources.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dataSources.map((source, index) => {
          const Icon = source.icon
          return (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{source.name}</CardTitle>
                      <CardDescription>{source.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {source.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  Update frequency: <span className="font-medium">{source.updateFrequency}</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Real-Time Data Stream</CardTitle>
          <CardDescription>Live data ingestion monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <div>[2024-01-15 14:32:15] SEC EDGAR: New 10-K filing received - AAPL</div>
            <div>[2024-01-15 14:32:12] Yahoo Finance: Market data updated - 1,247 securities</div>
            <div>[2024-01-15 14:32:08] News API: Sentiment analysis completed - 156 articles</div>
            <div>[2024-01-15 14:32:05] World Bank: Economic indicators refreshed - GDP data</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
