import { AlertCircle, CheckCircle2, XCircle, HelpCircle, CreditCard, Scale, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackButton } from "@/components/back-button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { Header } from "@/components/header"

export const metadata = {
  title: "Refund Policy | CarMR",
  description:
    "CarMR refund policy - learn about eligibility, the refund process, and how to contact support.",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center relative">
          <div className="absolute left-0 top-0 hidden lg:block">
            <BackButton />
          </div>
          <div className="lg:hidden mb-4 flex justify-start">
            <BackButton />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight">Refund Policy</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We strive for accuracy and transparency. If you're not satisfied, we're here to make it right within fair guidelines.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid gap-8">

          {/* Eligibility Section */}
          <section className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <h2 className="text-xl font-bold">Eligibility Criteria</h2>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              You may request a full refund within <strong className="text-foreground">14 days</strong> of purchase if:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                <span><strong>Double Charge:</strong> You were billed twice for the same report/plan.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                <span><strong>Empty Report:</strong> The report returned absolutely no data (a "Failed Lookup").</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                <span><strong>System Error:</strong> Technical issues prevented you from accessing your report.</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                <span><strong>Unauthorized:</strong> Proven fraudulent use of your payment method.</span>
              </li>
            </ul>
          </section>

          {/* Not Covered Section */}
          <section className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <XCircle className="h-6 w-6 text-destructive" />
              <h2 className="text-xl font-bold">What's Not Covered</h2>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Refunds are <strong className="text-foreground">rarely granted</strong> for the following reasons:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <XCircle className="h-4 w-4 shrink-0 text-destructive/50 mt-0.5" />
                <span><strong>"No Accidents Found":</strong> A clean history is a valid report result and not grounds for a refund.</span>
              </li>
              <li className="flex gap-2">
                <XCircle className="h-4 w-4 shrink-0 text-destructive/50 mt-0.5" />
                <span><strong>Change of Mind:</strong> You decided you didn't need the report after viewing it.</span>
              </li>
              <li className="flex gap-2">
                <XCircle className="h-4 w-4 shrink-0 text-destructive/50 mt-0.5" />
                <span><strong>Subscription Renewal:</strong> Forgetting to cancel a trial or monthly plan before the renewal date.</span>
              </li>
              <li className="flex gap-2">
                <XCircle className="h-4 w-4 shrink-0 text-destructive/50 mt-0.5" />
                <span><strong>Incomplete Data:</strong> We aggregate data from 100+ sources, but we cannot invent data that wasn't recorded by agencies.</span>
              </li>
            </ul>
          </section>

          {/* Supplemental Adjustment Terms */}
          <section className="rounded-xl border border-primary/20 bg-primary/5 p-6">
            <div className="mb-3 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-foreground">Subscription Refund Adjustments</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If a refund is exceptionally granted for a renewal charge after reports have been run, we reserve the right to deduct the standard price of <strong>each report generated</strong> during that cycle (currently <strong>$19.99/report</strong>) from the total refund amount.
            </p>
          </section>

          {/* Process Steps */}
          <section>
            <div className="mb-6 flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-foreground" />
              <h2 className="text-xl font-bold">How to Request</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">Step 1</span>
                <h4 className="font-semibold">Check Eligibility</h4>
                <p className="text-xs text-muted-foreground">Review the criteria above to ensure your case qualifies.</p>
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">Step 2</span>
                <h4 className="font-semibold">Submit Form</h4>
                <p className="text-xs text-muted-foreground">Use the form below or email <a href="mailto:support@carmr.com" className="text-primary hover:underline">support@carmr.com</a> with your Order ID.</p>
              </div>
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">Step 3</span>
                <h4 className="font-semibold">Processing</h4>
                <p className="text-xs text-muted-foreground">We typically review and process refunds within 5–10 business days.</p>
              </div>
            </div>
          </section>

          {/* Refund Request Form */}
          <section className="rounded-xl border bg-muted/30 p-8">
            <h3 className="mb-6 text-lg font-bold">Submit a Request</h3>
            <form className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="name@example.com" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label htmlFor="orderId" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Order ID
                </label>
                <Input id="orderId" placeholder="e.g. ORD-123456" className="bg-background" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="reason" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Reason
                </label>
                <Select>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a reason..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="empty">Report Empty / Failed Lookup</SelectItem>
                    <SelectItem value="duplicate">Duplicate Charge</SelectItem>
                    <SelectItem value="technical">Technical Error</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="notes" className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Additional Details
                </label>
                <Textarea id="notes" placeholder="Please describe the issue..." rows={3} className="bg-background" />
              </div>
              <div className="sm:col-span-2 pt-2">
                <Button type="submit" className="w-full sm:w-auto font-semibold">
                  Send Request
                </Button>
              </div>
            </form>
          </section>
        </div>

        {/* Footer Disclaimer */}
        <section className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
          <div className="mx-auto max-w-2xl space-y-4">
            <p>
              <strong className="text-foreground">Liability Limitation:</strong> To the maximum extent permitted by law, CarMR holds no liability for vehicle purchasing decisions made based on our reports. Our liability is strictly limited to the purchase price of the report ($100 cap).
            </p>
            <div className="flex items-center justify-center gap-2">
              <Scale className="h-4 w-4" />
              <span>Any disputes are subject to binding arbitration as outlined in our <Link href="/terms" className="underline underline-offset-4 hover:text-foreground">Terms of Service</Link>.</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
