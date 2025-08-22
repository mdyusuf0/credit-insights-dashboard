import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, Building2, FileText, Calendar } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const scoreData = [
  { month: "Jan", score: 76 },
  { month: "Feb", score: 78 },
  { month: "Mar", score: 75 },
  { month: "Apr", score: 79 },
  { month: "May", score: 77 },
  { month: "Jun", score: 81 },
  { month: "Jul", score: 78 },
  { month: "Aug", score: 80 },
  { month: "Sep", score: 82 },
  { month: "Oct", score: 79 },
  { month: "Nov", score: 78 },
  { month: "Dec", score: 78 },
]

const influencingFactors = [
  { factor: "Financial Performance", impact: "Positive", weight: "30%" },
  { factor: "Industry Outlook", impact: "Neutral", weight: "25%" },
  { factor: "Management Quality", impact: "Positive", weight: "20%" },
  { factor: "Regulatory Environment", impact: "Negative", weight: "15%" },
  { factor: "Macroeconomic Conditions", impact: "Neutral", weight: "10%" },
]

const recentNews = [
  {
    title: "Strong Financial Performance",
    date: "2023-11-15",
    description: "Financial results exceeded expectations, leading to a positive adjustment in the score.",
  },
  {
    title: "Regulatory Changes",
    date: "2023-10-20",
    description: "New regulations in the technology sector pose potential challenges.",
  },
]

export default function IssuersPage() {
  return (
    <div className="container py-8 space-y-8">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Issuer Creditworthiness Dashboard</h1>
        <p className="text-muted-foreground">Analyze the creditworthiness of companies and governments in real-time.</p>
      </div>

      {/* Issuer Overview */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Issuer Overview</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/acme-corp-logo.png" />
                <AvatarFallback className="bg-slate-800 text-white">
                  <Building2 className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-2xl font-bold">Acme Corporation</h3>
                <p className="text-muted-foreground">Technology | United States</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Creditworthiness Score */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Creditworthiness Score</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardDescription>Current Score</CardDescription>
              <CardTitle className="text-4xl font-bold">78</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="font-medium">+2%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardDescription>Score Trend</CardDescription>
              <CardTitle className="text-2xl font-bold">78</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-green-600 mb-2">
                <span className="text-sm">Last 12 Months</span>
                <TrendingUp className="h-4 w-4 ml-2" />
                <span className="font-medium">+2%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Score Trend Chart */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Score Trend</CardTitle>
            <CardDescription>Creditworthiness score over the last 12 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={scoreData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" tick={{ fontSize: 12 }} />
                  <YAxis className="text-muted-foreground" tick={{ fontSize: 12 }} domain={[70, 85]} />
                  <Line
                    type="monotone"
                    dataKey="score"
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

      {/* Key Influencing Factors */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Key Influencing Factors</h2>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Factor</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Weight</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {influencingFactors.map((factor, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{factor.factor}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          factor.impact === "Positive"
                            ? "default"
                            : factor.impact === "Negative"
                              ? "destructive"
                              : "secondary"
                        }
                        className={
                          factor.impact === "Positive"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : factor.impact === "Negative"
                              ? "bg-red-100 text-red-800 hover:bg-red-100"
                              : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                        }
                      >
                        {factor.impact}
                      </Badge>
                    </TableCell>
                    <TableCell>{factor.weight}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Recent News & Events */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Recent News & Events</h2>
        <div className="space-y-4">
          {recentNews.map((news, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{news.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        Published: {news.date}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{news.description}</p>
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
