import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Building2, Factory, Fuel } from "lucide-react"
import Link from "next/link"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const trendData = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 72 },
  { month: "Mar", value: 68 },
  { month: "Apr", value: 75 },
  { month: "May", value: 71 },
  { month: "Jun", value: 82 },
  { month: "Jul", value: 78 },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Dark Background */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="absolute inset-0 bg-[url('/placeholder-0om7b.png')] opacity-10 bg-cover bg-center" />
        <div className="relative container">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Real-Time Intelligence
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Deeper Credit Insights</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Gain a comprehensive understanding of creditworthiness across companies and governments with our
              intelligence platform.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/research">Explore the Platform</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container py-8 space-y-8">
        {/* Market Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Overall Credit Health</CardDescription>
                <CardTitle className="text-2xl font-bold">Stable</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +2%
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Average Issuer Rating</CardDescription>
                <CardTitle className="text-2xl font-bold">BBB-</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-red-600">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -1%
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardDescription>Market Volatility</CardDescription>
                <CardTitle className="text-2xl font-bold">Low</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +0.5%
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sector Performance */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sector Performance</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Technology Sector */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardDescription>Technology Sector</CardDescription>
                    <CardTitle className="text-xl">Positive</CardTitle>
                  </div>
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex items-center text-sm text-green-600">
                  Last Quarter <TrendingUp className="h-4 w-4 ml-1" /> +5%
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Software</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hardware</span>
                    <span>72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Semiconductors</span>
                    <span>68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Energy Sector */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardDescription>Energy Sector</CardDescription>
                    <CardTitle className="text-xl">Neutral</CardTitle>
                  </div>
                  <Fuel className="h-8 w-8 text-orange-600" />
                </div>
                <div className="flex items-center text-sm text-green-600">
                  Last Quarter <TrendingUp className="h-4 w-4 ml-1" /> +1%
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Oil & Gas</span>
                    <span>58%</span>
                  </div>
                  <Progress value={58} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Renewable Energy</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Utilities</span>
                    <span>62%</span>
                  </div>
                  <Progress value={62} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Issuers */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Issuers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8" />
                </div>
                <CardTitle>TechCorp Inc.</CardTitle>
                <CardDescription className="text-slate-300">
                  Leading software company with strong financials.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <img src="/grand-government-building.png" alt="National Treasury" className="h-12 w-12 rounded" />
                </div>
                <CardTitle>National Treasury of Eldoria</CardTitle>
                <CardDescription>Sovereign debt issuer with stable outlook.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8" />
                </div>
                <CardTitle>Global Finance Group</CardTitle>
                <CardDescription className="text-slate-300">Diversified financial services provider.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Trend Analysis */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Trend Analysis</h2>
              <p className="text-muted-foreground">Creditworthiness Trends</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">Improving</div>
              <div className="text-sm text-green-600 flex items-center">
                Last 12 Months <TrendingUp className="h-4 w-4 ml-1" /> +3%
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-muted-foreground" />
                    <YAxis className="text-muted-foreground" />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Dive Deeper?</h2>
          <p className="text-lg text-muted-foreground mb-8">Start exploring comprehensive credit intelligence today.</p>
          <Button size="lg" asChild>
            <Link href="/issuers">Explore the Platform</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
