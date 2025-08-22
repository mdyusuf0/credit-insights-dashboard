import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, TrendingUp, TrendingDown } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="text-muted-foreground">Monitor your credit portfolio and track performance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building2 className="h-5 w-5" />
              <span>Total Holdings</span>
            </CardTitle>
            <CardDescription>Active credit positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +3 this month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Score</CardTitle>
            <CardDescription>Portfolio credit score</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76</div>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              +2.1% this quarter
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Level</CardTitle>
            <CardDescription>Overall portfolio risk</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                Moderate
              </Badge>
            </div>
            <div className="flex items-center text-sm text-red-600">
              <TrendingDown className="h-4 w-4 mr-1" />
              +0.3% this month
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Portfolio Coming Soon</CardTitle>
          <CardDescription>Detailed portfolio management features are under development.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This section will include detailed portfolio analytics, risk management tools, and performance tracking.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
