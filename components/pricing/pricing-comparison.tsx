import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Minus, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingComparisonProps {
  className?: string
}

const comparisonData = [
  {
    feature: "Starting Price",
    packages: "$19.99",
    proPass: "$0.99",
    monthly: "$39.99/mo",
    highlight: "proPass",
  },
  {
    feature: "Access Duration",
    packages: "Lifetime",
    proPass: "3 Days",
    monthly: "30 Days",
    highlight: "packages",
  },
  {
    feature: "Number of Reports",
    packages: "1 / 5 / 20",
    proPass: "5 / day",
    monthly: "Unlimited",
    highlight: null,
  },
  {
    feature: "Ideal Use Case",
    packages: "Checking one car",
    proPass: "Shopping trip",
    monthly: "Dealers & pros",
    highlight: null,
  },
  {
    feature: "Full History Report",
    packages: true,
    proPass: true,
    monthly: true,
    highlight: null,
  },
  {
    feature: "AI Summary",
    packages: true,
    proPass: true,
    monthly: true,
    highlight: null,
  },
  {
    feature: "Market Value",
    packages: true,
    proPass: true,
    monthly: true,
    highlight: null,
  },
  {
    feature: "PDF Export",
    packages: true,
    proPass: true,
    monthly: true,
    highlight: null,
  },
  {
    feature: "Priority Support",
    packages: false,
    proPass: false,
    monthly: true,
    highlight: "monthly",
  },
]

export function PricingComparison({ className }: PricingComparisonProps) {
  const renderCell = (value: string | boolean, isHighlight: boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-success" />
      ) : (
        <Minus className="mx-auto h-5 w-5 text-muted-foreground" />
      )
    }
    return (
      <span className={cn(isHighlight && "font-medium text-primary")}>
        {value}
      </span>
    )
  }

  return (
    <div className={cn("overflow-x-auto", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Feature</TableHead>
            <TableHead className="text-center">Report Packs</TableHead>
            <TableHead className="text-center bg-primary/5 border-x border-primary/10">
              <div className="flex items-center justify-center gap-1">
                <Star className="h-4 w-4 text-primary fill-primary" />
                <span className="font-semibold text-primary">Pro Pass</span>
              </div>
            </TableHead>
            <TableHead className="text-center">Pro Access</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map((row) => (
            <TableRow key={row.feature}>
              <TableCell className="font-medium">{row.feature}</TableCell>
              <TableCell className="text-center text-sm">
                {renderCell(row.packages, row.highlight === "packages")}
              </TableCell>
              <TableCell className="text-center text-sm bg-primary/5 border-x border-primary/10">
                {renderCell(row.proPass, row.highlight === "proPass")}
              </TableCell>
              <TableCell className="text-center text-sm">
                {renderCell(row.monthly, row.highlight === "monthly")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
